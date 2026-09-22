import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

const SERVICES = [
  { number: '01', category: 'Celebrations', title: 'Wedding Catering', href: '/services/wedding', description: 'A celebration of two souls finding their way to the same rhythm. Tonight is about the laughter that binds us, the memories that sustain us, and the love that brought us all together under one roof. Let the night begin.', image: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_12_12-AM.png' },
  { number: '02', category: 'Celebrations', title: 'Reception Catering', href: '/services/wedding', description: 'The grand finale to your celebration. We blend sophisticated presentation with world-class flavors to create a reception menu that honors your journey and delights your guests. Elegant, seamless, and unforgettable.', image: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_11_32-AM.png' },
  { number: '03', category: 'Gatherings', title: 'Housewarming Catering', href: '/services/housewarming', description: 'New home, new memories. Welcome friends and family with a curated menu designed for warmth and hospitality. From intimate bites to traditional feasts, we make your first celebration at home truly special.', image: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_11_58-AM.png' },
  { number: '04', category: 'Gatherings', title: 'Farmhouse & Resort Catering', href: '/services/all-events', description: 'Escape the ordinary. Whether it’s a rustic retreat or a luxury poolside soirée, our menus are crafted to complement the beauty of the outdoors. Fresh, vibrant, and perfectly suited for a relaxed, destination vibe.', image: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_11_25-AM.png' },
  { number: '05', category: 'Celebrations', title: 'Engagement Catering', href: '/services/engagement', description: 'A toast to the ‘Yes.’ Celebrate the beginning of your forever with a dining experience as bright and promising as your future together. We craft intimate, romantic menus that set the perfect tone for your upcoming union.', image: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_12_03-AM.png' },
  { number: '06', category: 'Gatherings', title: 'Corporate Catering', href: '/services/corporate', description: 'Seamless service for the modern workplace. From high-stakes luncheons to large-scale company milestones, we provide punctual, polished, and professional catering solutions tailored to your business needs.', image: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_11_47-AM.png' },
  { number: '07', category: 'Celebrations', title: 'Birthday Catering', href: '/services/birthday', description: 'Another year of flavor. From milestone birthdays to intimate family gatherings, we bring the feast to the party. Custom menus, fun presentations, and the perfect spread to celebrate your unique story.', image: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_11_53-AM.png' }
];

export function OccasionCatering() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(4);
  const maxIndex = Math.max(0, SERVICES.length - visible);

  useEffect(() => {
    const updateVisible = () => {
      setVisible(window.innerWidth < 640 ? 1 : window.innerWidth < 960 ? 2 : 4);
    };
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  useEffect(() => {
    setActive((current) => Math.min(current, maxIndex));
  }, [maxIndex]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current >= maxIndex ? 0 : current + 1));
    }, 4200);
    return () => window.clearInterval(timer);
  }, [maxIndex]);

  const dots = useMemo(() => SERVICES.map((service) => service.number), []);

  return (
    <section className="occasion-section" aria-labelledby="occasion-title">
      <div className="occasion-inner">
        <ScrollReveal variant="up">
          <p className="occasion-eyebrow"><span>Our Services</span></p>
          <h2 id="occasion-title">A Feast For Every Occasion</h2>
          <div className="occasion-divider" aria-hidden="true" />
        </ScrollReveal>
        <ScrollReveal variant="up" delay={120}>
        <div className="carousel-window" aria-live="polite">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${active * (100 / visible + 10 / visible)}%)` }}
          >
            {SERVICES.map((service) => (
              <article
                key={service.number}
                className="occasion-card"
                style={{ backgroundImage: `linear-gradient(180deg, rgba(18, 4, 8, 0.02) 22%, rgba(18, 4, 8, 0.9) 100%), url(${service.image})` }}
                aria-label={`${service.title} service`}
              >
                <div className="card-content">
                  <span className="card-number">{service.number}</span>
                  <span className="card-category">{service.category}</span>
                  <span className="card-rule" aria-hidden="true" />
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link to={service.href} className="explore-button" aria-label={`Explore ${service.title}`}>
                    <span>Explore</span><span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
        </ScrollReveal>
        <div className="carousel-controls" aria-label="Carousel controls">
          <button type="button" className="carousel-arrow" onClick={() => setActive((current) => (current <= 0 ? maxIndex : current - 1))} aria-label="Previous services">
            <ChevronLeft size={16} />
          </button>
          <div className="dots">
            {dots.map((number, index) => (
              <button
                type="button"
                key={number}
                className={`dot ${index === active ? 'active' : ''}`}
                onClick={() => setActive(Math.min(index, maxIndex))}
                aria-label={`Go to service ${number}`}
                aria-current={index === active ? 'true' : undefined}
              />
            ))}
          </div>
          <button type="button" className="carousel-arrow" onClick={() => setActive((current) => (current >= maxIndex ? 0 : current + 1))} aria-label="Next services">
            <ChevronRight size={16} />
          </button>
        </div>
        <ScrollReveal variant="up" delay={180}>
          <p style={{ textAlign: 'center', marginTop: 28 }}>
            <Link className="btn btn-gold" to="/services">View all services</Link>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
