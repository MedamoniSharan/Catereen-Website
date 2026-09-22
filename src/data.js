import { photo, SITE_IMAGES } from './siteImages';

export const BRAND = {
  name: 'Sree Priyadaarshini Catering',
  phone: '9502117008',
  email: 'spcaters888@gmail.com',
  address: 'Ramanthapur',
  wa: 'https://wa.me/919502117008',
  facebook: 'https://www.facebook.com/share/19VXT6MhfC/',
  instagram: 'https://www.instagram.com/sree_priyadaarshini_catering?stkn=MTlobXA2ZnQ3ZnU5ZA==',
  founded: 2007,
  guests: '100–5,000'
};

export const SERVICES = [
  { slug: 'wedding', title: 'Wedding', href: '/services/wedding', image: SITE_IMAGES.services.wedding, text: 'Muhurtham, reception, and multi-day wedding meals for 100 to 5,000 guests.' },
  { slug: 'anniversary', title: 'Anniversary', href: '/services/anniversary', image: SITE_IMAGES.services.reception, text: '60th, 70th, 80th, and every year families gather to honour.' },
  { slug: 'engagement', title: 'Engagement', href: '/services/engagement', image: SITE_IMAGES.services.engagement, text: 'Intimate or large engagement dinners and breakfasts.' },
  { slug: 'seemantham', title: 'Seemantham', href: '/services/seemantham', image: photo('photo-1478146896981-b80fe463b330', 1000), text: 'Thoughtful menus for baby shower gatherings.' },
  { slug: 'annaprasana', title: 'Annaprasana', href: '/services/annaprasana', image: photo('photo-1476224203421-9ac39bcb3327', 1000), text: 'First-rice ceremonies with family-style service.' },
  { slug: 'birthday', title: 'Birthday', href: '/services/birthday', image: SITE_IMAGES.services.birthday, text: 'Children and adult celebrations, day or night.' },
  { slug: 'housewarming', title: 'House warming', href: '/services/housewarming', image: SITE_IMAGES.services.housewarming, text: 'Breakfast and lunch for grihapravesham.' },
  { slug: 'mehndi', title: 'Mehndi', href: '/services/mehndi', image: photo('photo-1511795409834-ef04bbd61622', 1000), text: 'Colourful menus and live counters for mehndi nights.' },
  { slug: 'corporate', title: 'Corporate', href: '/services/corporate', image: SITE_IMAGES.services.corporate, text: 'Office events, conferences, and staff feasts.' },
  { slug: 'retirement', title: 'Retirement', href: '/services/retirement', image: photo('photo-1528605248644-14dd04022da1', 1000), text: 'Warm send-off lunches and evening receptions.' },
  { slug: 'all-events', title: 'All events', href: '/services/all-events', image: photo('photo-1555244162-803834f70033', 1000), text: 'If people gather, we can feed them — tell us the occasion.' }
];

export const MENUS = [
  { slug: 'veg', title: 'Vegetarian menu', blurb: 'Breakfast, silver–platinum packages, curries, live counters and sweets.' },
  { slug: 'non-veg', title: 'Non-vegetarian menu', blurb: 'Chicken, mutton, seafood, egg, biryani, stations and sweets.' },
  { slug: 'wedding', title: 'Wedding menu' },
  { slug: '60th', title: '60th wedding menu' },
  { slug: '70th', title: '70th wedding menu' },
  { slug: '80th', title: '80th wedding menu' },
  { slug: 'engagement', title: 'Engagement menu' },
  { slug: 'seemantham', title: 'Seemantham menu' },
  { slug: 'annaprasana', title: 'Annaprasana menu' },
  { slug: 'birthday', title: 'Birthday menu' },
  { slug: 'housewarming-breakfast', title: 'House warming breakfast' },
  { slug: 'housewarming-lunch', title: 'House warming lunch' },
  { slug: 'mehndi', title: 'Mehndi function menu' },
  { slug: 'corporate', title: 'Corporate menu' },
  { slug: 'retirement', title: 'Retirement menu' },
  { slug: 'live-counter', title: 'Live counter' },
  { slug: 'stalls', title: 'Counters & stalls' }
];

export const MENU_ITEMS = [
  ['Welcome drink', 'To be confirmed'],
  ['Starters', 'To be confirmed'],
  ['Main course', 'To be confirmed'],
  ['Rice & breads', 'To be confirmed'],
  ['Sweets', 'To be confirmed'],
  ['Live items', 'To be confirmed']
];

export const BLOGS = [
  { slug: 'guest-count', title: 'How to estimate food for 100 to 5,000 guests', kicker: 'Planning', image: SITE_IMAGES.services.wedding, text: 'Share meal times, expected extras, and whether children eat from the same counters. We scale staff and vessels from 100 up to 5,000 without guessing on the day.' },
  { slug: 'wedding-menu', title: 'Building a wedding menu that still feels personal', kicker: 'Weddings', image: photo('photo-1556911220-e15b29be8c8f', 800), text: 'Pick from our full veg and non-veg books, then tailor regional favourites, live counters, and elder-friendly dishes with our team.' },
  { slug: '24-7-support', title: 'What 24/7 catering support looks like', kicker: 'Corporate', image: SITE_IMAGES.services.corporate, text: 'Call or WhatsApp 9502117008 at any hour. Night-before guest spikes, early kitchen access, and post-event queries are part of how Sree Priyadaarshini Catering has worked since 2007.' }
];

export const GALLERY = SITE_IMAGES.gallery;
