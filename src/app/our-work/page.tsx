import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Work | Siddhya Technology",
  description:
    "Explore Siddhya Technology's portfolio of successful digital transformations — from mobile apps and SaaS platforms to enterprise-grade cloud solutions.",
};

// ─── Filter tab labels ────────────────────────────────────────────────────────
const FILTER_TABS = [
  "All",
  "App Dev",
  "Web Dev",
  "UI/UX Design",
  "Cloud Solutions",
  "SaaS Platform",
];

// ─── Portfolio project cards ──────────────────────────────────────────────────
interface Project {
  id: number;
  badge: string;
  badgeCls: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}

const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 1,
    badge: "FINTECH",
    badgeCls: "text-on-primary-container bg-primary-container/10",
    title: "WealthFlow Dashboard",
    description:
      "Complex financial analytics with real-time data visualisations, balance summaries, and transaction histories in a minimalist corporate interface.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCKMxXELlSL0U2bzDH15Phtw-1p-nKfCk7rGazHeRsTVGZodHP3zLtZ39S4qAZgC688CJKjP3scn7WnGUXzmggioLM2bdJuI2Lq1kTYLZI2fwXQEI1_rswTPPpjD7DFcaeDegEOESCBzmzyCmFXLywI7X7Uu15d1d921p7ogbkKppizVGFlXE18vdhwf8z7utnsPhxrbe7BCg5lKA2tW4FNgnfFjk-qW8i3YQMnTXC3ht5zB5wUjg4ozwM5KoyNwXkp-FMh13VHRUJP",
    imageAlt:
      "WealthFlow FinTech dashboard with financial charts and analytics in a minimalist corporate light-mode style",
    tags: ["Vue.js", "Python"],
  },
  {
    id: 2,
    badge: "LOGISTICS",
    badgeCls: "text-on-tertiary-container bg-tertiary-container/10",
    title: "FleetMaster Pro",
    description:
      "Real-time GPS fleet tracking and route optimisation for B2B supply chains, with functional iconography and high-contrast professional UI.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDKwauJsw0AYaNUCi1aM5PuOWUAcOGHiZVDp5QMFHB4uNgGk68_zErkYyw30KwXsgrAxXurWt_2o0Q1sn6mk5G5vaQ14UHAoObM5TfsFaRsHXGJ5Ljq0x0nSpVefoXpX5qdw1XYbeuiO2HcII4a0rVhNLC-JZPeZV96dcj973_QGu6IixFFomfzpqA0xR5jRQXSwFSvH8rxjVf62TVv8E80XnymtMEz4E7oYAfM_6Nd1l_3gQ1pEpuwIzumA1Ed_xgexuwOSsxux9w8",
    imageAlt:
      "FleetMaster Pro logistics app on smartphone mockup displaying real-time GPS tracking across a stylised city map",
    tags: ["Flutter", "Go"],
  },
  {
    id: 3,
    badge: "HEALTHCARE",
    badgeCls: "text-on-secondary-fixed-variant bg-secondary-fixed/30",
    title: "MedConnect Portal",
    description:
      "HIPAA-compliant patient scheduling, electronic health records, and secure communication channels built for clinical clarity and accessibility.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBqdSGgHSso5X6jZC0h41kxBXgDDIsibWWVmasG22gpHc7UINGFe9adOT6180Zi04ZAzELV_7gUpWzau_f68rTffYGnDKZ6WWiAfoh9z2H4RwIIajc7dPfX7fj6ds4k-vfH0j0bMrg-YM9aDt5O4dOlS-fgV6a5bq1S3LMZDWLVfbe7qzFWp1RsLq0IDTrVGSTq18nMbq6L_tAp5JMEIKhV-zCr6_r3_joDR7Upd_PMdwAxfybxqshh8BtpNV0sJgs0woyMh8vrecJ5",
    imageAlt:
      "MedConnect Portal on a tablet showing patient scheduling and EHR interface in an extremely clean clinical style",
    tags: ["Next.js", "HIPAA API"],
  },
  {
    id: 4,
    badge: "INDUSTRY 4.0",
    badgeCls: "text-on-primary-container bg-primary-container/10",
    title: "SmartFactory AI",
    description:
      "AI-powered predictive maintenance and real-time IoT monitoring for manufacturing floors with 3D machinery heatmaps and sophisticated data grids.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCyIe60gYYcziWd1LmShAIPjAtzEcc4Rq1FTDSJbijYnoRYVg99TzrpK1vLDGeTP6YHcIJkIdU9OgbAxsUxmgvNsNT3nxgJABTXlKm2pjPWahzmO7be9CjkMY9IH_KtAUdH5e_aIvjdgqTdUenv1uN7uKUxmxZic3SMYxExKYHDYLN44jgxfT4bO2IxKhXaVplG-7PaX3fhwdiqIqIx8L863pFrqO3qMVlg3ipCzuAd_Ip9xCw6BQnWiyv1xCFUoTVVC44PEuJ_okuH",
    imageAlt:
      "SmartFactory AI industrial IoT management platform with 3D machinery heatmaps and real-time status indicators",
    tags: ["TensorFlow", "WebSockets"],
  },
  {
    id: 5,
    badge: "AGRITECH",
    badgeCls: "text-success-green bg-success-green/10",
    title: "AgriTrack App",
    description:
      "Supply chain management for local farmers with real-time logistics tracking, delivery scheduling, and map-driven dashboards.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsde5LE5TX-FmFNBHRMUDA1EIOMUZy5GljBklukGiIZzVDpLAo7AU-zRMjIsuVKLriUdvQ97EaH1DtlTMq24LCR920whMaro2KUz53uiFh1PW-ZtfZD79ieopgtDNvLErfYSo8h3gCycJnV9bA2vWvLqhbAHxW-UXSa17abPz3bC489FYDirYJvc6S1YN7eisdT8pggLc9fnBmSiJMxLZtuIrNGWH7IAl1qbSvx9HrR0S0FluM7wk-QHjKKv6WQIl3bWsvxsyt8jg1",
    imageAlt:
      "AgriTrack mobile app showing a logistics dashboard for farmers with maps and delivery schedules in a clean corporate-modern style",
    tags: ["Flutter", "Firebase"],
  },
  {
    id: 6,
    badge: "EDTECH",
    badgeCls: "text-on-primary-container bg-primary-container/10",
    title: "EduPortal LMS",
    description:
      "Corporate learning management system with interactive video courses, progress tracking, and certification workflows for enterprise training teams.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA0Uglu7tinynYe2iN2UVankLqPzLe9mRikryiQEGlYvWWAX6LCaltKQ97v7OfyWUtXJbgRG3tA8PAe3MBvdT46p7pKrDfTkdHYcL6ACQRLldXrDgoM4Hx8dzP4xOA9Zd6YOnAMVDDDeqEn-S2IIpXYEVx49hubTqyZxn3izNCXuXqwFIHomAFnR7xf3sSKlbcnWk2JOKhFDAvxgJXtLBNw_pU4g8LZgsDKEUw0u0f51fqKyJxtBuVNYumbxWJzs5CZwffM134TBvfj",
    imageAlt:
      "EduPortal LMS showing a corporate e-learning catalog with high-quality thumbnails, progress rings, and navy blue brand accents",
    tags: ["React", "Node.js", "AWS"],
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export default function OurWorkPage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="bg-primary-container py-16 text-center">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <h1 className="font-h1 text-h1-mobile md:text-h1 text-surface-container-lowest mb-4">
            Our Work
          </h1>
          <p className="text-surface-container-lowest/70 font-body-lg text-body-lg max-w-2xl mx-auto">
            We combine precision engineering with creative design to build
            digital solutions that drive global enterprise growth.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs — sticky below navbar ────────────────────────────────── */}
      <section className="sticky top-[68px] z-40 bg-surface border-b border-outline-variant">
        {/*
          On mobile the tabs overflow and can be scrolled horizontally.
          On md+ they are centred and fit within the container.
        */}
        <div className="max-w-max-width mx-auto px-4 md:px-margin-desktop overflow-x-auto">
          <div className="flex items-center gap-8 md:gap-10 py-[18px] md:py-6 w-max md:w-full md:justify-center">
            {FILTER_TABS.map((tab, i) => (
              <button
                key={tab}
                className={
                  i === 0
                    ? // Active — underline style (desktop) / filled pill (mobile)
                      "whitespace-nowrap font-label-sm text-label-sm font-semibold text-primary border-b-2 border-primary pb-1 transition-all"
                    : "whitespace-nowrap font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-all"
                }
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Project — SellWhatUMade ─────────────────────────────────── */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-lg transition-shadow duration-300">
            {/* Left — image */}
            <div className="relative md:w-1/2 h-64 md:h-auto md:min-h-[420px] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAGpensZeeVZkrA4mDNX6SOaHnpZAlRDCYhLBi1gVuRfItV2zVm_AwDn1OrYYxGA5sTlN03ATUG_CHJctcwrtQrXO_bCCS11Eh82KsgDmUdTu6lSyQG0p4gi8hNOFwS18IMcL3OfyBv5YJ494cATtMFiFfvJDxPnmRirFRLvd5F7ueEaI8Wx9s_C2lzWRWg4f5_iXn1wElcsOJn5MTPqRKiqbMLP8GFFiwjetc5pznO7V3w9S4dLI3eEQKX53u32vMqiXT9DZmB0cqL"
                alt="SellWhatUMade e-commerce dashboard displayed on mobile and desktop in a vibrant corporate light-mode theme"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-5 left-5">
                <span className="bg-primary text-surface-container-lowest px-4 py-1 rounded-full text-label-sm font-semibold">
                  Featured Project
                </span>
              </div>
            </div>

            {/* Right — content */}
            <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <span className="text-on-primary-container font-semibold uppercase tracking-wider text-xs mb-2">
                E-Commerce SaaS
              </span>
              <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-4">
                SellWhatUMade
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                A comprehensive multi-tenant marketplace platform designed for
                creators. We engineered a scalable backend infrastructure
                coupled with a fluid React Native mobile experience to handle
                high-volume transactions seamlessly.
              </p>
              <div className="flex flex-wrap gap-2 mb-10">
                {["React Native", "Node.js", "AWS Cloud", "GraphQL"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded text-label-sm"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
              <a
                href="https://www.sellwhatumade.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary font-semibold hover:gap-2 transition-all"
              >
                View Case Study
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Portfolio Grid ────────────────────────────────────────────────────── */}
      <section className="pb-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {PORTFOLIO_PROJECTS.map((project) => (
              <article
                key={project.id}
                className="group bg-surface-container-lowest rounded-xl border border-outline-variant overflow-hidden shadow-sm flex flex-col hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                {/* Thumbnail */}
                <div className="relative h-64 overflow-hidden bg-surface-container">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Category badge */}
                  <div className="mb-3">
                    <span
                      className={`text-xs font-bold px-2 py-0.5 rounded ${project.badgeCls}`}
                    >
                      {project.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-h3 text-h3 text-primary mb-3">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="font-body-md text-body-md text-on-surface-variant mb-5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] text-outline px-2 py-0.5 border border-outline-variant rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA link — pushed to bottom */}
                  <div className="mt-auto">
                    <Link
                      href="/our-work"
                      className="text-primary font-semibold text-label-sm inline-flex items-center group-hover:underline"
                    >
                      View Case Study
                      <span className="material-symbols-outlined text-[18px] ml-1">
                        open_in_new
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-4">
            Have a project in mind?
          </h2>
          <p className="text-on-surface-variant font-body-lg text-body-lg max-w-2xl mx-auto mb-10">
            Let&apos;s build something exceptional together. Our team is ready
            to transform your vision into a world-class digital product.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary text-surface-container-lowest px-8 py-4 rounded-xl font-semibold text-body-md hover:brightness-110 transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">mail</span>
              Start a Project
            </Link>
            <Link
              href="/contact"
              className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-semibold text-body-md hover:bg-primary hover:text-surface-container-lowest transition-all inline-flex items-center gap-2"
            >
              <span className="material-symbols-outlined">chat</span>
              Get Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
