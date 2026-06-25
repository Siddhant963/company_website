import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siddhya Technology | Enterprise IT Solutions",
  description:
    "Empowering businesses with enterprise-grade Software Development, Mobile Apps, and ERP solutions tailored for the digital age.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
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
