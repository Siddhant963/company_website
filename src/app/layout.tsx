import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const SITE_URL = "https://siddhyatechnology.in";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Siddhya Technology | #1 IT Company in Jabalpur, Madhya Pradesh",
    template: "%s | Siddhya Technology - Jabalpur",
  },
  description:
    "Siddhya Technology is Jabalpur's leading IT company offering Custom Software Development, Mobile Apps, ERPNext Implementation, Digital Marketing & Cloud Solutions. Serving businesses across Madhya Pradesh and Pan-India.",
  keywords: [
    "IT company Jabalpur",
    "tech company Jabalpur",
    "software development company Jabalpur",
    "ERP company Jabalpur",
    "ERPNext implementation Jabalpur",
    "digital marketing company Jabalpur",
    "web development company Jabalpur",
    "mobile app development Jabalpur",
    "IT company in MP",
    "tech company Madhya Pradesh",
    "best IT company Jabalpur",
    "best software company Jabalpur",
    "software company MP",
    "cloud consulting Jabalpur",
    "AI ML company Jabalpur",
    "Siddhya Technology",
    "managed IT services Jabalpur",
    "IT services Madhya Pradesh",
  ],
  authors: [{ name: "Siddhya Technology", url: SITE_URL }],
  creator: "Siddhya Technology",
  publisher: "Siddhya Technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Siddhya Technology",
    title: "Siddhya Technology | #1 IT Company in Jabalpur, Madhya Pradesh",
    description:
      "Jabalpur's leading IT company - Custom Software, Mobile Apps, ERPNext, Digital Marketing & Cloud Solutions. 50+ projects delivered across India.",
    images: [
      {
        url: "/screen.png",
        width: 1200,
        height: 630,
        alt: "Siddhya Technology - IT Company in Jabalpur, Madhya Pradesh",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siddhya Technology | IT Company in Jabalpur, MP",
    description:
      "Jabalpur's leading IT company - Software Development, ERPNext, Digital Marketing & Cloud. 50+ projects delivered Pan-India.",
    images: ["/screen.png"],
    creator: "@siddhyatech",
  },
  alternates: {
    canonical: SITE_URL,
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION ?? undefined,
  },
  category: "technology",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness"],
      "@id": `${SITE_URL}/#organization`,
      name: "Siddhya Technology",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/screen.png`,
        width: 280,
        height: 60,
      },
      image: `${SITE_URL}/screen.png`,
      description:
        "Jabalpur's leading IT company offering Custom Software Development, Mobile Apps, ERPNext Implementation, Digital Marketing & Cloud Solutions.",
      telephone: "+91-6265004675",
      email: "siddhyatechnology@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "H.No. 11, Barela",
        addressLocality: "Jabalpur",
        addressRegion: "Madhya Pradesh",
        postalCode: "483001",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "23.1815",
        longitude: "79.9864",
      },
      areaServed: [
        { "@type": "City", name: "Jabalpur" },
        { "@type": "State", name: "Madhya Pradesh" },
        { "@type": "Country", name: "India" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "IT Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Software Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERPNext Implementation" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Infrastructure" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Machine Learning" } },
        ],
      },
      foundingDate: "2026",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "20" },
      priceRange: "$$",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Siddhya Technology",
      description: "Jabalpur's leading IT company",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        {/* Google Analytics */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SKXWBEY3TB" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-SKXWBEY3TB');
            `,
          }}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="bg-background text-on-surface font-sans antialiased">
        <TopNavBar />
        <main className="mt-navbar-height">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
