"use client";

import { useEffect, useState } from "react";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  CheckCircleIcon,
  ClipboardDocumentIcon,
  ClockIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export type AssessmentAsset = {
  name: string;
  description: string;
  href: string;
  preview?: string;
  external?: boolean;
  actionLabel?: string;
};

export type AssessmentConfig = {
  id: string;
  product: string;
  canvas: string;
  fonts: Array<{ name: string; role: string; sample: string }>;
  focus: string;
  directions: string;
  target: {
    src: string;
    download: string;
    alt: string;
    aspectClass: string;
  };
  copy: Array<{ label: string; text: string }>;
  assets: AssessmentAsset[];
  checklist: string[];
  accent: string;
};

function copyText(text: string) {
  if (navigator.clipboard?.writeText) return navigator.clipboard.writeText(text);

  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.setAttribute("readonly", "");
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return Promise.resolve();
}

export default function AssessmentWorkspace({ config }: { config: AssessmentConfig }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    if (!lightboxOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxOpen]);

  const handleCopy = async (label: string, text: string) => {
    await copyText(text);
    setCopied(label);
    window.setTimeout(() => setCopied(null), 1600);
  };

  return (
    <main className="min-h-screen bg-[#f6f8fb] text-[#132844]">
      <a
        href="#brief"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:shadow-lg"
      >
        Skip to assessment
      </a>

      <header className="sticky top-0 z-40 border-b border-[#dce3ed] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <Link
              href="/assessment-set-1"
              className="hidden font-bold text-[#53647b] hover:text-[#0d376d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b632] sm:inline"
            >
              Set 1
            </Link>
            <span
              className="shrink-0 rounded-md px-3 py-2 text-sm font-black text-white"
              style={{ backgroundColor: config.accent }}
            >
              {config.id}
            </span>
            <span className="truncate text-sm font-extrabold text-[#193457] sm:text-base">
              {config.product}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-sm font-bold text-[#53647b]">
            <ClockIcon className="h-5 w-5" aria-hidden="true" />
            20 minutes
          </div>
        </div>
      </header>

      <section id="brief" className="border-b border-[#dce3ed] bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 lg:grid-cols-[0.82fr_1.18fr] lg:px-8 lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-black uppercase text-[#63738a]">Visual Replication</p>
            <h1 className="text-4xl font-black text-[#0d294d] md:text-5xl">{config.product}</h1>
            <p className="mt-4 max-w-xl text-lg leading-8 text-[#42556f]">{config.focus}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <p className="rounded-md border border-[#c7d2e0] bg-[#f4f7fa] px-4 py-2 text-sm font-black text-[#193457]">
                Slide size: {config.canvas}
              </p>
            </div>
            <div className="mt-7 border-l-4 border-[#f2b632] pl-5 text-base font-semibold leading-7 text-[#263d5d]">
              {config.directions}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={config.target.download}
                download
                className="inline-flex items-center gap-2 rounded-md border border-[#bdc9d8] bg-white px-5 py-3 font-extrabold text-[#193457] transition hover:bg-[#eef3f8] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b632]"
              >
                <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                Download target
              </a>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative mx-auto w-full max-w-3xl overflow-hidden rounded-md border border-[#cdd6e2] bg-[#e9eef4] shadow-lg outline-none focus-visible:ring-4 focus-visible:ring-[#f2b632]"
            aria-label="Enlarge target visual"
          >
            <div className={`relative w-full ${config.target.aspectClass}`}>
              <img
                src={config.target.src}
                alt={config.target.alt}
                className="h-full w-full object-contain"
              />
            </div>
            <span className="absolute bottom-3 right-3 inline-flex items-center gap-2 rounded-md bg-[#0b2242]/90 px-3 py-2 text-sm font-bold text-white shadow">
              <MagnifyingGlassPlusIcon className="h-5 w-5" aria-hidden="true" />
              Enlarge
            </span>
          </button>
        </div>
      </section>

      <section className="border-b border-[#dce3ed] bg-[#f6f8fb]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-black uppercase text-[#63738a]">Use exactly</p>
                <h2 className="mt-1 text-3xl font-black text-[#0d294d]">Copy</h2>
              </div>
              <button
                type="button"
                onClick={() => handleCopy("all", config.copy.map((item) => item.text).join("\n"))}
                className="inline-flex items-center gap-2 rounded-md border border-[#bdc9d8] bg-white px-3 py-2 text-sm font-bold hover:bg-[#edf2f7] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b632]"
              >
                <ClipboardDocumentIcon className="h-5 w-5" aria-hidden="true" />
                {copied === "all" ? "Copied" : "Copy all"}
              </button>
            </div>
            <div className="divide-y divide-[#dce3ed] border-y border-[#dce3ed] bg-white">
              {config.copy.map((item) => (
                <div key={item.label} className="grid grid-cols-[6rem_1fr_auto] items-start gap-4 px-4 py-5">
                  <span className="text-sm font-black uppercase text-[#607087]">{item.label}</span>
                  <span className="whitespace-pre-line font-bold leading-7 text-[#193457]">{item.text}</span>
                  <button
                    type="button"
                    onClick={() => handleCopy(item.label, item.text)}
                    className="rounded-md p-2 text-[#53647b] hover:bg-[#edf2f7] hover:text-[#0d376d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b632]"
                    aria-label={`Copy ${item.label}`}
                    title={`Copy ${item.label}`}
                  >
                    {copied === item.label ? (
                      <CheckCircleIcon className="h-5 w-5" aria-hidden="true" />
                    ) : (
                      <ClipboardDocumentIcon className="h-5 w-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <p className="text-sm font-black uppercase text-[#63738a]">Type station</p>
              <h2 className="mt-1 text-3xl font-black text-[#0d294d]">Fonts</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {config.fonts.map((font) => (
                  <article key={font.name} className="rounded-md border border-[#ccd6e2] bg-white p-4 shadow-sm">
                    <p className="font-black text-[#193457]">{font.name}</p>
                    <p className="mt-1 text-sm font-semibold text-[#607087]">{font.role}</p>
                    <p className="mt-4 break-words text-xl font-black text-[#0d294d]">{font.sample}</p>
                  </article>
                ))}
              </div>
              <p className="mt-4 text-sm leading-6 text-[#607087]">
                Can&apos;t see one of these in Google Slides? Open the font menu and choose More fonts.
              </p>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase text-[#63738a]">Download individually</p>
            <h2 className="mt-1 text-3xl font-black text-[#0d294d]">Raw assets</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {config.assets.map((asset) => (
                <article key={asset.name} className="overflow-hidden rounded-md border border-[#ccd6e2] bg-white shadow-sm">
                  <div className="flex aspect-[16/10] items-center justify-center bg-[#edf1f5] p-5">
                    <img
                      src={asset.preview ?? asset.href}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-black text-[#193457]">{asset.name}</h3>
                    <p className="mt-1 text-sm leading-6 text-[#607087]">{asset.description}</p>
                    <a
                      href={asset.href}
                      {...(!asset.external ? { download: true } : {})}
                      target={asset.external ? "_blank" : undefined}
                      rel={asset.external ? "noreferrer" : undefined}
                      className="mt-4 inline-flex items-center gap-2 font-extrabold text-[#0d4f91] hover:text-[#082f5d] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#f2b632]"
                    >
                      {asset.external ? (
                        <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
                      ) : (
                        <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                      )}
                      {asset.actionLabel ?? "Download"}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0c2b53] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <p className="text-sm font-black uppercase text-[#9fc4ed]">Before submitting</p>
          <h2 className="mt-1 text-3xl font-black text-white">Final comparison</h2>
          <div className="mt-7 grid gap-x-10 gap-y-4 md:grid-cols-2">
            {config.checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 text-base font-semibold leading-7 text-[#e8f1fb]">
                <CheckCircleIcon className="mt-1 h-5 w-5 shrink-0 text-[#f2b632]" aria-hidden="true" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="mt-9 border-t border-white/20 pt-7 font-bold text-[#cfe0f3]">
            Submit your completed slide in Google Classroom.
          </p>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#06162c]/95 p-4 md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="Target visual preview"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setLightboxOpen(false);
          }}
        >
          <button
            type="button"
            onClick={() => setLightboxOpen(false)}
            className="absolute right-4 top-4 rounded-md bg-white p-3 text-[#10213f] shadow-lg hover:bg-[#eef2f7] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#f2b632]"
            aria-label="Close target preview"
          >
            <XMarkIcon className="h-7 w-7" aria-hidden="true" />
          </button>
          <img
            src={config.target.src}
            alt={config.target.alt}
            className="max-h-full max-w-full object-contain shadow-2xl"
          />
        </div>
      )}
    </main>
  );
}
