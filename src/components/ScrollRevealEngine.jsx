import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { bindScrollReveals, createScrollRevealObserver } from '../scrollRevealEngine';

export default function ScrollRevealEngine() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = createScrollRevealObserver((el, isVisible) => {
      el.classList.toggle('is-visible', isVisible);
    });

    let frame = 0;
    const scan = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => bindScrollReveals(observer));
    };

    scan();

    const mutationObserver = new MutationObserver(scan);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.cancelAnimationFrame(frame);
      mutationObserver.disconnect();
      observer.disconnect();
    };
  }, [pathname]);

  return null;
}
