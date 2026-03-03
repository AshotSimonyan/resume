import { useCursorFollower } from '../../hooks/useCursorFollower';

function CursorFollower() {
  const cursorRef = useCursorFollower();

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none" ref={cursorRef}>
      <span className="block h-8 w-8 rounded-full bg-transparent border opacity-80 shadow-lg" />
    </div>
  );
}

export default CursorFollower;
