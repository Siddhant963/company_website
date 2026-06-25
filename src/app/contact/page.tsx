import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us – Siddhya Technology',
  description:
    'Partner with a team of experts dedicated to your digital transformation. Reach out for software development, cloud consulting, AI, and managed IT services.',
};

export default function ContactPage() {
  return (
    <div className="pb-stack-lg min-h-screen bg-surface">
      {/* ── Page Header ── */}
      <header className="pt-10 pb-stack-lg max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center md:text-left">
        <h1 className="font-h1 text-h1-mobile md:text-h1 text-primary mb-4 leading-tight">
          Connect with Excellence
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto md:mx-0">
          Partner with a team of experts dedicated to your digital transformation.
          Whether it&apos;s a new product or scaling your existing architecture,
          we&apos;re here to help.
        </p>
      </header>

      {/* ── Main Two-Column Grid ── */}
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">

          {/* ════ LEFT: Inquiry Form (7 / 12 cols) ════ */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-xl p-6 md:p-8 shadow-sm border border-outline-variant/30">
            <div className="mb-8">
              <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-2">
                Start Your Project
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Tell us a bit about your vision and let&apos;s build something remarkable.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* ════ RIGHT: Contact Info + Testimonial (5 / 12 cols) ════ */}
          <div className="md:col-span-5 space-y-gutter">

            {/* Contact Details Card */}
            <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/30">

              {/* Map thumbnail */}
              <div className="h-64 bg-surface-variant relative group cursor-pointer overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXz8vbQMUfBJfKik8uLgnJzUq3zPeVq-GRiUci4plyRsOeVquQ_eYf4uFwjjCpY576PCgJKMaUulPbiUK4unk-L1Sjzn66bk3D6ktO1fSfzS7n09b90ZPadKxJNrHE3OSn5isD3TFycXdWA5yIeByRyG13A4Q1TpHmfz7K1NQGJ9jNzCChG6rgeq3ejTY3S9BCGscMYXDOv1XREi1yr8emryn6EGZ7JMvX6MsJUYWOKE0TAmFFSDLtY3urueDwVqAaNPlansyjeAd9"
                  alt="Satellite map view of Jabalpur, India — Siddhya Technology headquarters"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-6">
                  <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg">
                    <span className="material-symbols-outlined text-primary" style={{ fontSize: '16px' }}>
                      location_on
                    </span>
                    <span className="text-primary font-label-sm text-label-sm">
                      Headquarters: Jabalpur
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact info body */}
              <div className="p-6 md:p-8 space-y-6">
                {/* Header row */}
                <div className="flex flex-wrap justify-between items-start gap-3">
                  <h3 className="font-h3 text-h3 text-primary">Contact Information</h3>
                  <div className="flex items-center gap-1.5 bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full animate-pulse shrink-0">
                    <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>bolt</span>
                    <span className="font-label-sm text-label-sm font-semibold whitespace-nowrap">
                      Avg response: under 4 hours
                    </span>
                  </div>
                </div>

                {/* Detail rows */}
                <div className="space-y-5">
                  {/* Address */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">apartment</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                        Address
                      </p>
                      <p className="font-body-md text-body-md">
                        H.No. 11, Barela,
                        <br />
                        Jabalpur, MP 483001, Madhya Pradesh, India
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">call</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                        Phone
                      </p>
                      <p className="font-body-md text-body-md">+91 6265004675</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">mail</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                        Email
                      </p>
                      <p className="font-body-md text-body-md">siddhyatechnology@gmail.com</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-container/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary">schedule</span>
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">
                        Hours
                      </p>
                      <p className="font-body-md text-body-md">
                        Mon – Fri: 09:00 AM – 07:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>

                {/* Action row */}
                <div className="pt-6 border-t border-outline-variant flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://wa.me/917614012000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      chat
                    </span>
                    WhatsApp
                  </a>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      aria-label="Share our contact page"
                      className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined text-on-surface-variant">share</span>
                    </a>
                    <a
                      href="#"
                      aria-label="Schedule a meeting"
                      className="w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-surface-container-high transition-colors"
                    >
                      <span className="material-symbols-outlined text-on-surface-variant">
                        calendar_month
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial / Trust Micro-card */}
            <div className="bg-primary-container p-6 rounded-xl text-surface-container-lowest">
              {/* 5-star rating */}
              <div className="flex items-center gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-tertiary-fixed-dim"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>

              <p className="font-body-md text-body-md italic mb-4 text-surface-container-lowest/90">
                &ldquo;The team at Siddhya delivered our enterprise portal 2 weeks ahead
                of schedule. Their communication is unparalleled.&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high shrink-0 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAoMVcnbXAzrvqXv1Sj9daIebge8wKdHw4kalPZs-JNJ7t84qYBUm3wGpLCQcvY0bQP0FQmlU1vr8JYGtMwHkXv6W_ktlhP8g9WtmElcLFqVxEP5Y8Oi9BqzYIrGXtjapsgVDVTnG-_8t0NKWnDsRd0QS78PRUXuzvX44cXABro0ZK3SnUtiUc5Uwcqlxu1cgiVE135mRc3Ey6CGWgu5tKR8lrUNFH9AGkvrOsElGK0vvjf2GYgl-7ZjL-M-HA9VnWJwj9W-VvAA0E"
                    alt="Sarah Jenkins — CTO, Global Logistics Inc."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-label-sm text-label-sm font-bold">Sarah Jenkins</p>
                  <p className="text-xs text-surface-container-lowest/70">
                    CTO, Global Logistics Inc.
                  </p>
                </div>
              </div>
            </div>

          </div>
          {/* end right column */}
        </div>
        {/* end grid */}
      </div>
    </div>
  );
}
