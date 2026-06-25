import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | Siddhya Technology",
  description:
    "Founded in 2026 in Barela, Jabalpur, Siddhya Technology pioneers the next generation of digital solutions through engineering excellence and human-centric design.",
};

const SERVICES = [
  {
    icon: "terminal",
    title: "Custom Software",
    desc: "Tailored enterprise applications designed to streamline complex business logic and workflows.",
  },
  {
    icon: "devices",
    title: "Web Development",
    desc: "High-performance, responsive websites built with modern frameworks for optimal speed.",
  },
  {
    icon: "smartphone",
    title: "Mobile Apps",
    desc: "Native and cross-platform mobile experiences that engage users on the go.",
  },
  {
    icon: "cloud",
    title: "Cloud Solutions",
    desc: "Infrastructure migration and management to ensure 99.9% uptime and scalability.",
  },
  {
    icon: "psychology",
    title: "AI & ML",
    desc: "Integrating intelligent automation and data insights into your core processes.",
  },
  {
    icon: "palette",
    title: "UI/UX Design",
    desc: "User-centric design systems that balance aesthetic beauty with functional clarity.",
  },
  {
    icon: "shield",
    title: "Cybersecurity",
    desc: "Robust protection strategies to safeguard your data and digital assets.",
  },
  {
    icon: "database",
    title: "Data Analytics",
    desc: "Transforming raw data into actionable business intelligence and dashboards.",
  },
  {
    icon: "support_agent",
    title: "IT Consulting",
    desc: "Strategic guidance to align your technology roadmap with your business goals.",
  },
];

const TECH_STACK = [
  "React / Next.js",
  "TypeScript",
  "Node.js",
  "Python / Django",
  "AWS Cloud",
  "Kubernetes",
  "GraphQL",
  "Tailwind CSS",
];

const INFO_CARDS = [
  { icon: "calendar_month", label: "Founded", value: "June 2026" },
  { icon: "location_on", label: "Headquarters", value: "H.No. 11, Barela, Jabalpur, MP" },
  { icon: "call", label: "Phone", value: "+91 6265004675" },
  { icon: "mail", label: "Email", value: "siddhyatechnology@gmail.com" },
];

