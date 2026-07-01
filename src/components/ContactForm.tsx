'use client';

import { useEffect, useState } from 'react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (status !== 'success') return;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setStatus('idle');
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [status]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name') as string,
      company: fd.get('company') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      service: fd.get('service') as string,
      budget: fd.get('budget') as string,
      message: fd.get('message') as string,
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Something went wrong');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong');
      setStatus('error');
    }
  }

  const inputCls =
    'w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface font-body-md text-body-md focus:border-electric-blue focus:outline-none focus:ring-2 focus:ring-electric-blue/10 transition-all';

  return (
    <>
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
        {/* Name */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="cf-name">
            Name
          </label>
          <input id="cf-name" name="name" className={inputCls} placeholder="John Doe" type="text" required />
        </div>

        {/* Company */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="cf-company">
            Company
          </label>
          <input id="cf-company" name="company" className={inputCls} placeholder="Acme Inc." type="text" />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="cf-email">
            Email
          </label>
          <input id="cf-email" name="email" className={inputCls} placeholder="john@example.com" type="email" required />
        </div>

        {/* Phone */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="cf-phone">
            Phone
          </label>
          <input id="cf-phone" name="phone" className={inputCls} placeholder="+91 6265004675" type="tel" />
        </div>

        {/* Service */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="cf-service">
            Service
          </label>
          <select id="cf-service" name="service" className={`${inputCls} appearance-none cursor-pointer`}>
            <option>Software Development</option>
            <option>Cloud Consulting</option>
            <option>Product Design</option>
            <option>AI &amp; Machine Learning</option>
            <option>Managed IT Services</option>
          </select>
        </div>

        {/* Budget */}
        <div className="space-y-2">
          <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="cf-budget">
            Budget Range
          </label>
          <select id="cf-budget" name="budget" className={`${inputCls} appearance-none cursor-pointer`}>
            <option>$5,000 – $10,000</option>
            <option>$10,000 – $25,000</option>
            <option>$25,000 – $50,000</option>
            <option>$50,000+</option>
          </select>
        </div>
      </div>

      {/* Project Description */}
      <div className="space-y-2">
        <label className="font-label-sm text-label-sm text-on-surface-variant block" htmlFor="cf-message">
          Project Description
        </label>
        <textarea
          id="cf-message"
          name="message"
          className={`${inputCls} resize-none`}
          placeholder="Briefly describe your goals and requirements..."
          rows={4}
        />
      </div>

      {/* Error banner */}
      {status === 'error' && (
        <p className="text-red-600 text-sm font-medium">{errorMsg}</p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className="w-full md:w-auto px-12 py-4 bg-electric-blue text-white font-bold rounded-lg hover:shadow-lg transition-all hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? (
          <>
            <span className="material-symbols-outlined animate-spin" style={{ fontSize: '20px' }}>autorenew</span>
            <span>Sending…</span>
          </>
        ) : status === 'success' ? (
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

    {status === 'success' && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="thank-you-title"
      >
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setStatus('idle')}
        />
        <div className="relative bg-surface-container-lowest rounded-2xl shadow-2xl max-w-md w-full p-8 text-center space-y-4">
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors"
            aria-label="Close"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <span className="material-symbols-outlined text-6xl text-electric-blue">
            check_circle
          </span>
          <h3 id="thank-you-title" className="font-h3 text-h3 text-primary">
            Thank You!
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Your inquiry has been received. Our team will get back to you within 4 hours.
          </p>
          <button
            type="button"
            onClick={() => setStatus('idle')}
            className="mt-2 inline-flex items-center justify-center bg-electric-blue text-white font-bold px-8 py-3 rounded-lg hover:brightness-110 transition-all"
          >
            Close
          </button>
        </div>
      </div>
    )}
    </>
  );
}
