import { useCallback, useEffect, useRef, useState } from 'react';
import { generateStars } from '@/utils/stars';
import { addVariableToElement } from '@/utils/dom';
import { useDebounceValue } from '@/hooks/useDebounceValue';
import '@/styles/components/stars.css';

const STARS_IDS = {
  1: 'stars',
  2: 'stars2',
  3: 'stars3',
};

const STAR_POSITION_VAR = '--_stars_positions';

const StarsBackground = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [hasToResize, setHasToResize] = useDebounceValue(false, 150);

  const setBackgroundStars = useCallback(() => {
    if (!ref.current) return;

    const container = ref.current;

    const starsElements = {
      1: document.getElementById(STARS_IDS[1]),
      2: document.getElementById(STARS_IDS[2]),
      3: document.getElementById(STARS_IDS[3]),
    };

    const containerHeight = container.clientHeight;
    const containerWidth = container.clientWidth;

    const root = document.documentElement;

    if (!root) return;

    root.style.setProperty('--_stars-translate-size', `${containerHeight}px`);

    const generate = (n: number) =>
      generateStars(n, containerWidth, containerHeight);

    addVariableToElement(starsElements[1], STAR_POSITION_VAR, generate(700));
    addVariableToElement(starsElements[2], STAR_POSITION_VAR, generate(200));
    addVariableToElement(starsElements[3], STAR_POSITION_VAR, generate(100));

    setHasToResize(false);
  }, [setHasToResize]);

  useEffect(() => {
    if (!mounted) return setMounted(true);
    // First render
    setBackgroundStars();

    // Start debounced resizing when window size change
    window.addEventListener('resize', () => setHasToResize(true));

    // Cleanup
    return () => {
      window.removeEventListener('resize', () => setHasToResize(true));
    };
  }, [setBackgroundStars, setHasToResize, mounted]);

  // Debounced resizing handler
  useEffect(() => {
    if (!mounted || !hasToResize) return;
    setBackgroundStars();
  }, [hasToResize, setBackgroundStars, mounted]);

  return (
    <div id='stars-container'>
      <div id='stars-inner' ref={ref}>
        <div id={STARS_IDS[1]} />
        <div id={STARS_IDS[2]} />
        <div id={STARS_IDS[3]} />
      </div>
    </div>
  );
};

export default StarsBackground;
