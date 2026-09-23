import { Link } from 'react-router-dom';
import { BRAND } from '../data';
import ScrollReveal from './ScrollReveal';

const MAP_QUERY = encodeURIComponent(`${BRAND.address}, Hyderabad, Telangana, India`);
const MAP_EMBED = `https://www.google.com/maps?q=${MAP_QUERY}&z=14&output=embed`;
const MAP_LINK = `https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`;

export default function HomeMapSection() {
  return (
    <section className="home-map section" id="location" aria-labelledby="home-map-heading">
      <div className="container">
        <ScrollReveal variant="up">
          <div className="section-head">
            <p className="kicker">Visit us</p>
            <h2 id="home-map-heading">Find us in Ramanthapur</h2>
            <div className="gold-line" />
            <p className="muted" style={{ maxWidth: 520, margin: '0 auto' }}>
              Based in Ramanthapur — we cater across Hyderabad and beyond. Call or message us any time for site visits and event planning.
            </p>
          </div>
        </ScrollReveal>

        <div className="home-map__grid">
          <ScrollReveal variant="left">
            <div className="home-map__card">
              <h3>Contact & directions</h3>
              <p><strong>Address</strong><br />{BRAND.address}, Hyderabad, Telangana</p>
              <p>
                <strong>Phone</strong><br />
                <a href={`tel:+91${BRAND.phone}`}>+91 {BRAND.phone}</a>
                <br />
                <a href={`tel:+91${BRAND.phone2}`}>+91 {BRAND.phone2}</a>
              </p>
              <p>
                <strong>Email</strong><br />
                <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a>
              </p>
              <p className="muted">Open 24/7 for bookings and event-day support.</p>
              <div className="home-map__actions">
                <a className="btn btn-gold" href={MAP_LINK} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
                <Link className="btn btn-maroon" to="/contact">Contact page</Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={100}>
            <div className="home-map__frame">
              <iframe
                title={`${BRAND.name} location map`}
                src={MAP_EMBED}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
