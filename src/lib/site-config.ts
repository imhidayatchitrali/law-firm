// Central place to swap in real firm details.
// Every value below is a clearly-marked placeholder — replace before launch.
export const siteConfig = {
  name: "Roy Law",
  legalName: "Roy Law",
  tagline: "Trusted Personal Injury Attorneys",
  description:
    "Roy Law represents people injured through someone else's negligence — car accidents, slip and falls, workplace injuries, and wrongful death claims. Free consultation. No fees unless we win.",
  // TODO: replace with the real production domain before launch.
  url: "https://www.example.com",
  phoneDisplay: "(000) 000-0000",
  phoneHref: "tel:+10000000000",
  email: "info@example.com",
  state: "[Your State]",
  address: {
    street: "123 Main Street, Suite 000",
    city: "[City]",
    region: "[Your State]",
    postalCode: "00000",
    country: "US",
  },
  social: {
    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://www.linkedin.com/",
  },
} as const;
