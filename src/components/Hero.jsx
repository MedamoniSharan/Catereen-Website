import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND } from '../data';
import { SITE_IMAGES } from '../siteImages';

export default function Hero() {
  const [ready, setReady] = useState(false);
  const [active, setActive] = useState(0);
  const slides = SITE_IMAGES.heroSlides;

  useEffect(() => {
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(timer);
  }, [slides.length]);

  const showPrevious = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  return (
    <section className={`hero ${ready ? 'is-ready' : ''}`} aria-label={BRAND.name}>
      <div className="hero-stage">
        <div className="hero-copy">
          <img className="hero-logo hero-anim" src="/logo.png?v=download" alt={BRAND.name} />
          <p className="hero-badge hero-anim">Est. 2007 · Ramanthapur · Open 24/7</p>
          <h1>
            <span className="hero-line hero-anim">A feast for</span>
            <span className="hero-line hero-line--gold hero-anim">every occasion.</span>
          </h1>
          <p className="lede hero-anim">Weddings, house warmings, corporate days, and every other gathering — from 100 to 5,000 guests, cooked and served around the clock.</p>
          <div className="hero-actions hero-anim">
            <Link className="btn btn-gold" to="/book">Reserve your date</Link>
            <a className="btn btn-outline" href={BRAND.wa} target="_blank" rel="noopener">WhatsApp us</a>
          </div>
          <div className="hero-proof hero-anim">
            <div className="hero-avatars" aria-hidden="true">
              {SITE_IMAGES.heroAvatars.map((src) => (
                <span key={src} style={{ backgroundImage: `url('${src}')` }} />
              ))}
            </div>
            <p>Trusted for all events · 100–5,000 guests</p>
          </div>
        </div>

        <div className="hero-carousel hero-anim" aria-roledescription="carousel" aria-label="Catering highlights">
          <div className="hero-carousel__viewport">
            <div className="hero-carousel__track" style={{ transform: `translateX(-${active * 100}%)` }}>
              {slides.map((slide) => (
                <figure className="hero-carousel__slide" key={slide.caption}>
                  <img src={slide.src} alt={slide.caption} loading="eager" decoding="async" />
                  <figcaption>{slide.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
          <div className="hero-carousel__controls">
            <button type="button" className="hero-carousel__arrow" onClick={showPrevious} aria-label="Previous slide">
              <ChevronLeft size={18} aria-hidden="true" />
            </button>
            <div className="hero-carousel__dots" role="tablist" aria-label="Choose slide">
              {slides.map((slide, index) => (
                <button
                  key={slide.caption}
                  type="button"
                  role="tab"
                  className={`hero-carousel__dot ${index === active ? 'is-active' : ''}`}
                  aria-selected={index === active}
                  aria-label={`Slide ${index + 1}: ${slide.caption}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button type="button" className="hero-carousel__arrow" onClick={showNext} aria-label="Next slide">
              <ChevronRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <a className="hero-scroll" href="#home-about">Scroll</a>
    </section>
  );
}
