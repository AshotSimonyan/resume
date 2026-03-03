function ScrollCue() {
  return (
    <div className="absolute md:bottom-20 bottom-14 left-1/2 -translate-x-1/2 z-20">
      <div className="flex items-center justify-center text-white/50 select-none scroll-cue">
        <span className="text-8xl leading-none">v</span>
      </div>
    </div>
  );
}

export default ScrollCue;
