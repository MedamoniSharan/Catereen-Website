import { useState } from 'react';
import { BRAND } from '../data';
import ScrollReveal from './ScrollReveal';

export default function BookingForm({ compact = false }) {
  const [form, setForm] = useState({ name: '', phone: '', event: 'Wedding', guests: '', date: '', message: '' });
  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const onSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hello ${BRAND.name}, I am ${form.name || 'Guest'}. I want to book ${form.event} for ${form.guests} guests on ${form.date}. ${form.message}`);
    window.location.href = `${BRAND.wa}?text=${text}`;
  };
  return (
    <form className={compact ? 'menu-block' : undefined} onSubmit={onSubmit}>
      <div className="form-row">
        <div><label>Name</label><input name="name" required value={form.name} onChange={onChange} /></div>
        <div><label>Phone</label><input name="phone" required value={form.phone} onChange={onChange} /></div>
      </div>
      <label>Event</label>
      <select name="event" value={form.event} onChange={onChange}>
        {['Wedding', '60th / 70th / 80th anniversary', 'Engagement', 'Seemantham', 'Annaprasana', 'Birthday', 'House warming', 'Mehndi', 'Corporate', 'Retirement', 'Other event'].map((o) => <option key={o}>{o}</option>)}
      </select>
      <div className="form-row">
        <div><label>Guests</label><input name="guests" type="number" min="100" max="5000" placeholder="100 to 5000" required value={form.guests} onChange={onChange} /></div>
        <div><label>Date</label><input name="date" type="date" required value={form.date} onChange={onChange} /></div>
      </div>
      <label>Notes</label>
      <textarea name="message" placeholder="Venue, meal times, live counters" value={form.message} onChange={onChange} />
      <button className={compact ? 'btn btn-maroon' : 'btn btn-gold'} type="submit">Send on WhatsApp</button>
    </form>
  );
}

export function PageHero({ kicker, title, lede }) {
  return (
    <section className="page-hero">
      <div className="container">
        {kicker ? (
          <ScrollReveal variant="up">
            <p className="eyebrow">{kicker}</p>
          </ScrollReveal>
        ) : null}
        <ScrollReveal variant="up" delay={80}>
          <h1>{title}</h1>
        </ScrollReveal>
        {lede ? (
          <ScrollReveal variant="up" delay={160}>
            <p className="lede">{lede}</p>
          </ScrollReveal>
        ) : null}
      </div>
    </section>
  );
}
