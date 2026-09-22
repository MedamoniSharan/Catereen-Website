export const SCROLL_REVEAL_OPTIONS = {
  threshold: 0.14,
  rootMargin: '0px 0px -5% 0px',
};

export function bindScrollReveals(observer, root = document) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const nodes = root.querySelectorAll('.scroll-reveal:not([data-reveal-watched])');

  nodes.forEach((el) => {
    el.dataset.revealWatched = 'true';
    if (reduced) {
      el.classList.add('is-visible');
      return;
    }
    observer.observe(el);
    // Ensure above-the-fold / clickable blocks work immediately after route change.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
    }
  });
}

export function createScrollRevealObserver(onVisibilityChange) {
  return new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      onVisibilityChange(entry.target, entry.isIntersecting);
    });
  }, SCROLL_REVEAL_OPTIONS);
}
