'use client';

import { useState, useRef, type FormEvent } from 'react';
import Link from 'next/link';

const PERKS = [
  {
    icon: 'psychology',
    title: 'Growth Culture',
    desc: 'Continuous learning opportunities through mentorship and structured training programs.',
  },
  {
    icon: 'diversity_3',
    title: 'Inclusive Team',
    desc: 'A diverse and collaborative workplace where every voice is heard and respected.',
  },
  {
    icon: 'workspace_premium',
    title: 'Top Projects',
    desc: 'Work on high-impact projects for global enterprise clients using cutting-edge tech stacks.',
  },
  {
    icon: 'balance',
    title: 'Work-Life Balance',
    desc: 'Flexible working hours and remote options to ensure you stay productive and refreshed.',
  },
];

const DEPARTMENTS = ['Engineering', 'Operations', 'Sales & Marketing', 'Creative'];
const JOB_TYPES = ['Full-time', 'Contract', 'Internship'];

const JOBS = [
  {
    title: 'Full-Stack Developer (Node / Java / Python / ERPNext / Next.js)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    title: 'App Developer (Flutter / React Native)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote',
  },
  {
    title: 'Senior Flutter Developer',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Remote / Pune',
  },
  {
    title: 'Full-Stack Engineer (Node/React)',
    department: 'Engineering',
    type: 'Full-time',
    location: 'Hybrid / Bangalore',
  },
  {
    title: 'BPO Operations Lead',
    department: 'Operations',
    type: 'Full-time',
    location: 'On-site / Mumbai',
  },
  {
    title: 'UI/UX Designer',
    department: 'Creative',
    type: 'Contract',
    location: 'Remote',
  },
];

const OPEN_POSITIONS = JOBS.map((j) => j.title).concat(['Other']);

