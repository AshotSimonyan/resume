import { useEffect, useMemo, useState } from 'react';

export function useTypeCycle({ texts = [], typingSpeed = 80, pause = 1200 }) {
  const phrases = useMemo(() => (texts.length ? texts : ['']), [texts]);
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex] || '';

    const timer = setTimeout(
      () => {
        if (!deleting && charIndex < current.length) {
          setCharIndex((value) => value + 1);
          return;
        }

        if (!deleting && charIndex === current.length) {
          setDeleting(true);
          return;
        }

        if (deleting && charIndex > 0) {
          setCharIndex((value) => value - 1);
          return;
        }

        setDeleting(false);
        setPhraseIndex((value) => (value + 1) % phrases.length);
      },
      !deleting && charIndex === current.length ? pause : typingSpeed
    );

    return () => {
      clearTimeout(timer);
    };
  }, [charIndex, deleting, phraseIndex, phrases, typingSpeed, pause]);

  const current = phrases[phraseIndex] || '';
  return current.slice(0, charIndex);
}
