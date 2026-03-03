import { useEffect, useRef, useState } from 'react';

export function useScrollCueVisibility(offset = 50) {
  const sectionRef = useRef(null);
  const [showCue, setShowCue] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) {
        return;
      }

      const threshold = section.offsetHeight - offset;
      setShowCue(window.scrollY < threshold);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return { sectionRef, showCue };
}
