'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';

const brandOptions = [
  'Living Spiral Studio, LLC',
  'Chart-Ed Institute for Global Data Literacy',
  'Chart-Ed Learning',
  'Living Spiral Education',
];

const inquiryOptions = [
  'Billing or Stripe charge question',
  'Product access or account support',
  'District, school, or partnership inquiry',
  'General company or brand question',
];

function buildMailtoBody(values: {
  name: string;
  email: string;
  phone: string;
  brand: string;
  inquiryType: string;
  message: string;
  wantsSms: boolean;
}) {
  return [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || 'Not provided'}`,
    `Brand: ${values.brand}`,
    `Inquiry type: ${values.inquiryType}`,
    `SMS consent provided: ${values.wantsSms ? 'Yes' : 'No'}`,
    '',
    'Message:',
    values.message,
  ].join('\n');
}

export function ContactInquiryForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [brand, setBrand] = useState(brandOptions[0]);
  const [inquiryType, setInquiryType] = useState(inquiryOptions[0]);
  const [message, setMessage] = useState('');
  const [wantsSms, setWantsSms] = useState(false);
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (wantsSms && phone.trim().length === 0) {
      setError('A mobile number is required when requesting SMS follow-up.');
      return;
    }

    setError('');

    const subject = encodeURIComponent(`Website inquiry: ${brand}`);
    const body = encodeURIComponent(
      buildMailtoBody({
        name,
        email,
        phone,
        brand,
        inquiryType,
        message,
        wantsSms,
      }),
    );

    window.location.href = `mailto:support@livingspiralstudio.com?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[2rem] border border-stone-200 bg-white/95 p-8 shadow-[0_20px_60px_rgba(41,37,36,0.08)]"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-800">
          Inquiry form
        </p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
          Send support details and choose whether SMS follow-up is okay.
        </h2>
        <p className="mt-4 text-base leading-7 text-stone-700">
          This form opens your email client and prepares your message to{' '}
          <span className="font-semibold text-stone-950">support@livingspiralstudio.com</span>. If
          you want text follow-up, provide a mobile number and actively check the SMS consent box.
        </p>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <label className="space-y-2">
          <span className="text-sm font-semibold text-stone-900">Full name</span>
          <input
            required
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-emerald-700 focus:bg-white"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-stone-900">Email address</span>
          <input
            required
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-emerald-700 focus:bg-white"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-stone-900">Mobile number</span>
          <input
            type="tel"
            inputMode="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="+1 (555) 555-5555"
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-emerald-700 focus:bg-white"
          />
        </label>

        <label className="space-y-2">
          <span className="text-sm font-semibold text-stone-900">Brand</span>
          <select
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-emerald-700 focus:bg-white"
          >
            {brandOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-stone-900">Inquiry type</span>
          <select
            value={inquiryType}
            onChange={(event) => setInquiryType(event.target.value)}
            className="w-full rounded-2xl border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-emerald-700 focus:bg-white"
          >
            {inquiryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 md:col-span-2">
          <span className="text-sm font-semibold text-stone-900">Message</span>
          <textarea
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            rows={6}
            className="w-full rounded-[1.5rem] border border-stone-300 bg-stone-50 px-4 py-3 text-base text-stone-900 outline-none transition focus:border-emerald-700 focus:bg-white"
          />
        </label>
      </div>

      <div className="mt-6 rounded-[1.5rem] border border-emerald-900/15 bg-emerald-50 p-5">
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            checked={wantsSms}
            onChange={(event) => setWantsSms(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-stone-400 text-emerald-800 focus:ring-emerald-700"
          />
          <span className="text-sm leading-7 text-stone-700">
            I agree to receive customer care text messages from Living Spiral Studio, LLC about my
            inquiry, account, order, scheduling, or requested educational support. Message frequency
            varies. Msg &amp; data rates may apply. Reply STOP to opt out and HELP for help. Consent
            is not a condition of purchase.
          </span>
        </label>
        <p className="mt-3 text-sm leading-7 text-stone-600">
          Review our <Link href="/privacy" className="font-semibold text-emerald-800 hover:text-emerald-600">Privacy Policy</Link>,{' '}
          <Link href="/terms" className="font-semibold text-emerald-800 hover:text-emerald-600">Terms of Use</Link>, and{' '}
          <Link href="/sms-consent" className="font-semibold text-emerald-800 hover:text-emerald-600">SMS consent details</Link>.
        </p>
      </div>

      {error ? (
        <p className="mt-4 text-sm font-medium text-red-700">{error}</p>
      ) : null}

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Open prepared email
        </button>
        <p className="text-sm leading-7 text-stone-600">
          If SMS follow-up is requested, the checkbox state and mobile number are included in the
          message sent to support.
        </p>
      </div>
    </form>
  );
}
