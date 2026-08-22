// Central place to swap in real firm details.
// Every value below is a clearly-marked placeholder — replace before launch.
export const siteConfig = {
  name: "Abbo Law",
  legalName: "Abbo Law",
  tagline: "Trusted Personal Injury Attorney",
  description:
    "Abbo Law represents people injured through someone else's negligence — auto and motorcycle accidents, medical malpractice, premises liability, and wrongful death claims. Free consultation. No fees unless we win.",
  // TODO: replace with the real production domain before launch.
  url: "https://www.example.com",
  phoneDisplay: "(248) 770-2289",
  phoneHref: "tel:+12487702289",
  email: "patrickabbo@gmail.com",
  state: "Florida",
  address: {
    street: "123 Main Street, Suite 000",
    city: "[City]",
    region: "Florida",
    postalCode: "00000",
    country: "US",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;
