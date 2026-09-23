import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { BRAND, MENUS, SERVICES } from '../data';

const TOPBAR_TICKER = [
  'Est. 2007 · Ramanthapur',
  'Serving 100 to 5,000 guests',
  '24/7 bookings & event support',
  `Call +91 ${BRAND.phone}`,
  `Call +91 ${BRAND.phone2}`,
  BRAND.email,
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [drop, setDrop] = useState('');
  const tickerItems = [...TOPBAR_TICKER, ...TOPBAR_TICKER];

  return (
    <>
      <div className="topbar">
        <p className="sr-only">
          Est. 2007 Ramanthapur. Serving 100 to 5,000 guests. Open 24/7. Phone +91 {BRAND.phone} / +91 {BRAND.phone2}. Email {BRAND.email}.
        </p>
        <div className="topbar-marquee" aria-hidden="true">
          <div className="topbar-marquee__track">
            {tickerItems.map((item, index) => (
              <span className="topbar-marquee__item" key={`${item}-${index}`}>
                {item.includes('@') ? (
                  <a href={`mailto:${BRAND.email}`}>{item}</a>
                ) : item.startsWith('Call') ? (
                  <a href={`tel:+91${item.replace(/\D/g, '').slice(-10)}`}>{item}</a>
                ) : item.includes('24/7') ? (
                  <>
                    <span className="badge-247">24/7</span>
                    {item.replace('24/7 ', '')}
                  </>
                ) : (
                  item
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container nav-wrap">
          <Link className="brand" to="/" onClick={() => setOpen(false)}>
            <img src="/logo.png?v=download" alt="Sree Priyadaarshini Catering logo" />
            <span className="brand-text">
              <strong>Sree Priyadaarshini</strong>
              <span>Catering · 24/7</span>
            </span>
          </Link>
          <button className="menu-toggle" aria-label="Open menu" onClick={() => setOpen((v) => !v)}>☰</button>
          <ul className={`nav ${open ? 'open' : ''}`}>
            <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')} end onClick={() => setOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>About</NavLink></li>
            <li className={drop === 'services' ? 'open' : ''} onMouseEnter={() => setDrop('services')} onMouseLeave={() => setDrop('')}>
              <div className="nav-parent">
                <NavLink to="/services" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => { setOpen(false); setDrop(''); }}>Services</NavLink>
                <button
                  type="button"
                  className="nav-subtoggle"
                  aria-expanded={drop === 'services'}
                  aria-label="Show services list"
                  onClick={() => setDrop((d) => (d === 'services' ? '' : 'services'))}
                >
                  ▾
                </button>
              </div>
              <ul className="drop">
                {SERVICES.map((s) => <li key={s.slug}><Link to={s.href} onClick={() => { setOpen(false); setDrop(''); }}>{s.title}</Link></li>)}
              </ul>
            </li>
            <li className={drop === 'menu' ? 'open' : ''} onMouseEnter={() => setDrop('menu')} onMouseLeave={() => setDrop('')}>
              <div className="nav-parent">
                <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => { setOpen(false); setDrop(''); }}>Menu</NavLink>
                <button
                  type="button"
                  className="nav-subtoggle"
                  aria-expanded={drop === 'menu'}
                  aria-label="Show menu list"
                  onClick={() => setDrop((d) => (d === 'menu' ? '' : 'menu'))}
                >
                  ▾
                </button>
              </div>
              <ul className="drop">
                {MENUS.map((m) => <li key={m.slug}><Link to={`/menu/${m.slug}`} onClick={() => { setOpen(false); setDrop(''); }}>{m.title}</Link></li>)}
              </ul>
            </li>
            <li><NavLink to="/gallery" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>Gallery</NavLink></li>
            <li><NavLink to="/blogs" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>Blogs</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')} onClick={() => setOpen(false)}>Contact</NavLink></li>
            <li><Link className="btn btn-gold" to="/book" onClick={() => setOpen(false)}>Book Now</Link></li>
          </ul>
        </div>
      </header>
    </>
  );
}