export default function AboutPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <header className="relative bg-primary-container overflow-hidden py-20 md:py-28 lg:py-32">
        {/* Subtle technical grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gradient accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/60 to-transparent pointer-events-none" />

        <div className="relative max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-h1 text-h1-mobile md:text-h1 text-surface-container-lowest mb-6 leading-tight">
            We Are Siddhya Technology
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/80 max-w-2xl mx-auto">
            Pioneering the next generation of digital solutions through
            engineering excellence and human-centric design.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-surface-container-lowest text-primary-container px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
            >
              Get Free Consultation
            </Link>
            <Link
              href="/services"
              className="bg-transparent border-2 border-surface-container-lowest/40 text-surface-container-lowest px-8 py-4 rounded-xl font-bold hover:bg-surface-container-lowest/10 transition-all"
            >
              Explore Our Story
            </Link>
          </div>
        </div>
      </header>

      {/* ── Our Story ─────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-container-lowest">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text content */}
          <div className="space-y-6 order-2 md:order-1">
            <div className="inline-block px-4 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
              Est. 2026
            </div>
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary">
              Our Story
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Founded in 2026 in the heart of Barela, Jabalpur, Siddhya
              Technology began with a singular vision: to bridge the gap between
              complex engineering and everyday utility.
            </p>
            <blockquote className="p-6 border-l-4 border-primary bg-surface-container-low rounded-r-xl font-body-md text-body-md text-primary italic">
              &ldquo;Our mission is to empower businesses with scalable,
              future-proof technology that drives meaningful impact in an
              increasingly digital world.&rdquo;
            </blockquote>
            <p className="font-body-md text-body-md text-on-surface-variant">
              From a small team of passionate developers to a full-service
              technology house, we remain committed to our roots in Jabalpur
              while delivering world-class solutions globally.
            </p>
          </div>

          {/* Image */}
          <div className="relative h-72 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
            <div className="absolute inset-0 bg-primary/10 z-10 pointer-events-none" />
            {/* EST badge */}
            <div className="absolute top-4 left-4 z-20 bg-primary text-on-primary px-5 py-2.5 rounded-xl font-bold text-label-sm">
              EST. JUNE 2026
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Futuristic corporate office in Jabalpur — Siddhya Technology headquarters"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCr9CDEIyNDnuZn654pZ3auX2vseyUoJmaeFYwUSfYLHg2Qqa_fvnSRwGL7hNxK7gls_MYUJOc-H1PmXnSzKwyVwJLa2qSJP_c9I5VGgPL6zAj86L5JtprIjt59emk_4vo1onL9kvE5GqnrnaJCHimnSO1a-UEcdxcA1vqpWeFrLGsBjSxIGWOlVU1qqndo0LND3Dx7WZumGJ4Kmx4EUYntH1P0iGSQdp5nwB736HJtiKAkhw-qHQ1DwHSUcPfPICEhaitC3hAPQY03"
            />
          </div>
        </div>
      </section>

      {/* ── Engineering Stack ──────────────────────────────────────── */}
      <section className="py-12 bg-surface-container-low border-y border-outline-variant/30 overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <p className="text-center font-label-sm text-label-sm text-outline mb-8 uppercase tracking-widest">
            Our Engineering Stack
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-5 md:px-6 py-2 bg-surface-container-lowest border border-outline-variant rounded-full text-primary font-medium shadow-sm text-body-md hover:shadow-md transition-shadow"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ────────────────────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-4">
              What We Do
            </h2>
            <div className="w-20 h-1.5 bg-tertiary-fixed-dim mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {SERVICES.map((service) => (
              <div
                key={service.title}
                className="p-8 bg-surface-container-lowest border border-outline-variant rounded-2xl hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined fill-1">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-h4 text-h4 text-on-surface mb-3">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SellWhatUMade Featured Product ────────────────────────── */}
      <section className="py-16 md:py-24">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="relative overflow-hidden rounded-[2rem] bg-primary text-surface-container-lowest p-8 md:p-12 lg:p-20 shadow-2xl">
            {/* Decorative background gradient */}
            <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none bg-gradient-to-l from-on-primary-container to-transparent" />

            <div className="relative z-10 max-w-xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-lowest/10 border border-surface-container-lowest/20 rounded-full text-label-sm font-label-sm mb-6">
                <span className="w-2 h-2 rounded-full bg-tertiary-fixed shrink-0" />
                Featured Product
              </div>

              <h2 className="font-h2 text-h2-mobile md:text-h2 text-surface-container-lowest mb-6">
                SellWhatUMade
              </h2>
              <p className="font-body-lg text-body-lg text-surface-container-lowest/80 mb-8 leading-relaxed">
                Our flagship product designed for creators and
                micro-manufacturers. A seamless marketplace engine that
                simplifies the transition from crafting to commerce.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="https://www.sellwhatumade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  Visit Platform
                </a>
                <a
                  href="https://www.sellwhatumade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent border-2 border-surface-container-lowest/30 text-surface-container-lowest px-8 py-4 rounded-xl font-bold hover:bg-surface-container-lowest/10 transition-all"
                >
                  Case Study
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Details Info Cards ─────────────────────────────── */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
            {INFO_CARDS.map((card) => (
              <div
                key={card.label}
                className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant flex flex-col items-center text-center hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-secondary-container rounded-full flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <span className="text-outline font-label-sm text-label-sm uppercase tracking-wider mb-1">
                  {card.label}
                </span>
                <span className="font-h4 text-h4 text-primary">
                  {card.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ────────────────────────────────────────────── */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="relative bg-primary-container rounded-3xl p-8 md:p-16 text-center overflow-hidden">
          {/* Abstract grid bg */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  height="40"
                  id="about-cta-grid"
                  patternUnits="userSpaceOnUse"
                  width="40"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect fill="url(#about-cta-grid)" height="100%" width="100%" />
            </svg>
          </div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-surface-container-lowest">
              Ready to Build Something Great?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-lowest/80 max-w-2xl mx-auto">
              Whether you have a fully-fledged RFP or just an idea on a napkin,
              our team in Jabalpur is ready to help you navigate the journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="bg-surface-container-lowest text-primary px-8 md:px-10 py-4 rounded-xl font-bold text-body-md shadow-xl hover:bg-opacity-90 transition-all inline-flex items-center gap-3"
              >
                <span className="material-symbols-outlined">mail</span>
                Send an Inquiry
              </Link>
              <Link
                href="/contact"
                className="bg-[#25D366] text-white px-8 md:px-10 py-4 rounded-xl font-bold text-body-md shadow-xl hover:brightness-110 transition-all inline-flex items-center gap-3"
              >
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
