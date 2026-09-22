/** Curated photography — swap URLs for your own files in /public when ready. */
export function photo(id, width = 1200) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
}

export const SITE_IMAGES = {
  heroBackground: photo('photo-1414235077428-338989a2e8c0', 2200),
  pageHeroBackground: photo('photo-1544025162-d76694265947', 1800),

  heroSlides: [
    { src: photo('photo-1555244162-803834f70033', 1400), caption: 'Banquet spreads' },
    { src: 'https://abhiruchicaterers.com/wp-content/uploads/2026/08/ChatGPT-Image-Aug-2-2026-06_12_12-AM.png', caption: 'Wedding & reception' },
    { src: photo('photo-1504674900247-0877df9cc836', 1400), caption: 'Traditional feast' },
    { src: photo('photo-1590301157890-4810ed352733', 1400), caption: 'Live biryani counters' },
    { src: photo('photo-1544025162-d76694265947', 1400), caption: 'Plated service' },
  ],

  heroAvatars: [
    photo('photo-1517248135467-4c7edcad34c4', 200),
    photo('photo-1555244162-803834f70033', 200),
    photo('photo-1565557623262-b51c2513a641', 200),
  ],

  homeAbout: photo('photo-1476224203421-9ac39bcb3327', 1400),
  aboutKitchen: photo('photo-1556910103-1c02745aae4d', 1400),
  testimonial: '/testimonial-img.png',

  menuVegCard: photo('photo-1565557623262-b51c2513a641', 1000),
  menuNonVegCard: photo('photo-1604908176997-125f25cc6f3d', 1000),

  menuShowcase: [
    {
      title: 'Veg Menu',
      href: '/menu/veg',
      image: photo('photo-1565557623262-b51c2513a641', 1000),
    },
    {
      title: 'Non-Veg Menu',
      href: '/menu/non-veg',
      image: photo('photo-1604908176997-125f25cc6f3d', 1000),
    },
  ],

  gallery: [
    photo('photo-1555244162-803834f70033', 1000),
    photo('photo-1590301157890-4810ed352733', 1000),
    photo('photo-1504674900247-0877df9cc836', 1000),
    photo('photo-1590301157890-4810ed352733', 1000),
    photo('photo-1565557623262-b51c2513a641', 1000),
    photo('photo-1517248135467-4c7edcad34c4', 1000),
    photo('photo-1559339352-11d035aa65de', 1000),
    photo('photo-1528605248644-14dd04022da1', 1000),
    photo('photo-1511795409834-ef04bbd61622', 1000),
    photo('photo-1414235077428-338989a2e8c0', 1000),
    photo('photo-1467003909585-2f8a72700288', 1000),
    photo('photo-1476224203421-9ac39bcb3327', 1000),
  ],

  services: {
    wedding: photo('photo-1520854221256-17451cc331bf', 1000),
    reception: photo('photo-1555244162-803834f70033', 1000),
    housewarming: photo('photo-1600565193348-f74bd3c7ccdf', 1000),
    resort: photo('photo-1414235077428-338989a2e8c0', 1000),
    engagement: photo('photo-1511795409834-ef04bbd61622', 1000),
    corporate: photo('photo-1511578314322-379afb476865', 1000),
    birthday: photo('photo-1464349095431-e9a21285b5f3', 1000),
  },
};
