import { Link } from 'react-router-dom';
import ScrollReveal, { revealDelay } from './ScrollReveal';
import { SITE_IMAGES } from '../siteImages';

export default function HomeMenuSection() {
  return (
    <section className="home-menu" aria-labelledby="home-menu-heading">
      <div className="home-menu__inner">
        <ScrollReveal variant="up">
          <h2 id="home-menu-heading" className="home-menu__title">Our Menu</h2>
          <p className="home-menu__lede">Browse our full vegetarian and non-vegetarian lists from the official SPC menu books — silver, gold, and platinum packages on the veg menu.</p>
        </ScrollReveal>

        <div className="home-menu__grid">
          {SITE_IMAGES.menuShowcase.map((card, index) => (
            <ScrollReveal
              key={card.title}
              as={Link}
              to={card.href}
              variant="up"
              delay={revealDelay(index, 100, 80)}
              className="home-menu__card"
              aria-label={`Open ${card.title}`}
            >
              <img src={card.image} alt={card.title} loading="lazy" decoding="async" />
              <span className="home-menu__card-label">{card.title}</span>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="up" delay={200} className="home-menu__footer">
          <p className="home-menu__cta">
            <Link className="btn btn-gold" to="/menu">View Full Menu</Link>
          </p>
          <p className="home-menu__note">Customized Menu Services Are Available</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
