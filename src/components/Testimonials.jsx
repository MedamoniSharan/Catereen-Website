import { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { SITE_IMAGES } from '../siteImages';
import ScrollReveal from './ScrollReveal';

const TESTIMONIALS = [
  {
    quote:
      "A very special day today in our life and this is the second time we booked Venus catering for birthday party and as expected the food and service was extremely well. Multiple varieties and all tastes were awesome. All our guests enjoyed and specially mentioned about food taste. Many thanks to Venus catering .. We really enjoyed and also India won today's match... Soo happy. Will definitely refer to all our friends and relatives😀.",
    name: 'vinoth.R Sugan',
  },
  {
    quote:
      'I am a person who selected venus catering. Initially I was in a dilemma. Later I felt my decision is right. We ordered 300 breakfast and 300 lunch. Both are awesome. Thank you to Mr.Gurumurrthy. Your services are great. Keep up your good work.',
    name: 'Prem kumar Kalyanasundaram',
  },
  {
    quote:
      'Venus catering is very very good in catering service, their hospitality is very very good, unexpected crowd was came into my daughters marriage, but Mr. Gurumoorthy tackled the situation easily and immediately managed and served to all coming to our marriage, I’m very very grateful to him, food they served was excellent and praised by all coming to our marriage at 18/2/24 & 19/2/24.',
    name: 'Uma Devi',
  },
  {
    quote:
      'We have planned housewarming function on June 9th. We booked venus catering based on very good reviews. Both Gurumurthy sir and his son Ruthresh came in-person and provided extraordinary service. We are very happy for the service and food items. Both our friends and family are very happy. Top class top notch food.',
    name: 'Sathish Kumar',
  },
  {
    quote:
      'I appreciate the exceptional service provided by Guru Murthy, the caterer, at my housewarming ceremony. His dedication and kindness were evident in the diverse and high-quality breakfast and lunch menu he offered. The addition of a tea and coffee stall by Kumbakonam Degree added great value, leaving my guests delighted. A heartfelt thank you for your outstanding service sir. Surely I will recommend your valuable service to my friends and relatives.',
    name: 'Sujith Joseph',
  },
];

export function VenusTestimonials() {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeTestimonial = TESTIMONIALS[activeIndex];

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % TESTIMONIALS.length);
  };

  return (
    <section className="venus-testimonials" aria-labelledby="testimonials-heading">
      <div className="venus-testimonials__inner">
        <ScrollReveal variant="left" className="venus-testimonials__copy">
          <div className="venus-testimonials__eyebrow-wrap">
            <p className="venus-testimonials__eyebrow">Testimonial</p>
            <span className="venus-testimonials__eyebrow-dot" aria-hidden="true" />
          </div>
          <h2 id="testimonials-heading" className="venus-testimonials__heading">
            What People's Say About us?
          </h2>

          <div className="venus-testimonials__slider" aria-live="polite">
            <blockquote className="venus-testimonials__quote">
              <Quote className="venus-testimonials__quote-mark" aria-hidden="true" />
              <p>{activeTestimonial.quote}</p>
            </blockquote>
            <p className="venus-testimonials__name">{activeTestimonial.name}</p>
          </div>

          <div className="venus-testimonials__controls" aria-label="Testimonial navigation">
            <button type="button" onClick={showPrevious} aria-label="Previous testimonial">
              <ArrowLeft size={17} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <button type="button" onClick={showNext} aria-label="Next testimonial">
              <ArrowRight size={17} strokeWidth={2.2} aria-hidden="true" />
            </button>
            <span className="venus-testimonials__counter">
              <strong>{String(activeIndex + 1).padStart(2, '0')}</strong>
              <span aria-hidden="true"> / </span>
              {String(TESTIMONIALS.length).padStart(2, '0')}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="right" as="figure" className="venus-testimonials__visual" delay={120}>
          <img
            src={SITE_IMAGES.testimonial}
            alt="Happy guest at a catered celebration"
            width={398}
            height={630}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Made with care, remembered with joy.</figcaption>
        </ScrollReveal>
      </div>
    </section>
  );
}

export const Testimonials = VenusTestimonials;
