'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
        {/* Name */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block">
            Name
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all"
            placeholder="John Doe"
            type="text"
            required
          />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block">
            Company
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all"
            placeholder="Acme Inc."
            type="text"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block">
            Email
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all"
            placeholder="john@example.com"
            type="email"
            required
          />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block">
            Phone
          </label>
          <input
            className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all"
            placeholder="+91 6265004675"
            type="tel"
          />
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block">
            Service
          </label>
          <select className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all appearance-none cursor-pointer">
            <option>Software Development</option>
            <option>Cloud Consulting</option>
            <option>Product Design</option>
            <option>AI &amp; Machine Learning</option>
            <option>Managed IT Services</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block">
            Budget Range
          </label>
          <select className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all appearance-none cursor-pointer">
            <option>$5,000 – $10,000</option>
            <option>$10,000 – $25,000</option>
            <option>$25,000 – $50,000</option>
            <option>$50,000+</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant block">
          Project Description
        </label>
        <textarea
          className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all resize-none"
          placeholder="Briefly describe your goals and requirements..."
          rows={4}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitting || submitted}
        className="w-full md:w-auto px-12 py-4 bg-electric-blue text-white font-bold rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitting ? (
          <>
            <span className="material-symbols-outlined animate-spin" style={{ fontSize: '20px' }}>
              autorenew
            </span>
            <span>Sending…</span>
          </>
        ) : submitted ? (
          <>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>check_circle</span>
            <span>Inquiry Sent!</span>
          </>
        ) : (
          <>
            <span>Send Inquiry</span>
            <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>send</span>
          </>
        )}
      </button>
    </form>
  );
}
