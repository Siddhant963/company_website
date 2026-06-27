import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Siddhya Technology | #1 IT Company in Jabalpur, Madhya Pradesh",
  description:
    "Siddhya Technology is Jabalpur's #1 IT company. We deliver Custom Software Development, Mobile Apps, ERPNext ERP, Digital Marketing, Cloud Solutions & AI/ML services across Madhya Pradesh and India.",
  keywords: [
    "IT company Jabalpur",
    "tech company Jabalpur",
    "best IT company Jabalpur",
    "software development Jabalpur",
    "ERP company Jabalpur",
    "digital marketing Jabalpur",
    "web development Jabalpur",
    "mobile app development Jabalpur",
    "cloud services Jabalpur",
    "IT company Madhya Pradesh",
    "software company MP",
    "Siddhya Technology Jabalpur",
  ],
  alternates: { canonical: "https://siddhyatechnology.in" },
};

const HERO_STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "20+", label: "Expert Developers" },
  { value: "6+", label: "Core Tech Stacks" },
  { value: "India", label: "Pan-India Delivery" },
];

const SERVICES = [
  {
    icon: "smartphone",
    title: "App Development",
    desc: "High-performance iOS and Android applications built with Flutter and React Native.",
  },
  {
    icon: "language",
    title: "Web Development",
    desc: "Scalable, responsive, and secure web applications utilizing modern frameworks.",
  },
  {
    icon: "terminal",
    title: "Custom Software",
    desc: "Tailor-made software solutions designed to fit your unique business workflows.",
  },
  {
    icon: "settings_applications",
    title: "ERPNext",
    desc: "Customized ERP implementation to streamline your entire business operations.",
  },
  {
    icon: "hub",
    title: "CRM & CMS",
    desc: "Enterprise customer relationship and content management system integrations.",
  },
  {
    icon: "cloud_queue",
    title: "SaaS Development",
    desc: "Cloud-native multi-tenant platforms built for scale and subscription models.",
  },
  {
    icon: "headset_mic",
    title: "BPO Support",
    desc: "Operational excellence with our technical support and business process outsourcing.",
  },
  {
    icon: "groups",
    title: "IT Staffing",
    desc: "Bridge the talent gap with our highly skilled dedicated engineering teams.",
  },
  {
    icon: "ads_click",
    title: "Digital Marketing",
    desc: "Data-driven growth strategies including SEO, SEM, and performance marketing.",
  },
];

const WHY_STATS = [
  {
    value: "24/7",
    title: "Tech Support",
    desc: "Always available for mission-critical issues.",
    dark: false,
  },
  {
    value: "100%",
    title: "IP Protection",
    desc: "Strict NDAs and secure data handling.",
    dark: true,
  },
  {
    value: "90+",
    title: "NPS Score",
    desc: "Exceeding client expectations daily.",
    dark: false,
  },
  {
    value: "X10",
    title: "Performance",
    desc: "Optimized code for maximum speed.",
    dark: false,
  },
];

