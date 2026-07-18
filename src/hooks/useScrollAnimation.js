import { useEffect, useRef, useState } from 'react';

/**
 * useScrollAnimation — triggers CSS class when element enters viewport.
 * @param {number} threshold - 0-1, percentage of element visible to trigger
 * @param {string} rootMargin - IntersectionObserver rootMargin
 */
export function useScrollAnimation(threshold = 0.15, rootMargin = '0px 0px -60px 0px') {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el); // fire once
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}

/**
 * useStaggerAnimation — returns visibility state + ref for a container.
 * Children use CSS animation-delay via index.
 */
export function useStaggerAnimation(threshold = 0.1) {
  return useScrollAnimation(threshold, '0px 0px -40px 0px');
}
