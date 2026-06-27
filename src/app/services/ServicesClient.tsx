'use client';

import { useState } from 'react';
import Link from 'next/link';

const CATEGORIES = [
  'All Services',
  'Application Development',
  'Web Solutions',
  'ERP & Cloud Systems',
  'BPO & Outsourcing',
  'AI & Data Analytics',
];

const SERVICE_CARDS = [
  {
    id: 'app-dev',
    category: 'Application Development',
    icon: 'developer_mode_tv',
    title: 'Application Development',
    badge: { text: 'Enterprise Priority', className: 'bg-tertiary-fixed text-on-tertiary-fixed' },
    description:
      'We build robust, high-performance mobile and desktop applications tailored to your specific business logic. From native iOS and Android experiences to cross-platform architectures, our solutions ensure seamless user engagement and industrial-grade security. Our development cycle includes rigorous QA, performance optimization, and scalable backend integration.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
    footerNote: 'Managed by expert architects',
    footerAvatars: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuByMwkXDuvOUoOoTgqNJsSeqtMLlTDRcw9FhmL-J6_iy0S63FivWev4Z77Iozmv3y7P_BGwL_3LvBbt3GQQCNn0DiIjbuJFmSelqP60iMnWMAm43wDexz0joVoOVOxu3e13ONgaKTZvPk8-3R1mQGO1X83ZBDr64bqa75Yj3eJyYMmlWSKm0KV11qHF1vN2GB3iqNNuIewqu1jFT9DrQe_xX78B8y0E0wQZ19daag3kf85aw5CFRhoF6bjKt69_nrgnxJx0QDprVuHT',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDcVNQHFcPzRao2hQg-ohhklZOVa-qTODXJ-HK6pOSeucnzk-WhbleqTbVbgXH4-fuGJNXb8kbdbC8ZYtm6alT_bRJ0XKVQolu7bXusR1WK1VB1aU0p02Q9gJjJ4ESmBoWekbJD2XJz0UYBg_9x2K_8___5yJ0Ktop3QYymRdbdS0ccN5BBbzAyEnQUdAAj3mTViHUwF0LANZS8jvULu88WiFmnnuKJ_kNWgF1VIJ5ObeNBDb7UxX7D7io1DP5_BPTQdt0AF8GLBBz8',
    ],
  },
  {
    id: 'web',
    category: 'Web Solutions',
    icon: 'language',
    title: 'Web Solutions',
    badge: null,
    description:
      'Our web development team crafts responsive, lightning-fast digital platforms that serve as the cornerstone of your online presence. We specialize in complex web applications, modern corporate sites, and progressive web apps (PWAs) that deliver app-like performance within the browser. We focus on SEO-readiness and accessibility compliance.',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Headless CMS'],
    footerNote: '99.9% uptime guaranteed',
    footerAvatars: [],
  },
  {
    id: 'erp',
    category: 'ERP & Cloud Systems',
    icon: 'hub',
    title: 'ERP & Cloud Systems',
    badge: { text: 'Automation Focus', className: 'bg-secondary-container text-on-secondary-container' },
    description:
      'Consolidate your business operations into a single, unified source of truth. Our ERP implementation services range from custom module development to full-scale enterprise migration. We leverage cloud-native architectures to ensure your data is accessible, secure, and ready for real-time reporting and decision-making.',
    tags: ['SAP B1', 'Oracle Cloud', 'Microsoft Dynamics', 'AWS'],
    footerNote: 'Full lifecycle support available',
    footerAvatars: [],
  },
  {
    id: 'bpo',
    category: 'BPO & Outsourcing',
    icon: 'support_agent',
    title: 'BPO & Outsourcing',
    badge: null,
    description:
      'Scale your operations without the overhead. Our Business Process Outsourcing (BPO) solutions provide highly trained professionals for data entry, customer support, and administrative tasks. We combine human intelligence with automated workflows to deliver unmatched efficiency and cost-effectiveness for global clients.',
    tags: ['24/7 Support', 'Data Management', 'Help Desk'],
    footerNote: '30% average cost reduction for clients',
    footerAvatars: [],
  },
  {
    id: 'ai',
    category: 'AI & Data Analytics',
    icon: 'psychology',
    title: 'AI & Data Analytics',
    badge: { text: 'Future Ready', className: 'bg-secondary-container text-on-secondary-container' },
    description:
      'Harness the power of artificial intelligence and machine learning to transform raw data into actionable insights. We design custom AI pipelines, build predictive analytics dashboards, and integrate intelligent automation into your existing systems — driving smarter, faster decisions at every level of your organization.',
    tags: ['Python', 'TensorFlow', 'Power BI', 'LangChain', 'OpenAI API'],
    footerNote: 'Proven ROI-driven implementations',
    footerAvatars: [],
  },
];