const TECH_STACK = [
  {
    name: "PYTHON",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDZuvP0xR64pN8-JEUY-ZOrL9TdoMZDRgcSNSTiQfJM-Q5U0eMB4fA2oiDbSH4AZQe8pJ7X3v-_Z5iePLmafl82OLOSp6oCw1JXZx-FxqsrCtweAMi23qF_akXyMj69QiwtNJu0V86TsZqIJ5YkVnvqOe6Gcf2k6d79bGiSBuH9Gir4YFq4-QAHZny906g95hvTm2QvDbSR7hJsM_iI52kCUdvnqrorqi3YJJq89y3mRKz4l3NzLvNwwx33Do4aYb9mZBk5zpdSVWpP",
  },
  {
    name: "JAVA",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAynREzzDYCbK1rr1hcTEhpM8_shrs6K8M-IaQ5jtR6iEWRozW-0aBimvkwQPqQcy_h_BDy4qIQ2Vk6_T3NoADZbcusOKC8IbtxwNh6j7L_gV8u9_PWdD4PWevMzjV4zEcpZWUTASyh7s5GC-kQgbkIsEO4RPL0eDTEOEefuGfuRRkmLY6zjWBLUONOefMsONvoM3mrsssKb7uxX44MysHyUV0R2cp3Yk70eEZFOf69hZKzcPeS18l_AXUCn6K1RhoUZ5StI-VKTDyt",
  },
  {
    name: "NODE.JS",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9yJjJ6dGyu6f2njLhC_bxfCBkBO7jBU7DQxaHgOCslnrVReYdQYsEtjZ4VYqgbjSn2BawtA5CDrP9mQermn-XRkUn_uzqjweQ3Yzl_1KDTJTRShOSk_dIsw5DMVvSIWdBZne_ebiyG5w3JIDt1eQXY98Cm-71XWkf8I5RZHo1cizesx6P6a6_QfOp_-eBORbcaDEuPv7lv7UGjcvHu_T5LAicq4cVTBLfD6TvPahpbrHw4_8LZkj-SF2jTZd1fso2TfXSXuI0njAn",
  },
  {
    name: "REACT",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJ5PBtHXc3Iea-g7CfVCK0hwHus_pvL9oswryVEp1g3VIB1YPBc-5FykO2CG8O72OWym3t6dqQzuPCh8fKKSfpD-sQ20cEyBQxY--qsaYTg9z8Oq7kR4uBRlCsqb4zOU_SKKMqGzoSuxXCIbg1K4NS-acLqH6FqIYHWrSQuzJD46umGz9lfVVSM6yV94qQ4Vr0ozi4LqPZJ8xxFEIJc6D3m_QJZXDoHnv6MqstV6gpjSpnqRtATspcDJ-d2IF0bKf5Il6OvZ3sg9vz",
  },
  {
    name: "FLUTTER",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAGOP0ETyCKqW-fqwB9PouCIESlo_PMSmsGCKS89gYmkHddU05GfCwIUWC2s86BniKKK9mItNgk-ZdAijZxs3TTGs0c7kPPTTxbLUEASAGtYvjcZWhTj5XBSWgYmX4MicayoonZ0jl-JTbvTOhP7G-PHdwcRz6aX2bZv0BV_P6l4THypgyJJIK-IbuH3Gs0TB9ZCoL0niY9lBQh3luJLPpTDZb8rTZ5ijEPd5-xZNHZjhguLwADTbFeSw5cH5zebI51_ZGxTl6JkmSO",
  },
  {
    name: "PHP / LARAVEL",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxonzWw0RS-_187dmiMA0hUMEmaxT9w0KnlZU2uRXnFP1Bbxk_VtQXPhTZ2A1GvrGTQ4bQtpmsmsDb2D71WqggU-VGNejvNacc7Itud-GI0q4OYbJ8E06Oeb-F6YWUQupR8te7wG4Y49vHNptI2uXliF3qVx_V0IVtvxIFcT_KepmJ5KMZjgFslPA4Y9xCRib6PFHCFsIESZJmkj7YWMvPmjayPFCocT4wt_T6TW07qeKh2vacR9FQDQwkcESVafTfj09HhNQEME5",
  },
  {
    name: "ERPNEXT",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZggZVKlOsmjsCHk6ZW2l2hfB-s5BQ8wskbuQ07qTAXfNNp1obw7VVEk0wgzcV7WPPID0A_uT6SDzbcRp8sU5YUkBPfHaRqayFI5AdjsUp6CZA_H31Dsh_4cWqVnJZyCX4GiG5iblTDh_2TV36mCEXKB_4bVjv6dUe8MwmwNjBUszJD1MCiBglPEYVVp913o5frWvztUQdx3aWfOtEmvf-3OIVCy4nDWJlkKW4clQj3N42vpf3DB6bimoEOSHIrf_lq-_rD4aVUzPM",
  },
  {
    name: "MYSQL",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxonzWw0RS-_187dmiMA0hUMEmaxT9w0KnlZU2uRXnFP1Bbxk_VtQXPhTZ2A1GvrGTQ4bQtpmsmsDb2D71WqggU-VGNejvNacc7Itud-GI0q4OYbJ8E06Oeb-F6YWUQupR8te7wG4Y49vHNptI2uXliF3qVx_V0IVtvxIFcT_KepmJ5KMZjgFslPA4Y9xCRib6PFHCFsIESZJmkj7YWMvPmjayPFCocT4wt_T6TW07qeKh2vacR9FQDQwkcESVafTfj09HhNQEME5",
  },
  {
    name: "AWS",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAdxonzWw0RS-_187dmiMA0hUMEmaxT9w0KnlZU2uRXnFP1Bbxk_VtQXPhTZ2A1GvrGTQ4bQtpmsmsDb2D71WqggU-VGNejvNacc7Itud-GI0q4OYbJ8E06Oeb-F6YWUQupR8te7wG4Y49vHNptI2uXliF3qVx_V0IVtvxIFcT_KepmJ5KMZjgFslPA4Y9xCRib6PFHCFsIESZJmkj7YWMvPmjayPFCocT4wt_T6TW07qeKh2vacR9FQDQwkcESVafTfj09HhNQEME5",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "Siddhya Technology transformed our manual tracking into a fully automated ERP system. Their attention to detail in the business logic was exceptional.",
    name: "Sarah Jenkins",
    role: "COO, LogiStream Global",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBHEyPZS-Jay-tgumePy2SvYB-jKR24_aYbOwlv8oUZA5o07exeSLnx0-fiXVpNFZ-sjbbb1rtvHv-kdfLtWupzTf3bwX-LlEiCHjQoIwMqPCqAseOAZh25xFjoc2wyhDgJY4xCThS-uhMBmXIdbRuFdVDXj29BsTVCazE4sbb6GrDK8bHe-OMNmCA1_UnFzvqkS_q39F_WAVbH-H6XMv80T4MTf_ez4tDtSElYlmpGMe47rd-iY8LhwAdlA6lM6T4aqaTOrwjy_gRY",
  },
  {
    quote:
      "The mobile app they built for us reached 100k downloads in the first month. No bugs, great performance, and incredible UI design.",
    name: "Michael Chen",
    role: "Founder, FitFlow App",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCp8v9Ji3T3hP-5yoQ3ONrJblFVe9Mqw79wzjFmTjSV_uzaVM8FvBfN0WpvOxEtB9ZhEI6nPcpl_WJuKL8lYg3llXCrThiaPUM6JQr0UlC7WSZ3H8Z5w7oPolbOBItUUZGJYEZCVauzcPRIF5zpnAScoobUx4IvXQQzO2XqnAxuwnrxA-kdizhICJfzfIwp2BP9TTpXFy1z9ulZ-s5MdglV3pqU3KsAzXgFqUaDcbEeyZrWipVf91torK43jC5WxnH6LMRlZE-wIqub",
  },
  {
    quote:
      "Reliable partners for our ongoing cloud infrastructure. They've saved us 30% on AWS costs through efficient architectural optimization.",
    name: "David Roth",
    role: "CTO, DataSecure Inc.",
    avatar:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAcj-MMzBRguHZcFNbZ691sO8RORehxcRMXj1AgymQWxJRiihzcnyrZpSuisMPpbJzA0BTUCUtEsRFrEMiHGJNf__x_EyZH_hWgo5xwdTaOenRl_cLAeNpAxoEulxabCsKpNlnn062ixxQgumY--ElFVPxOLHNIYFelfjTbntexPiqTUt6N5g8vDWA5SYbwCW_mw5UL3awHhGir3E02bGKaTR1cjwjmcQRBLsbWBhxRwkgqB9u3C_SeWWUBNJ5KHfIy3h92bsfXMuOj",
  },
];

