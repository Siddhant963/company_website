import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Products | Siddhya Technology",
  description:
    "Pioneering enterprise solutions designed to transform industries. From e-commerce ecosystems to specialized healthcare and agriculture platforms, we build the future of SaaS.",
};

/* ─── Data ─────────────────────────────────────────────────────────────── */

const SELL_FEATURES = [
  { icon: "person_add", label: "Seller Onboarding" },
  { icon: "payments", label: "Secure Payments" },
  { icon: "inventory_2", label: "Inventory Management" },
  { icon: "analytics", label: "Real-time Analytics" },
  { icon: "campaign", label: "Marketing Tools" },
  { icon: "support_agent", label: "24/7 Support" },
];

const PLATFORM_BADGES = [
  { icon: "phone_android", label: "Android App" },
  { icon: "phone_iphone", label: "iOS App" },
  { icon: "language", label: "Web Platform" },
];

const SELLER_STEPS = [
  {
    num: "01",
    icon: "app_registration",
    title: "Quick Register",
    desc: "Simple verification process to get your store verified and ready to sell in minutes.",
  },
  {
    num: "02",
    icon: "add_business",
    title: "List Products",
    desc: "Bulk upload or individual listing with AI-assisted description and SEO optimization.",
  },
  {
    num: "03",
    icon: "trending_up",
    title: "Scale Sales",
    desc: "Utilize integrated marketing and analytics tools to reach more customers globally.",
  },
];

const BUYER_STEPS = [
  {
    num: "01",
    icon: "search",
    title: "Search & Compare",
    desc: "Effortlessly find products from verified sellers with smart comparison tools.",
  },
  {
    num: "02",
    icon: "security_update_good",
    title: "Checkout Securely",
    desc: "Multiple payment options with end-to-end encryption and buyer protection.",
  },
  {
    num: "03",
    icon: "local_shipping",
    title: "Track & Receive",
    desc: "Real-time order tracking and simplified returns for a hassle-free experience.",
  },
];

const PIPELINE = [
  {
    icon: "agriculture",
    iconColor: "text-green-700",
    iconBg: "bg-green-50",
    name: "KrishiConnect",
    desc: "An AgTech platform connecting farmers directly to global markets, providing weather-based insights, and supply chain transparency for the agriculture sector.",
  },
  {
    icon: "health_and_safety",
    iconColor: "text-red-600",
    iconBg: "bg-red-50",
    name: "SwasthyaCare",
    desc: "A comprehensive telehealth platform bridging the gap between patients and healthcare providers across India, with integrated diagnostics, prescriptions, and wellness tracking.",
  },
];

/* ─── Page ─────────────────────────────────────────────────────────────── */