export default function ServicesClient() {
  const [selected, setSelected] = useState('All Services');

  const filtered =
    selected === 'All Services'
      ? SERVICE_CARDS
      : SERVICE_CARDS.filter((c) => c.category === selected);

  return (
    <>
      {/* ── Page Header ──────────────────────────────────────────────────────── */}
      <header className="pt-8 pb-8 md:pt-[52px] md:pb-stack-lg bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-h1 text-h1-mobile md:text-h1 text-primary mb-4">
            Enterprise Solutions
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">
            We empower organizations with cutting-edge technology services designed for
            scalability, security, and peak performance.
          </p>
        </div>
      </header>

      {/* ── Main Layout: Sidebar + Cards ─────────────────────────────────────── */}
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-stack-lg">
        <div className="flex flex-col md:flex-row gap-gutter">

          {/* ── Sticky Sidebar (25%) ─────────────────────────────────────────── */}
          <aside className="w-full md:w-1/4 shrink-0">
            {/* Mobile: horizontal scrolling pills */}
            <div className="md:hidden flex gap-2 overflow-x-auto pb-2 -mx-margin-mobile px-margin-mobile scrollbar-none">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelected(cat)}
                  className={[
                    'whitespace-nowrap px-4 py-2 rounded-full font-label-sm text-label-sm border transition-colors shrink-0',
                    selected === cat
                      ? 'bg-secondary-container text-on-secondary-container border-transparent'
                      : 'bg-surface-container-lowest text-on-surface-variant border-outline-variant',
                  ].join(' ')}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Desktop: vertical sticky panel */}
            <div className="hidden md:block sticky top-[100px] bg-surface-container-lowest border border-outline-variant p-6 rounded-xl">
              <h4 className="font-h4 text-h4 text-primary mb-6">Service Categories</h4>
              <ul className="space-y-2">
                {CATEGORIES.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => setSelected(cat)}
                      className={[
                        'w-full text-left px-4 py-3 rounded-lg font-label-sm text-label-sm flex justify-between items-center group transition-colors',
                        selected === cat
                          ? 'bg-secondary-container text-on-secondary-container'
                          : 'text-on-surface-variant hover:bg-surface-container-high',
                      ].join(' ')}
                    >
                      {cat}
                      <span
                        className={[
                          'material-symbols-outlined text-[20px] transition-opacity',
                          selected === cat ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                        ].join(' ')}
                      >
                        chevron_right
                      </span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Help callout */}
              <div className="mt-10 p-4 bg-primary-container rounded-lg text-surface-container-lowest">
                <p className="font-label-sm text-label-sm mb-2 opacity-80">Need help choosing?</p>
                <p className="font-body-md text-body-md mb-4 font-semibold">
                  Talk to our tech experts today.
                </p>
                <Link href="/contact">
                  <button className="w-full py-2 bg-surface-container-lowest text-primary-container rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity">
                    Contact Support
                  </button>
                </Link>
              </div>
            </div>
          </aside>

          {/* ── Service Cards (75%) ──────────────────────────────────────────── */}
          <section className="w-full md:w-3/4 space-y-6 md:space-y-8">
            {filtered.map((service) => (
              <article
                key={service.id}
                className="bg-surface-container-lowest border border-outline-variant p-6 md:p-8 rounded-xl transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1 hover:shadow-[0px_12px_24px_rgba(26,43,95,0.08)] hover:border-primary"
              >
                {/* Header row: icon + optional badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 md:w-16 md:h-16 bg-primary-container/10 flex items-center justify-center rounded-xl text-primary-container shrink-0">
                    <span className="material-symbols-outlined text-[36px] md:text-[40px]">
                      {service.icon}
                    </span>
                  </div>
                  {service.badge && (
                    <span className={`px-3 py-1 rounded-full font-label-sm text-label-sm ${service.badge.className}`}>
                      {service.badge.text}
                    </span>
                  )}
                </div>

                <h3 className="font-h3 text-h3 text-primary mb-3 md:mb-4">{service.title}</h3>

                <p className="font-body-md text-body-md text-on-surface-variant mb-5 md:mb-6">
                  {service.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-surface-container-high px-4 py-1.5 rounded-full font-label-sm text-label-sm text-on-secondary-container"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-outline-variant">
                  <div className="shrink-0">
                    {service.footerAvatars.length > 0 ? (
                      <div className="flex items-center gap-3">
                        <div className="flex -space-x-2">
                          {service.footerAvatars.map((src, i) => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface-dim overflow-hidden">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img className="w-full h-full object-cover" alt="Team member" src={src} />
                            </div>
                          ))}
                        </div>
                        <span className="text-on-surface-variant font-label-sm text-label-sm">
                          {service.footerNote}
                        </span>
                      </div>
                    ) : (
                      <p className="text-on-surface-variant font-label-sm text-label-sm italic">
                        {service.footerNote}
                      </p>
                    )}
                  </div>
                  <Link href="/contact">
                    <button className="bg-primary text-on-primary px-6 md:px-8 py-3 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap">
                      Get a Quote
                      <span className="material-symbols-outlined text-[18px]">trending_flat</span>
                    </button>
                  </Link>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>

      {/* ── Help CTA Banner ──────────────────────────────────────────────────── */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-8 md:py-16 mb-8 md:mb-16">
        <div className="bg-primary-container rounded-2xl md:rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <div className="flex-1 space-y-3 text-center md:text-left">
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-surface-container-lowest">
              Not sure where to start?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-lowest/80">
              Our solution architects will map the right services to your business goals — at no
              cost.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/contact">
              <button className="bg-surface-container-lowest text-primary-container px-6 md:px-8 py-3 rounded-lg font-label-sm text-label-sm hover:opacity-90 transition-opacity whitespace-nowrap">
                Book a Free Call
              </button>
            </Link>
            <Link href="/our-work">
              <button className="border border-surface-container-lowest text-surface-container-lowest px-6 md:px-8 py-3 rounded-lg font-label-sm text-label-sm hover:bg-surface-container-lowest/10 transition-colors whitespace-nowrap">
                See Our Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
