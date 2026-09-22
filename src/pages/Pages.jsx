import { Link, useParams } from 'react-router-dom';
import { BLOGS, BRAND, GALLERY, MENU_ITEMS, MENUS, SERVICES } from '../data';
import BookingForm, { PageHero } from '../components/PageBits';
import MenuBook from '../components/MenuBook';
import MenuPdfPreview from '../components/MenuPdfPreview';
import { SITE_IMAGES } from '../siteImages';
import ScrollReveal, { revealDelay } from '../components/ScrollReveal';

export function About() {
  return (
    <>
      <PageHero kicker="Our story" title="Catering since 2007" lede="Built for families and organisations that need reliable food for 100 to 5,000 guests." />
      <section className="section">
        <div className="container grid-2">
          <ScrollReveal variant="left">
            <div className="photo-frame">
              <img src={SITE_IMAGES.aboutKitchen} alt="Kitchen team preparing an event menu" loading="lazy" decoding="async" />
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={100}>
            <div>
              <p className="kicker">{BRAND.name}</p>
              <h2>A kitchen that stays with you around the clock.</h2>
              <div className="gold-line" style={{ marginLeft: 0 }} />
              <p className="muted">We started in 2007 with a simple idea: if people trust you with a wedding or a first meal for a child, you show up fully — before dawn, late at night, and whenever plans change.</p>
              <p className="muted" style={{ marginTop: 12 }}>Today we cater all events from Ramanthapur. Guest counts from 100 to 5,000.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export function Services() {
  return (
    <>
      <PageHero kicker="What we do" title="All events, one catering team" lede="Weddings, rituals, birthdays, corporate days, house warmings, and every other gathering." />
      <section className="section">
        <div className="container grid-3">
          {SERVICES.map((s, index) => (
            <ScrollReveal key={s.slug} variant="up" delay={revealDelay(index)}>
              <article className="card">
                <img src={s.image} alt="" />
                <div className="card-body">
                  <h3>{s.title}</h3>
                  <p className="muted">{s.text}</p>
                  <p><Link to={s.href}>Details →</Link></p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function ServiceDetail() {
  const { slug } = useParams();
  const service = SERVICES.find((s) => s.slug === slug) || SERVICES.at(-1);
  return (
    <>
      <PageHero kicker="Service" title={service.title} lede={service.text} />
      <section className="section">
        <div className="container grid-2">
          <ScrollReveal variant="left">
            <div>
              <p className="muted">Based in Ramanthapur. Open 24/7. Email {BRAND.email}.</p>
              <p style={{ marginTop: 22 }}><Link className="btn btn-gold" to="/book">Book this event</Link></p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={100}>
            <div className="photo-frame"><img src={service.image} alt={service.title} /></div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export function Menu() {
  return (
    <>
      <PageHero kicker="Menus" title="Sree Priya Daarshini Caterer menus" lede="Full vegetarian and non-vegetarian lists from our SPC menu books. Prop. Praveen Reddy · since 2007." />
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ marginBottom: 36 }}>
            <ScrollReveal variant="left">
              <Link className="card" to="/menu/veg">
                <img src={SITE_IMAGES.menuVegCard} alt="Vegetarian catering spread" loading="lazy" decoding="async" />
                <div className="card-body">
                  <p className="kicker">Vegetarian</p>
                  <h3>Veg menu</h3>
                  <p className="muted">Breakfast, silver / gold / platinum packages, curries, chats, sweets and live counters.</p>
                </div>
              </Link>
            </ScrollReveal>
            <ScrollReveal variant="right" delay={100}>
              <Link className="card" to="/menu/non-veg">
                <img src={SITE_IMAGES.menuNonVegCard} alt="Non-vegetarian catering" loading="lazy" decoding="async" />
                <div className="card-body">
                  <p className="kicker">Non-vegetarian</p>
                  <h3>Non-veg menu</h3>
                  <p className="muted">Chicken, mutton, seafood, egg, biryani, Chinese stations and Hyderabadi sweets.</p>
                </div>
              </Link>
            </ScrollReveal>
          </div>
          <MenuPdfPreview src="/spc-menu-veg.pdf" title="Vegetarian menu book" />
          <MenuPdfPreview src="/spc-menu-nonveg.pdf" title="Non-vegetarian menu book" defaultOpen={false} />
          <ScrollReveal variant="up" delay={80}>
            <h2 style={{ marginBottom: 18 }}>Occasion menus</h2>
          </ScrollReveal>
          <div className="grid-3">
            {MENUS.filter((m) => m.slug !== 'veg' && m.slug !== 'non-veg').map((m, index) => (
              <ScrollReveal key={m.slug} variant="up" delay={revealDelay(index)}>
                <Link className="card" to={`/menu/${m.slug}`}>
                  <div className="card-body"><h3>{m.title}</h3><p className="muted">Built from the veg / non-veg books</p></div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function MenuDetail() {
  const { slug } = useParams();
  if (slug === 'veg' || slug === 'non-veg') {
    const veg = slug === 'veg';
    return (
      <>
        <PageHero
          kicker={veg ? 'Vegetarian' : 'Non-vegetarian'}
          title={veg ? 'Vegetarian menu' : 'Non-vegetarian menu'}
          lede="Taken from the official SPC Caterers menu books. Preview the PDF, search dishes, or download the full list."
        />
        <section className="section menu-detail-section">
          <div className="container">
            <MenuBook kind={veg ? 'veg' : 'nonveg'} />
            <p style={{ marginTop: 24 }}><Link className="btn btn-maroon" to="/book">Book this menu</Link></p>
          </div>
        </section>
      </>
    );
  }
  const menu = MENUS.find((m) => m.slug === slug) || MENUS[0];
  return (
    <>
      <PageHero kicker="Occasion menu" title={menu.title} lede="Pick dishes from the full veg or non-veg books for this function." />
      <section className="section">
        <div className="container">
          <ScrollReveal variant="up">
            <div className="note">Use the complete <Link to="/menu/veg">vegetarian</Link> and <Link to="/menu/non-veg">non-vegetarian</Link> lists for this occasion. Packages (silver, gold, platinum) are on the veg menu page.</div>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={80}>
            <div className="menu-block">
              {MENU_ITEMS.map(([n, d]) => (
                <div className="menu-item" key={n}><div><strong>{n}</strong><p className="muted">{d === 'To be confirmed' ? 'Choose from the veg / non-veg books' : d}</p></div><span className="kicker">Open list</span></div>
              ))}
            </div>
          </ScrollReveal>
          <ScrollReveal variant="up" delay={100}>
            <p><Link className="btn btn-gold" to="/menu/veg">Open veg menu</Link> <Link className="btn btn-maroon" to="/menu/non-veg" style={{ marginLeft: 8 }}>Open non-veg menu</Link></p>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export function Gallery() {
  return (
    <>
      <PageHero kicker="Gallery" title="Tables, counters, and celebrations" lede="A glimpse of the spreads, service, and settings we create for families and companies across Hyderabad." />
      <section className="section">
        <div className="container gallery-grid">
          {GALLERY.map((src, index) => (
            <ScrollReveal key={src} variant="scale" delay={revealDelay(index, 70)}>
              <img src={src} alt="Catering gallery" />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function Blogs() {
  return (
    <>
      <PageHero kicker="Blogs" title="Notes from the kitchen" />
      <section className="section">
        <div className="container grid-3">
          {BLOGS.map((b, index) => (
            <ScrollReveal key={b.slug} variant="up" delay={revealDelay(index)}>
              <article className="card">
                <img src={b.image} alt="" />
                <div className="card-body">
                  <p className="kicker">{b.kicker}</p>
                  <h3>{b.title}</h3>
                  <p className="muted">{b.text.slice(0, 90)}…</p>
                  <p style={{ marginTop: 12 }}><Link to={`/blogs/${b.slug}`}>Read →</Link></p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function BlogDetail() {
  const { slug } = useParams();
  const post = BLOGS.find((b) => b.slug === slug) || BLOGS[0];
  return (
    <>
      <PageHero kicker="Blog" title={post.title} lede={BRAND.name} />
      <section className="section">
        <ScrollReveal variant="up">
          <article className="menu-block" style={{ maxWidth: 760, margin: '0 auto' }}>
            <p className="muted">{post.text}</p>
            <p style={{ marginTop: 18 }}><Link className="btn btn-gold" to="/contact">Talk to us</Link></p>
          </article>
        </ScrollReveal>
      </section>
    </>
  );
}

export function Contact() {
  return (
    <>
      <PageHero kicker="Contact" title="We are available 24/7" />
      <section className="section">
        <div className="container grid-2">
          <ScrollReveal variant="left">
            <div className="contact-card">
              <h3>Reach {BRAND.name}</h3>
              <p>📍 {BRAND.address}</p>
              <p>📱 <a href={`tel:+91${BRAND.phone}`}>+91 {BRAND.phone}</a></p>
              <p>✉️ <a href={`mailto:${BRAND.email}`}>{BRAND.email}</a></p>
              <p>📘 <a href={BRAND.facebook} target="_blank" rel="noopener">Facebook</a></p>
              <p>📸 <a href={BRAND.instagram} target="_blank" rel="noopener">Instagram</a></p>
            </div>
          </ScrollReveal>
          <ScrollReveal variant="right" delay={100}>
            <BookingForm />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export function Book() {
  return (
    <>
      <PageHero kicker="Book now" title="Reserve your date" lede="Share guest count and occasion. We reply on WhatsApp, any hour." />
      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <ScrollReveal variant="up">
            <BookingForm compact />
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