export default function Home() {
  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Hero Section                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-primary-container relative overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 flex flex-col md:flex-row items-center gap-10 md:gap-16 relative z-10">

          {/* Left Content */}
          <div className="w-full md:w-[55%] space-y-6 md:space-y-8">
            <h1 className="font-h1 text-h1-mobile lg:text-h1 text-surface-container-lowest leading-tight">
              Complete IT Solutions "” From Idea to Launch
            </h1>
            <p className="text-surface-container-lowest/80 text-body-md md:text-body-lg font-body-md max-w-xl">
              Empowering businesses with enterprise-grade Software Development,
              Mobile Apps, and ERP solutions tailored for the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-electric-blue text-white px-8 py-3.5 rounded-lg font-bold text-body-md shadow-lg hover:-translate-y-0.5 transition-transform text-center">
                Start a Project
              </Link>
              <Link href="/our-work" className="w-full sm:w-auto border-2 border-surface-container-lowest text-surface-container-lowest px-8 py-3.5 rounded-lg font-bold text-body-md hover:bg-surface-container-lowest/10 transition-colors text-center">
                View Our Work
              </Link>
            </div>

            {/* Stats Row "” 2-col on mobile, 4-col on lg */}
            <div className="pt-6 md:pt-8 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-t border-surface-container-lowest/20">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-h3 font-h3 text-surface-container-lowest font-bold">
                    {stat.value}
                  </div>
                  <div className="text-[12px] font-label-sm text-surface-container-lowest/60 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Illustration "” hidden on mobile, visible md+ */}
          <div className="hidden md:block md:w-[45%] relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-surface-container-lowest/10 shadow-2xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Enterprise IT illustration"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_58X3j19K6QbcJoC7tJoEzH3qShuYgfMambnuqnVFIENuWMqhpwBu3bd-vfiMvvu4l0kHXdmq9baFx2Mz58FQeCbKbspCma996ZSvSSUe99IyyCPRMxEGge9BW5NUC5ty_clynx6N5dTGLM5rY8A3uLdFmJcDdKeMQswgEDLKrXaTDES5jwpYYRf84oBAojz54SI54o_T8ohnQvCRuJI_fYy-BPSifGeug9itwV629hDXfZibh2dMVr7OwMpuR2H03YrcML1753Km"
              />
            </div>
            {/* Floating badge "” only visible on large screens where there is room */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-electric-blue text-4xl">
                  rocket_launch
                </span>
                <div>
                  <div className="font-bold text-primary">Scalable Tech</div>
                  <div className="text-sm text-secondary">Built for Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-electric-blue to-transparent" />
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Services Overview "” 9-card grid                                     */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <h2 className="font-h2 text-h2-mobile lg:text-h2 text-primary">
            Comprehensive Tech Capabilities
          </h2>
          <p className="text-secondary font-body-md text-body-md max-w-2xl mx-auto">
            We leverage the latest technologies to solve complex business
            challenges through specialized services.
          </p>
        </div>
        {/* 1-col â†’ 2-col md â†’ 3-col lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant hover:shadow-xl transition-all group hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-secondary-container rounded-lg flex items-center justify-center mb-6 group-hover:bg-electric-blue transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-white">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-h4 text-h4 text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-on-surface-variant font-body-md text-body-md">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why Choose Us                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-24 bg-surface-container-low">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* Left "” copy block */}
          <div className="space-y-6">
            <h2 className="font-h2 text-h2-mobile lg:text-h2 text-primary">
              Why Industry Leaders Choose Siddhya
            </h2>
            <p className="text-on-surface-variant font-body-lg text-body-md md:text-body-lg">
              We don&apos;t just write code; we build business solutions. Our
              methodology combines technical excellence with deep strategic
              insight to ensure your project delivers real-world value.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-success-green mt-1">
                  check_circle
                </span>
                <div>
                  <span className="font-bold text-primary">
                    Agile Development
                  </span>
                  <p className="text-sm text-secondary">
                    Rapid iterations and transparent communication throughout
                    the cycle.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-success-green mt-1">
                  check_circle
                </span>
                <div>
                  <span className="font-bold text-primary">Expert Talent</span>
                  <p className="text-sm text-secondary">
                    Highly skilled engineers with experience in diverse tech
                    stacks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right "” 2Ã—2 stat cards (always 2-col, inner padding shrinks on mobile) */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {WHY_STATS.map((stat) =>
              stat.dark ? (
                <div
                  key={stat.title}
                  className="bg-primary-container p-6 md:p-8 rounded-2xl shadow-sm transition-transform hover:-translate-y-1"
                >
                  <div className="text-h2-mobile md:text-h2 font-h2 text-surface-container-lowest mb-2">
                    {stat.value}
                  </div>
                  <div className="font-bold text-surface-container-lowest text-sm md:text-base">
                    {stat.title}
                  </div>
                  <p className="text-xs text-surface-container-lowest/60 mt-1">
                    {stat.desc}
                  </p>
                </div>
              ) : (
                <div
                  key={stat.title}
                  className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl shadow-sm border border-outline-variant transition-transform hover:-translate-y-1"
                >
                  <div className="text-h2-mobile md:text-h2 font-h2 text-electric-blue mb-2">
                    {stat.value}
                  </div>
                  <div className="font-bold text-primary text-sm md:text-base">
                    {stat.title}
                  </div>
                  <p className="text-xs text-secondary mt-1">{stat.desc}</p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* SellWhatUMade Spotlight                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-24 bg-primary overflow-hidden">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-primary-container rounded-[2.5rem] p-8 md:p-12 lg:p-20 relative flex flex-col lg:flex-row items-center gap-10 md:gap-12 border border-white/10 overflow-hidden">
            {/* Earthy background glow */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,#c8885b22,transparent_50%)]" />

            {/* Left "” copy */}
            <div className="w-full lg:w-1/2 space-y-6 relative z-10">
              <span className="inline-block px-4 py-1.5 bg-[#c8885b]/20 text-[#feb786] rounded-full text-label-sm font-label-sm uppercase tracking-widest">
                Product Spotlight
              </span>
              <h2 className="font-h1 text-h2-mobile lg:text-h2 text-surface-container-lowest">
                SellWhatUMade
              </h2>
              <p className="text-surface-container-lowest/70 text-body-md md:text-body-lg font-body-lg">
                Our flagship e-commerce platform designed for creators. Built
                from scratch using modern microservices architecture to handle
                millions of transactions with zero downtime.
              </p>
              <ul className="space-y-3 text-surface-container-lowest/80 text-body-md">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#c8885b]">
                    verified
                  </span>
                  Multi-vendor marketplace support
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#c8885b]">
                    verified
                  </span>
                  Real-time inventory synchronization
                </li>
              </ul>
              <a
                href="https://www.sellwhatumade.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full sm:w-auto bg-[#c8885b] text-white px-8 py-3 rounded-lg font-bold hover:brightness-110 transition-all text-center"
              >
                Visit SellWhatUMade
              </a>
            </div>

            {/* Right "” screenshot */}
            <div className="w-full lg:w-1/2 relative">
              <div className="relative z-10 lg:translate-x-12">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="E-commerce mobile app mockup"
                  className="rounded-3xl shadow-2xl border-4 border-white/10 w-full max-w-sm mx-auto lg:max-w-none"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIoCiCean--b11YwJOePRgozNFyEwsLmDYJy1CK-hhoF5Es1aWGUAidXIZK_9TilSDR1NK1zzM05XnCVFq03SvW6_WGwYG_HjmpPBNZU3eYBmERcbr6AZR6W827sCT4mA4yXWiKf0msxhskb7C3RBnhQKVwVIBtdHQCdDKOJMfLrcJt4SxiVqHRSAFlJYSoM1brRD2zc9ZBK5KlZBYCKBbyj97yKrAfg1RNP2DKx6vHxLXxc0pPyLr7jSVn5JhcDyjlRZhi2VR8tYd"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Tech Stack Marquee Strip                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-10 md:py-12 bg-white border-y border-outline-variant overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          <div className="flex items-center gap-10 md:gap-12 px-6">
            {TECH_STACK.map((tech, i) => (
              <span
                key={`a-${i}`}
                className="flex items-center gap-3 text-secondary font-bold text-body-md grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={tech.name} className="w-8 h-8" src={tech.src} />{" "}
                {tech.name}
              </span>
            ))}
          </div>
          {/* Duplicate for seamless infinite loop */}
          <div className="flex items-center gap-10 md:gap-12 px-6">
            {TECH_STACK.slice(0, 5).map((tech, i) => (
              <span
                key={`b-${i}`}
                className="flex items-center gap-3 text-secondary font-bold text-body-md grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img alt={tech.name} className="w-8 h-8" src={tech.src} />{" "}
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Testimonials                                                        */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 md:py-24 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="font-h2 text-h2-mobile lg:text-h2 text-primary">
            Voices of Satisfaction
          </h2>
          <p className="text-secondary mt-4 text-body-md">
            What our clients have to say about working with us.
          </p>
        </div>
        {/* 1-col mobile â†’ 3-col md+ */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white p-6 md:p-8 rounded-2xl border border-outline-variant shadow-sm flex flex-col justify-between transition-all hover:shadow-md"
            >
              <div>
                <div className="flex text-[#FFB800] mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="material-symbols-outlined fill-1">
                      star
                    </span>
                  ))}
                </div>
                <div className="mb-6 italic text-on-surface-variant text-body-md">
                  &ldquo;{t.quote}&rdquo;
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-container shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    alt={t.name}
                    className="w-full h-full object-cover"
                    src={t.avatar}
                  />
                </div>
                <div>
                  <div className="font-bold text-primary">{t.name}</div>
                  <div className="text-xs text-secondary">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* CTA Banner                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-16 md:mb-24">
        <div className="bg-electric-blue rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6 md:space-y-8">
            <h2 className="font-h1 text-h2-mobile lg:text-h2 mb-4">
              Ready to build something great?
            </h2>
            <p className="text-white/80 text-body-md md:text-body-lg max-w-2xl mx-auto">
              Whether you have a fully-fledged RFP or just an idea on a napkin,
              our team is ready to help you navigate the journey.
            </p>
            {/* Full-width stacked on mobile, inline on sm+ */}
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto bg-white text-electric-blue px-8 md:px-10 py-4 rounded-xl font-bold text-body-md md:text-body-lg shadow-xl hover:bg-white/90 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">mail</span>
                Send an Inquiry
              </Link>
              <a href="https://wa.me/916265004675" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-[#25D366] text-white px-8 md:px-10 py-4 rounded-xl font-bold text-body-md md:text-body-lg shadow-xl hover:brightness-105 transition-all flex items-center justify-center gap-3">
                <span className="material-symbols-outlined">chat</span>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Abstract grid pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  height="40"
                  id="grid"
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
              <rect fill="url(#grid)" height="100%" width="100%" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}

