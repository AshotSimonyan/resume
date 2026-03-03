#!/usr/bin/env python3
from __future__ import annotations

import argparse
from pathlib import Path

from PIL import Image, ImageEnhance, ImageFilter, ImageOps, ImageChops


def center_square(img: Image.Image) -> Image.Image:
    w, h = img.size
    side = min(w, h)
    left = (w - side) // 2
    top = (h - side) // 2
    return img.crop((left, top, left + side, top + side))


def build_illustration(src_path: Path, out_path: Path, size: int = 640) -> None:
    src = Image.open(src_path).convert("RGB")
    src = center_square(src).resize((size, size), Image.Resampling.LANCZOS)

    # Smooth skin/regions first, then push contrast for a drawn look.
    base = src.filter(ImageFilter.MedianFilter(size=5)).filter(ImageFilter.SMOOTH_MORE)
    base = ImageEnhance.Contrast(base).enhance(1.18)
    base = ImageEnhance.Color(base).enhance(1.22)

    # Posterize/quantize to flatten tones like a digital illustration.
    flat = ImageOps.posterize(base, 4)
    flat = flat.quantize(colors=22, method=Image.Quantize.MEDIANCUT).convert("RGB")

    # Extract line art from edges.
    edges = src.convert("L").filter(ImageFilter.FIND_EDGES)
    edges = ImageEnhance.Contrast(edges).enhance(2.4)
    edges = edges.point(lambda p: 255 if p > 52 else 0)
    line_rgb = ImageOps.invert(edges).convert("RGB")

    # Blend line art on top of flattened colors.
    mixed = ImageChops.multiply(flat, line_rgb)
    mixed = ImageEnhance.Sharpness(mixed).enhance(1.8)

    # Build soft circular alpha so image works like the original hero illustration.
    mask = Image.new("L", (size, size), 0)
    circle = Image.new("L", (size - 28, size - 28), 255)
    mask.paste(circle, (14, 14))
    mask = mask.filter(ImageFilter.GaussianBlur(3))

    out = mixed.convert("RGBA")
    out.putalpha(mask)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    out.save(out_path, "PNG", optimize=True)


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Generate a stylized illustration image from a portrait photo."
    )
    parser.add_argument("input", type=Path, help="Input image path (png/jpg/webp)")
    parser.add_argument(
        "output",
        type=Path,
        nargs="?",
        default=Path("public/linkedin-illustration.png"),
        help="Output PNG path",
    )
    parser.add_argument("--size", type=int, default=640, help="Output width/height")
    args = parser.parse_args()

    build_illustration(args.input, args.output, size=args.size)
    print(f"Saved illustration: {args.output}")


if __name__ == "__main__":
    main()
