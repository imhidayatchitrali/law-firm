import type { Metadata, Viewport } from "next";
import { Lora, Work_Sans } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const title = `${siteConfig.name} | Personal Injury Attorneys`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "personal injury lawyer",
    "personal injury attorney",
    "car accident lawyer",
    "slip and fall lawyer",
    "wrongful death attorney",
    "free consultation injury lawyer",
    siteConfig.name,
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1c2333",
};

function LegalServiceJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    priceRange: "$$",
    areaServed: siteConfig.state,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [siteConfig.social.facebook, siteConfig.social.instagram, siteConfig.social.linkedin],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${lora.variable} ${workSans.variable}`}>
      <body className="flex min-h-screen flex-col bg-cream font-sans text-ink antialiased">
        <LegalServiceJsonLd />
        <Header />
        <main className="flex-1 pt-22 md:pt-26">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
