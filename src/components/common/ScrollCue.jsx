function ScrollCue() {
  return (
    <div className="absolute md:bottom-20 bottom-14 left-1/2 -translate-x-1/2 z-20">
      <div className="flex flex-col items-center justify-center text-white/60 select-none scroll-cue">
        <div className="relative h-12 w-7 rounded-full border border-white/40">
          <span className="absolute left-1/2 top-2 h-2 w-2 -translate-x-1/2 rounded-full bg-white/70" />
        </div>
        <div className="mt-2 flex flex-col items-center gap-1">
          <span className="h-2 w-2 rotate-45 border-b border-r border-white/60" />
          <span className="h-2 w-2 rotate-45 border-b border-r border-white/35" />
        </div>
      </div>
    </div>
  );
}

export default ScrollCue;