export default function CareersClient() {
  // ── Filter state ──────────────────────────────────────────────────────────
  const [selectedDepts, setSelectedDepts] = useState<Set<string>>(new Set());
  const [selectedType, setSelectedType] = useState<string>('');

  const toggleDept = (dept: string) => {
    setSelectedDepts((prev) => {
      const next = new Set(prev);
      next.has(dept) ? next.delete(dept) : next.add(dept);
      return next;
    });
  };

  const resetFilters = () => {
    setSelectedDepts(new Set());
    setSelectedType('');
  };

  const filteredJobs = JOBS.filter((job) => {
    const deptMatch = selectedDepts.size === 0 || selectedDepts.has(job.department);
    const typeMatch = !selectedType || job.type === selectedType;
    return deptMatch && typeMatch;
  });

  // ── Form state ────────────────────────────────────────────────────────────
  const [applyPosition, setApplyPosition] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleApplyNow = (jobTitle: string) => {
    setApplyPosition(jobTitle);
    document.getElementById('apply-now')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);

    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch('/api/apply', { method: 'POST', body: data });
      if (!res.ok) throw new Error('failed');
      setSubmitted(true);
      formRef.current?.reset();
      setApplyPosition('');
    } catch {
      setFormError(
        'Something went wrong. Please try again or email us at siddhyatechnology@gmail.com',
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative bg-primary-container py-24 md:py-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-l from-electric-blue to-transparent" />
        </div>
        <div className="relative z-10 max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop text-center">
          <h1 className="font-h1 text-h1-mobile md:text-h1 text-surface-container-lowest mb-6 leading-tight">
            Join Siddhya Technology
          </h1>
          <p className="font-body-lg text-body-lg text-surface-container-lowest/80 max-w-2xl mx-auto mb-10">
            Be part of a visionary team building the next generation of enterprise solutions. We
            value innovation, collaboration, and continuous growth.
          </p>
          <a
            href="#open-positions"
            className="inline-flex items-center gap-2 bg-electric-blue text-surface-container-lowest px-8 py-4 rounded-lg font-bold text-lg hover:brightness-110 transition-all"
          >
            See Open Positions
            <span className="material-symbols-outlined">arrow_downward</span>
          </a>
        </div>
      </section>

      {/* ── Why Work With Us ─────────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 bg-surface">
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-4">
              Why Work With Us?
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
              We provide an environment where your talents are nurtured and your contributions make
              a global impact.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-gutter">
            {PERKS.map((perk) => (
              <div
                key={perk.title}
                className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/30 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-primary-container/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-container transition-colors duration-300">
                  <span className="material-symbols-outlined text-primary group-hover:text-surface-container-lowest text-3xl transition-colors duration-300">
                    {perk.icon}
                  </span>
                </div>
                <h4 className="font-h4 text-h4 text-primary mb-3">{perk.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Open Positions ───────────────────────────────────────────────────── */}
      <section
        id="open-positions"
        className="py-20 md:py-24 bg-surface-container-low scroll-mt-navbar-height"
      >
        <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="flex flex-col md:flex-row gap-gutter">
            {/* Filter Sidebar */}
            <aside className="w-full md:w-1/4 shrink-0">
              <div className="md:sticky md:top-24 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30">
                <h3 className="font-h3 text-h3 text-primary mb-6">Filter Jobs</h3>

                {/* Department */}
                <div className="mb-8">
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-wide">
                    Department
                  </p>
                  <div className="space-y-3">
                    {DEPARTMENTS.map((dept) => (
                      <label key={dept} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="checkbox"
                          checked={selectedDepts.has(dept)}
                          onChange={() => toggleDept(dept)}
                          className="w-5 h-5 rounded border-outline-variant accent-primary focus:ring-primary"
                        />
                        <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                          {dept}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Job Type */}
                <div className="mb-8">
                  <p className="font-label-sm text-label-sm text-on-surface-variant mb-3 uppercase tracking-wide">
                    Job Type
                  </p>
                  <div className="space-y-3">
                    {JOB_TYPES.map((type) => (
                      <label key={type} className="flex items-center gap-3 cursor-pointer group">
                        <input
                          type="radio"
                          name="jobtype"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(type)}
                          className="w-5 h-5 border-outline-variant accent-primary focus:ring-primary"
                        />
                        <span className="font-body-md text-body-md text-on-surface group-hover:text-primary transition-colors">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="w-full border-2 border-primary text-primary py-2 rounded-lg font-semibold hover:bg-primary-container/10 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </aside>

            {/* Job Listings */}
            <div className="w-full md:w-3/4 space-y-4">
              {filteredJobs.length === 0 ? (
                <div className="bg-surface-container-lowest p-10 rounded-xl border border-outline-variant/30 text-center text-on-surface-variant">
                  <span className="material-symbols-outlined text-4xl mb-3 block">
                    search_off
                  </span>
                  No positions match the selected filters.
                </div>
              ) : (
                filteredJobs.map((job) => (
                  <div
                    key={job.title}
                    className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:-translate-y-0.5 hover:shadow-[0px_4px_12px_rgba(26,43,95,0.08)] transition-all duration-300"
                  >
                    <div>
                      <h4 className="font-h4 text-h4 text-primary mb-2">{job.title}</h4>
                      <div className="flex flex-wrap gap-4 text-on-surface-variant">
                        <span className="flex items-center gap-1.5 font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-lg leading-none">
                            business_center
                          </span>
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1.5 font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-lg leading-none">
                            schedule
                          </span>
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1.5 font-label-sm text-label-sm">
                          <span className="material-symbols-outlined text-lg leading-none">
                            location_on
                          </span>
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleApplyNow(job.title)}
                      className="inline-flex items-center justify-center bg-primary text-surface-container-lowest px-6 py-2.5 rounded-lg font-semibold whitespace-nowrap hover:bg-primary/90 transition-colors text-center shrink-0"
                    >
                      Apply Now
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Application Form ───────────────────────────────────────────── */}
      <section
        id="apply-now"
        className="py-20 md:py-24 bg-surface scroll-mt-navbar-height"
      >
        <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop">
          <div className="bg-surface-container-lowest p-6 md:p-10 rounded-2xl shadow-xl border border-outline-variant/20">
            <div className="text-center mb-10 md:mb-12">
              <h2 className="font-h2 text-h2-mobile md:text-h2 text-primary mb-3">
                Quick Application
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Upload your credentials and our recruitment team will get in touch with you shortly.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <span className="material-symbols-outlined text-6xl text-electric-blue">
                  check_circle
                </span>
                <h3 className="font-h3 text-h3 text-primary">Application Submitted!</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                  Thank you for applying. We&apos;ve received your application and will be in touch
                  soon.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-primary font-semibold underline underline-offset-2"
                >
                  Submit another application
                </button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-8" onSubmit={handleSubmit}>
                {/* Row 1: Name + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-2">
                    <label
                      htmlFor="fullName"
                      className="block font-label-sm text-label-sm text-primary"
                    >
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body-md text-body-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block font-label-sm text-label-sm text-primary"
                    >
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body-md text-body-md"
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Position */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="block font-label-sm text-label-sm text-primary"
                    >
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body-md text-body-md"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="position"
                      className="block font-label-sm text-label-sm text-primary"
                    >
                      Position Applying For <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="position"
                      name="position"
                      required
                      value={applyPosition}
                      onChange={(e) => setApplyPosition(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all bg-white font-body-md text-body-md text-on-surface"
                    >
                      <option value="" disabled>
                        Select a position
                      </option>
                      {OPEN_POSITIONS.map((pos) => (
                        <option key={pos} value={pos}>
                          {pos}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Cover Note */}
                <div className="space-y-2">
                  <label
                    htmlFor="coverNote"
                    className="block font-label-sm text-label-sm text-primary"
                  >
                    Cover Note
                  </label>
                  <textarea
                    id="coverNote"
                    name="coverNote"
                    rows={4}
                    placeholder="Tell us why you'd be a great fit for this role..."
                    className="w-full px-4 py-3 rounded-lg border border-outline-variant focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none font-body-md text-body-md"
                  />
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <p className="font-label-sm text-label-sm text-primary">Upload Resume / CV</p>
                  <label
                    htmlFor="resume"
                    className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-outline-variant rounded-xl p-8 md:p-10 text-center hover:border-primary hover:bg-surface-container-low transition-all duration-300 cursor-pointer group"
                  >
                    <span className="material-symbols-outlined text-4xl text-on-surface-variant group-hover:text-primary transition-colors">
                      upload_file
                    </span>
                    <span className="font-body-md text-body-md text-on-surface-variant">
                      Drag &amp; drop your resume here, or{' '}
                      <span className="text-primary font-semibold">browse files</span>
                    </span>
                    <span className="font-label-sm text-label-sm text-outline">
                      PDF, DOC, DOCX &mdash; up to 5 MB
                    </span>
                    <input
                      id="resume"
                      name="resume"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="sr-only"
                    />
                  </label>
                </div>

                {/* Error message */}
                {formError && (
                  <p className="text-red-600 font-body-md text-body-md text-center">{formError}</p>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-surface-container-lowest py-4 rounded-lg font-bold text-body-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Submitting…
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">send</span>
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────────────────── */}
      <section className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop mb-24">
        <div className="bg-primary-container rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="careers-grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#careers-grid)" />
            </svg>
          </div>
          <div className="relative z-10 space-y-6">
            <h2 className="font-h2 text-h2-mobile md:text-h2 text-surface-container-lowest">
              Don&apos;t see the right role?
            </h2>
            <p className="font-body-lg text-body-lg text-surface-container-lowest/80 max-w-xl mx-auto">
              We&apos;re always on the lookout for exceptional talent. Send us your profile and
              we&apos;ll reach out when the perfect match opens up.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-electric-blue text-white px-8 py-3.5 rounded-lg font-bold text-body-md hover:brightness-110 transition-all"
              >
                <span className="material-symbols-outlined">mail</span>
                Get in Touch
              </Link>
              <a
                href="#apply-now"
                className="inline-flex items-center gap-2 border-2 border-surface-container-lowest text-surface-container-lowest px-8 py-3.5 rounded-lg font-bold text-body-md hover:bg-surface-container-lowest/10 transition-colors"
              >
                <span className="material-symbols-outlined">edit_document</span>
                Submit Open Application
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