export default function ProductsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section
        className="bg-primary-container py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      >
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-h1 text-h1-mobile md:text-h1 text-surface-container-lowest mb-6 leading-tight">
              Our Products
            </h1>
            <p className="font-body-lg text-body-lg text-surface-container-lowest/80 max-w-2xl">
              Pioneering enterprise solutions designed to transform industries.
              From e-commerce ecosystems to specialized healthcare and
              agriculture platforms, we build the future of SaaS.
            </p>
          </div>
        </div>
        {/* Decorative overlay */}
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-20 pointer-events-none bg-gradient-to-l from-white/10 to-transparent" />
      </section>

      {/* ── Featured Product: SellWhatUMade ──────────────────────────── */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-2xl overflow-hidden shadow-lg flex flex-col lg:flex-row">

            {/* Left Column — content */}
            <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              {/* Brand row */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-xl shrink-0">
                  <span className="material-symbols-outlined text-surface-container-lowest">
                    shopping_cart
                  </span>
                </div>
                <span className="font-h3 text-h3 text-primary font-bold">
                  SellWhatUMade
                </span>
              </div>

              <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
                A comprehensive multi-vendor marketplace engine designed for
                rapid deployment. Empower artisans, local businesses, and
                distributors with a robust digital storefront — built for{" "}
                <span className="font-bold text-primary">Vocal for Local</span>.
              </p>

              {/* Platform badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {PLATFORM_BADGES.map((b) => (
                  <span
                    key={b.label}
                    className="px-3 py-1 bg-surface-container-low border border-outline-variant rounded-full text-label-sm font-label-sm flex items-center gap-1.5 text-on-surface-variant"
                  >
                    <span className="material-symbols-outlined text-[18px]">
                      {b.icon}
                    </span>
                    {b.label}
                  </span>
                ))}
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6 mb-10">
                {SELL_FEATURES.map((f) => (
                  <div key={f.label} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-electric-blue shrink-0">
                      {f.icon}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface">
                      {f.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <button className="bg-electric-blue text-surface-container-lowest px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-md">
                    Request Demo
                  </button>
                </Link>
                <a
                  href="https://www.sellwhatumade.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-electric-blue text-electric-blue px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all"
                >
                  Visit Platform
                </a>
              </div>
            </div>

            {/* Right Column — mockup */}
            <div className="lg:w-1/2 bg-surface-container-high p-8 flex items-center justify-center relative min-h-[300px] md:min-h-[400px]">
              <div className="w-full h-full rounded-xl overflow-hidden shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="SellWhatUMade multi-vendor dashboard showing sales charts, product grid, and navigation sidebar"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfMX-pV5W3gFQLgQCz5UFuc8IUZk2BomCveuBwD0ZvNWD_mlui6QJJ028O_EZTWhMYDZ5sw9MP_UN6V0SM4Fd14kgIHI1fYyKxpYebZAMdCV00uoAEc_OK6_crTeGrjObi653RkDkuRUS3ZMKDsC6-JrbCPuZ_cdClIN8h4xpcZ7eywFzvdPq4tr-e_yS33g7t-fBRRUFiusoYu3Ouun4wEav_T79zeArFwlWGl4mbN3GQu6qMA70o-vh9QUCfJUpgGcy9fdx4ZjWy"
                />
              </div>
              {/* Floating mobile overlay — xl only */}
              <div className="absolute -bottom-4 -left-4 w-48 h-48 rounded-2xl shadow-xl border-4 border-surface-container-lowest overflow-hidden hidden xl:block">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="SellWhatUMade mobile app showing artisanal product listings"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYE6iNi0zK1vDWfLGzq0D4He2Gif759MHGSkLrR75_gGYbW0Wv-8ZbaGupZ0XWQmsRNgWBw0hPNfYyjvPDbq--VqM8k4hoMOI5Qh9j0ht0JsUFU62tWdf4EvS5ieBzpER0OK9T4w9zaZeO6bhFuUIZZiin1VzyhteSJ5Apb4Fg1drpr8Ktj6crgjt6s0KRkz9tmHWYhS3dTbJ_pcEwFMKZdmfoI42mNRlKIBNi4lu1yAU4Tn2PClGhDwPieDfAb7ZDA3EkGlEtTWIx"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── How It Works ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          {/* Section heading */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-4">
              How It Works
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
              Two sides of the same powerful ecosystem, working in harmony to
              drive growth.
            </p>
          </div>

          <div className="space-y-12 md:space-y-16">
            {/* ── For Sellers ── */}
            <div>
              <h3 className="font-h3 text-h3 text-on-surface mb-6 md:mb-8 flex items-center gap-3">
                <span className="bg-primary text-white p-1 rounded-md material-symbols-outlined">
                  store
                </span>
                For Sellers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {SELLER_STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant relative group hover:border-primary transition-all"
                  >
                    <div className="text-h1 font-h1 text-primary/10 absolute top-4 right-6 group-hover:text-primary/20 transition-colors select-none leading-none">
                      {step.num}
                    </div>
                    <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-primary">
                        {step.icon}
                      </span>
                    </div>
                    <h4 className="font-h4 text-h4 text-on-surface mb-3">
                      {step.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── For Buyers ── */}
            <div>
              <h3 className="font-h3 text-h3 text-on-surface mb-6 md:mb-8 flex items-center gap-3">
                <span className="bg-secondary text-white p-1 rounded-md material-symbols-outlined">
                  shopping_bag
                </span>
                For Buyers
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
                {BUYER_STEPS.map((step) => (
                  <div
                    key={step.num}
                    className="bg-surface-container-lowest p-8 rounded-2xl border border-outline-variant relative group hover:border-secondary transition-all"
                  >
                    <div className="text-h1 font-h1 text-secondary/10 absolute top-4 right-6 group-hover:text-secondary/20 transition-colors select-none leading-none">
                      {step.num}
                    </div>
                    <div className="w-12 h-12 bg-surface-container-high rounded-lg flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-secondary">
                        {step.icon}
                      </span>
                    </div>
                    <h4 className="font-h4 text-h4 text-on-surface mb-3">
                      {step.title}
                    </h4>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Our Pipeline ─────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="mb-8 md:mb-12">
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-2">
              Our Pipeline
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant">
              Expanding our reach into critical vertical markets.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {PIPELINE.map((product) => (
              <div
                key={product.name}
                className="bg-surface-container-lowest border-2 border-dashed border-outline-variant rounded-2xl p-8 md:p-10 flex flex-col items-start hover:border-primary/50 transition-colors"
              >
                {/* Badge */}
                <div className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-label-sm font-label-sm mb-6 uppercase tracking-wider">
                  In Development
                </div>
                {/* Icon */}
                <div
                  className={`w-16 h-16 ${product.iconBg} rounded-2xl flex items-center justify-center mb-6`}
                >
                  <span
                    className={`material-symbols-outlined ${product.iconColor} text-4xl`}
                  >
                    {product.icon}
                  </span>
                </div>
                <h3 className="font-h3 text-h3 text-on-surface mb-4">
                  {product.name}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  {product.desc}
                </p>
                <button className="flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Learn more about the vision
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────── */}
      <section className="py-12 md:py-20 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary-container rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-h1 text-h2-mobile md:text-h2 text-surface-container-lowest mb-4 leading-tight">
                Interested in Our Products?
              </h2>
              <p className="text-surface-container-lowest/80 font-body-lg text-body-lg max-w-2xl mx-auto mb-8">
                Whether you want a demo, a partnership, or to learn more about
                our roadmap — our team is ready to connect with you.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <button className="bg-electric-blue text-white px-10 py-4 rounded-xl font-bold text-body-md shadow-xl hover:bg-blue-700 transition-all flex items-center gap-3">
                    <span className="material-symbols-outlined">mail</span>
                    Get in Touch
                  </button>
                </Link>
                <Link href="/about">
                  <button className="border-2 border-surface-container-lowest text-surface-container-lowest px-10 py-4 rounded-xl font-bold text-body-md hover:bg-surface-container-lowest/10 transition-all flex items-center gap-3">
                    <span className="material-symbols-outlined">info</span>
                    About Us
                  </button>
                </Link>
              </div>
            </div>
            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <svg
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <pattern
                    height="40"
                    id="products-cta-grid"
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
                <rect
                  fill="url(#products-cta-grid)"
                  height="100%"
                  width="100%"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
