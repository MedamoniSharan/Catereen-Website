import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { OccasionCatering } from '../components/OccasionCatering';
import ScrollReveal from '../components/ScrollReveal';
import HomeMenuSection from '../components/HomeMenuSection';
import HomeMapSection from '../components/HomeMapSection';
import { Testimonials } from '../components/Testimonials';
import { SITE_IMAGES } from '../siteImages';

export default function Home() {
  return (
    <>
      <Hero />
      <div className="container stats">
        {[
          ['2007', 'Year we began'],
          ['100–5k', 'Guests we serve'],
          ['24/7', 'Booking & support'],
          ['All events', 'One team for every occasion'],
        ].map(([value, label], index) => (
          <ScrollReveal key={label} variant="up" delay={index * 90}>
            <div className="stat"><b>{value}</b><span>{label}</span></div>
          </ScrollReveal>
        ))}
      </div>
      <section className="section" id="home-about">
        <div className="container grid-2">
          <ScrollReveal variant="left">
            <div>
              <p className="kicker">About us</p>
              <h2>Elevating your events with food people remember.</h2>
              <div className="gold-line" style={{ marginLeft: 0 }} />
              <p className="muted">From 2007 we have cooked for families and companies across Ramanthapur and beyond. Whether you host 100 close guests or 5,000, we plan the menu, staff the counters, and stay available around the clock.</p>
              <div className="feature-list">
                {[
                  ['01', 'Authentic taste', 'Traditional recipes with careful sourcing and consistent quality.'],
                  ['02', 'Service excellence', 'On-site teams that scale with your crowd, including last-minute support.'],
                  ['03', 'Every occasion', 'Weddings, corporate, birthdays, rituals, and private celebrations.'],
                ].map(([num, title, text], index) => (
                  <ScrollReveal key={num} variant="up" delay={120 + index * 100}>
                    <div className="feature">
                      <div className="icon">{num}</div>
                      <div><strong>{title}</strong><p className="muted">{text}</p></div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <p style={{ marginTop: 22 }}><Link className="btn btn-maroon" to="/about">More about us</Link></p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={120}>
            <div className="photo-frame">
              <img src={SITE_IMAGES.homeAbout} alt="Catered feast with fresh dishes and garnishes" loading="lazy" decoding="async" />
            </div>
          </ScrollReveal>
        </div>
      </section>
      <OccasionCatering />
      <div className="strip">
        <div className="marquee">
          {Array.from({ length: 2 }).flatMap((_, i) => ['Wedding', 'Anniversary', 'Engagement', 'Seemantham', 'Annaprasana', 'Birthday', 'House warming', 'Mehndi', 'Corporate', 'Retirement'].map((t) => <span key={`${t}-${i}`}>{t}</span>))}
        </div>
      </div>
      <section className="section why">
        <div className="container">
          <ScrollReveal variant="up">
            <div className="section-head">
              <p className="kicker">Why choose us</p>
              <h2>Leave your guests talking about the food.</h2>
              <div className="gold-line" />
            </div>
          </ScrollReveal>
          <div className="grid-4">
            {[
              ['Authentic taste', 'Recipes shaped by family kitchens and years of feast service.'],
              ['Service excellence', 'Hosts, counters, and kitchen crews who stay calm when numbers grow.'],
              ['Best quality', 'Fresh preparation, clean setups, and consistent plating.'],
              ['Always on', '24/7 phone and WhatsApp for enquiries, changes, and event-day help.'],
            ].map(([title, text], index) => (
              <ScrollReveal key={title} variant="up" delay={index * 100}>
                <div className="card"><div className="icon">✦</div><h3>{title}</h3><p className="muted">{text}</p></div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
      <HomeMenuSection />
      <Testimonials />
      <HomeMapSection />
    </>
  );
}
