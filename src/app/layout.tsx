import type { Metadata, Viewport } from "next";
import { siteConfig } from "@/lib/site-config";
import "./appearance.css";

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
    <html lang="en">
      <body className="hve-web-active hve-edit-mode abbo-redesign-preview abbo-scroll-demo">
        <LegalServiceJsonLd />
        {children}
      </body>
    </html>
  );
}
