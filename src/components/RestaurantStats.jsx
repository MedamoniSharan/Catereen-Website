import { useEffect, useRef, useState } from 'react';
import ScrollReveal, { revealDelay } from './ScrollReveal';

const defaultStats = [
  { value: 19, suffix: '+', label: 'Years Of Excellence', image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80', alt: 'A beautifully prepared catered dining table' },
  { value: 100, suffix: '–5k', label: 'Guests We Serve', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80', alt: 'A selection of colorful dishes ready to serve' },
  { value: 24, suffix: '/7', label: 'Always Available', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80', alt: 'A chef preparing an elegant dish' },
  { value: 2007, label: 'Serving Since', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80', alt: 'A warm dining scene' }
];

function CountUp({ value }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const io = new IntersectionObserver(([entry], obs) => {
      if (!entry.isIntersecting) return;
      obs.disconnect();
      if (reduced) { setN(value); return; }
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min(1, (now - start) / 1400);
        setN(Math.round(value * (1 - (1 - t) ** 3)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.45 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{n}</span>;
}

export function RestaurantStats({ stats = defaultStats }) {
  return (
    <section className="restaurant-stats" aria-labelledby="restaurant-stats-heading">
      <h2 id="restaurant-stats-heading" className="sr-only">Our catering by the numbers</h2>
      <div className="restaurant-stats__container">
        <div className="restaurant-stats__grid">
          {stats.map((stat, index) => (
            <ScrollReveal key={`${stat.label}-${stat.value}`} variant="up" delay={revealDelay(index)}>
              <article className="stat-card">
                <img className="stat-card__image" src={stat.image} alt={stat.alt} />
                <div className="stat-card__shade" aria-hidden="true" />
                <div className="stat-card__content">
                  <p className="stat-card__number">
                    <CountUp value={stat.value} />
                    {stat.suffix ? <span className="stat-card__suffix">{stat.suffix}</span> : null}
                  </p>
                  <p className="stat-card__label">{stat.label}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
