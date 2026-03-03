import { useEffect, useRef } from 'react';

export function useCursorFollower() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const node = cursorRef.current;
    if (!node) {
      return undefined;
    }

    const handleMouseMove = (event) => {
      node.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return cursorRef;
}
