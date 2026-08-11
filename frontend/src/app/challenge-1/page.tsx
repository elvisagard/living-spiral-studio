"use client";

import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownTrayIcon,
  ArrowTopRightOnSquareIcon,
  ClipboardDocumentIcon,
  MagnifyingGlassPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const assetBase = "/assets/challenge-1";

type AssetItem = {
  name: string;
  description: string;
  href: string;
  preview?: string;
};

type AssetGroup = {
  title: string;
  items: AssetItem[];
};

const navItems = [
  { href: "#mission", label: "Mission" },
  { href: "#start", label: "Start" },
  { href: "#target", label: "Target" },
  { href: "#assets", label: "Assets" },
  { href: "#copy", label: "Copy" },
  { href: "#fonts", label: "Fonts" },
  { href: "#icons", label: "Icons" },
  { href: "#help", label: "Help" },
  { href: "#checkpoint", label: "Checkpoint" },
];

const assetGroups: AssetGroup[] = [
  {
    title: "Reference",
    items: [
      {
        name: "Approved flyer reference",
        description: "Use this to study the finished design.",
        href: `${assetBase}/reference-flyer.webp`,
      },
    ],
  },
  {
    title: "Raw Photos",
    items: [
      {
        name: "Main fair photo",
        description: "Students at the Spring Fair activity table.",
        href: `${assetBase}/main-fair-photo.png`,
        preview: `${assetBase}/main-fair-photo-preview.webp`,
      },
      {
        name: "Games photo",
        description: "Colorful fair game materials.",
        href: `${assetBase}/games-photo.png`,
        preview: `${assetBase}/games-photo-preview.webp`,
      },
      {
        name: "Food and treats photo",
        description: "Classic fair food on a table.",
        href: `${assetBase}/food-treats-photo.png`,
        preview: `${assetBase}/food-treats-photo-preview.webp`,
      },
    ],
  },
  {
    title: "School Identity",
    items: [
      {
        name: "School mascot",
        description: "Eagle logo for the school identity area.",
        href: `${assetBase}/school-mascot.png`,
        preview: `${assetBase}/school-mascot-preview.webp`,
      },
    ],
  },
  {
    title: "Brush Textures",
    items: [
      {
        name: "Brush texture 1",
        description: "Long painted texture for layered emphasis.",
        href: `${assetBase}/blue-brush.png`,
      },
      {
        name: "Brush texture 2",
        description: "Alternate long painted texture.",
        href: `${assetBase}/blue-brush-alt.png`,
      },
      {
        name: "Brush texture 3",
        description: "Long painted texture for the lower message area.",
        href: `${assetBase}/yellow-brush.png`,
      },
      {
        name: "Ring texture 1",
        description: "Circular brush texture for photo areas.",
        href: `${assetBase}/yellow-ring.png`,
      },
      {
        name: "Ring texture 2",
        description: "Alternate circular brush texture.",
        href: `${assetBase}/yellow-ring-alt.png`,
      },
    ],
  },
];

const copyBlocks = [
  {
    label: "Who",
    text: "YOU'RE INVITED!\nRIVERDALE MIDDLE SCHOOL",
  },
  {
    label: "What",
    text: "SPRING FAIR",
  },
  {
    label: "When",
    text: "SATURDAY\nMAY 17, 2025\n11:00 AM - 3:00 PM\nRAIN OR SHINE!",
  },
  {
    label: "Where",
    text: "RIVERDALE MIDDLE SCHOOL\n1234 WILLOW LANE\nRIVERDALE, ST 56789",
  },
];

const fonts = [
  {
    name: "Anton",
    role: "Major display typography",
    sample: "SPRING FAIR",
  },
  {
    name: "Oswald",
    role: "Headings, labels, and strong short messages",
    sample: "RIVERDALE MIDDLE SCHOOL",
  },
  {
    name: "Roboto Condensed",
    role: "Event information and supporting details",
    sample: "MAY 17, 2025",
  },
  {
    name: "Yellowtail",
    role: "Handwritten accent",
    sample: "We can't wait to see you there!",
  },
];

const hintTopics = [
  {
    title: "My slide is the wrong size",
    nudge: "The setting controls the page itself, not an individual object.",
    biggerHint: "Look through the File menu for page or document setup.",
    showMe: "Use File, then Page setup. The finished flyer should be 8.5 x 11 inches, portrait.",
  },
  {
    title: "I can't make my picture a circle",
    nudge: "Select the image and inspect the image tools.",
    biggerHint: "The Crop control has more than one option.",
    showMe: "Use Mask image, then Shapes, then Oval.",
  },
  {
    title: "Something is behind something that should be in front",
    nudge: "Objects can exist at different depths.",
    biggerHint: "Look for commands related to order or arrangement.",
    showMe: "Use Arrange, then Order, then the forward or backward controls.",
  },
  {
    title: "I can't line objects up perfectly",
    nudge: "Do not rely only on your eyes.",
    biggerHint: "Slides has alignment tools.",
    showMe: "Select the objects, then investigate the Align controls.",
  },
  {
    title: "My repeated objects are not evenly spaced",
    nudge: "Slides can calculate equal spacing.",
    biggerHint: "Select multiple objects and investigate Arrange.",
    showMe: "Use Distribute after selecting the objects that should be spaced evenly.",
  },
  {
    title: "I want several objects to move together",
    nudge: "Related objects can act like one object.",
    biggerHint: "Select all related objects first.",
    showMe: "Use Group after selecting the objects that belong together.",
  },
  {
    title: "I need another identical object",
    nudge: "You do not need to rebuild it.",
    biggerHint: "Look for duplicate or copy commands.",
    showMe: "Use Duplicate, or copy and paste the object.",
  },
  {
    title: "I can't find the font",
    nudge: "The visible font list is not the complete library.",
    biggerHint: "Look near the top of the font menu.",
    showMe: "Open the font menu and choose More fonts.",
  },
  {
    title: "I need the exact color from the reference",
    nudge: "Study the reference closely and compare your object to it.",
    biggerHint: "Look for a tool or method that samples a color from something on screen.",
    showMe: "Use the color picker or sampling tools available in your browser, device, or Slides workflow.",
  },
  {
    title: "I want text with a white outline",
    nudge: "A normal text box is not the only way to add large display text.",
    biggerHint: "Investigate Word art.",
    showMe: "Use Word art, then adjust the border and fill controls.",
  },
  {
    title: "I want a shadow behind text",
    nudge: "Select the object and look for formatting controls beyond the toolbar.",
    biggerHint: "Investigate Format options.",
    showMe: "Open Format options and explore the shadow controls.",
  },
  {
    title: "I need an icon",
    nudge: "The icons are not in the asset pack.",
    biggerHint: "Use the Icon Library section on this page.",
    showMe: "Open Google Fonts Icons, study the reference, and search for the symbol you need.",
  },
];

function copyWithFallback(text: string) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(text);
  }

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

export default function ChallengeOnePage() {
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const assetCount = useMemo(
    () => assetGroups.reduce((count, group) => count + group.items.length, 0),
    [],
  );

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightboxOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxOpen]);

  const handleCopy = async (label: string, text: string) => {
    await copyWithFallback(text);
    setCopiedLabel(label);
    window.setTimeout(() => setCopiedLabel(null), 1800);
  };

  return (
    <main className="min-h-screen scroll-smooth bg-[#f7f8fb] text-[#10213f]">
      <a
        href="#mission"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-4 focus:py-3 focus:font-semibold focus:text-[#10213f] focus:shadow"
      >
        Skip to content
      </a>

      <nav className="sticky top-0 z-40 border-b border-[#d7deea] bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 overflow-x-auto px-4 py-3 lg:px-8">
          <span className="shrink-0 rounded-md bg-[#082b63] px-3 py-2 text-sm font-extrabold uppercase tracking-wide text-white">
            Challenge 1
          </span>
          <div className="flex gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 rounded-md px-3 py-2 text-sm font-bold text-[#233754] outline-none transition hover:bg-[#eef3fb] focus-visible:ring-2 focus-visible:ring-[#f1aa20]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <section
        id="mission"
        className="scroll-mt-24 border-b border-[#dfe5ef] bg-[linear-gradient(135deg,_#ffffff_0%,_#f7fbff_56%,_#eef4ff_100%)]"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-[1fr_0.8fr] lg:px-8 lg:py-16">
          <div className="space-y-7">
            <div className="inline-flex rounded-md bg-[#f1aa20] px-4 py-2 text-sm font-black uppercase tracking-wide text-[#082b63]">
              Flyer Challenge 01
            </div>
            <div>
              <h1 className="max-w-4xl text-4xl font-black tracking-tight text-[#061d45] md:text-6xl">
                You're the Production Designer.
              </h1>
              <p className="mt-5 max-w-2xl text-lg font-medium leading-8 text-[#41516b]">
                Riverdale Middle School is preparing for its Spring Fair. The flyer design has already
                been approved, but it needs to be rebuilt for production.
              </p>
              <p className="mt-4 max-w-2xl text-xl font-extrabold leading-8 text-[#0b326d]">
                Your job: recreate the approved flyer in Google Slides as accurately as you can.
              </p>
            </div>
          </div>

          <aside className="self-start rounded-lg border border-[#ccd7e8] bg-white p-6 shadow-sm">
            <p className="text-sm font-black uppercase tracking-wide text-[#0b326d]">Today's Destination</p>
            <h2 className="mt-2 text-3xl font-black text-[#061d45]">CONTROL</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 text-center text-sm font-black md:grid-cols-4">
              <span className="rounded-md bg-[#082b63] px-3 py-3 text-white">BUILD</span>
              <span className="rounded-md bg-[#0d63bf] px-3 py-3 text-white">CONTROL</span>
              <span className="rounded-md border border-[#c9d3e2] bg-[#f5f7fb] px-3 py-3 text-[#738099]">
                DESIGN
              </span>
              <span className="rounded-md border border-[#c9d3e2] bg-[#f5f7fb] px-3 py-3 text-[#738099]">
                TRANSFER
              </span>
            </div>
            <p className="mt-5 text-base font-semibold leading-7 text-[#41516b]">
              Today you can achieve BUILD and CONTROL. DESIGN and TRANSFER are future challenges.
              You may work at your own pace.
            </p>
          </aside>
        </div>
      </section>

      <section id="start" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading eyebrow="Start Here" title="Three steps. Then go." />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ["1", "Open Google Slides", "Create a new blank presentation."],
              ["2", "Set your page", "The finished flyer must be 8.5 x 11 inches, portrait."],
              [
                "3",
                "Study the target",
                "Decide what appears to be text, images, shapes, layers, and repeated elements.",
              ],
            ].map(([number, title, body]) => (
              <article key={number} className="rounded-lg border border-[#d7deea] bg-[#f8fafd] p-5">
                <p className="flex h-9 w-9 items-center justify-center rounded-full bg-[#082b63] text-sm font-black text-white">
                  {number}
                </p>
                <h3 className="mt-4 text-xl font-black text-[#061d45]">{title}</h3>
                <p className="mt-2 text-base font-medium leading-7 text-[#4b5a72]">{body}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 rounded-lg bg-[#f1aa20] px-6 py-5 text-center text-4xl font-black uppercase tracking-wide text-[#082b63]">
            Go!
          </p>
        </div>
      </section>

      <section id="target" className="scroll-mt-24 border-y border-[#dfe5ef] bg-[#eef3f9]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 lg:grid-cols-[0.72fr_1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="The Target" title="This is what you're rebuilding." />
            <p className="mt-4 text-base font-medium leading-8 text-[#41516b]">
              Look closely. What appears to be an image? What could be a shape? What is text? What
              overlaps something else? What seems to repeat?
            </p>
          </div>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative overflow-hidden rounded-lg border border-[#c8d4e5] bg-white p-3 text-left shadow-sm outline-none transition hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-4 focus-visible:ring-[#f1aa20]"
            aria-label="Open a larger view of the approved Spring Fair flyer"
          >
            <img
              src={`${assetBase}/reference-flyer.webp`}
              alt="Approved Spring Fair flyer reference for Riverdale Middle School."
              className="mx-auto aspect-[8.5/11] max-h-[760px] w-full object-contain"
            />
            <span className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-md bg-white/95 px-3 py-2 text-sm font-black text-[#082b63] shadow">
              <MagnifyingGlassPlusIcon className="h-5 w-5" aria-hidden="true" />
              Enlarge
            </span>
          </button>
        </div>
      </section>

      <section id="assets" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading eyebrow="Asset Station" title="Your production materials" />
          <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-[#41516b]">
            Download the raw materials you need. Icons are not included here; use the Icon Library
            section when you reach that part of the flyer.
          </p>
          <p className="mt-3 text-sm font-bold uppercase tracking-wide text-[#667895]">
            {assetCount} downloadable files
          </p>
          <div className="mt-8 space-y-8">
            {assetGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-2xl font-black text-[#061d45]">{group.title}</h3>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map((asset) => (
                    <article
                      key={asset.href}
                      className="flex min-h-full flex-col overflow-hidden rounded-lg border border-[#d7deea] bg-[#f8fafd]"
                    >
                      <div className="flex h-44 items-center justify-center bg-white p-3">
                        <img
                          src={asset.preview ?? asset.href}
                          alt=""
                          loading="lazy"
                          className="max-h-full w-full object-contain"
                        />
                      </div>
                      <div className="flex flex-1 flex-col p-5">
                        <h4 className="text-lg font-black text-[#061d45]">{asset.name}</h4>
                        <p className="mt-2 flex-1 text-sm font-medium leading-6 text-[#4b5a72]">
                          {asset.description}
                        </p>
                        <a
                          href={asset.href}
                          download
                          className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-[#082b63] px-4 py-3 text-sm font-black text-white outline-none transition hover:bg-[#0d63bf] focus-visible:ring-4 focus-visible:ring-[#f1aa20]"
                        >
                          <ArrowDownTrayIcon className="h-5 w-5" aria-hidden="true" />
                          Download
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="copy" className="scroll-mt-24 border-y border-[#dfe5ef] bg-[#f8fafd]">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading eyebrow="Copy Desk" title="Use this essential event text." />
          <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-[#41516b]">
            This gives you the most important what, when, where, and who information. Study the
            reference flyer and type the remaining short messages yourself.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {copyBlocks.map((block) => (
              <article key={block.label} className="rounded-lg border border-[#d7deea] bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-black text-[#061d45]">{block.label}</h3>
                  <button
                    type="button"
                    onClick={() => handleCopy(block.label, block.text)}
                    className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#c8d4e5] bg-white px-3 py-2 text-sm font-black text-[#082b63] outline-none transition hover:bg-[#eef3fb] focus-visible:ring-4 focus-visible:ring-[#f1aa20]"
                  >
                    <ClipboardDocumentIcon className="h-5 w-5" aria-hidden="true" />
                    {copiedLabel === block.label ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className="mt-4 whitespace-pre-wrap rounded-md bg-[#f6f8fb] p-4 font-sans text-base font-bold leading-7 text-[#22324d]">
                  {block.text}
                </pre>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fonts" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading eyebrow="Type Station" title="Use the approved fonts." />
          <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-[#41516b]">
            This exercise is not about font choice. The font system is locked so you can focus on
            discovering and controlling Google Slides.
          </p>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {fonts.map((font) => (
              <article key={font.name} className="rounded-lg border border-[#d7deea] bg-[#f8fafd] p-5">
                <h3 className="text-2xl font-black text-[#061d45]">{font.name}</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-wide text-[#667895]">{font.role}</p>
                <p className="mt-5 rounded-md bg-white px-4 py-4 text-2xl font-black text-[#0b326d]">
                  {font.sample}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 rounded-lg border border-[#d7deea] bg-[#f8fafd] p-5 text-base font-semibold leading-7 text-[#41516b]">
            Can't see one of these in Google Slides? Open the font menu and choose More fonts.
          </p>
        </div>
      </section>

      <section id="icons" className="scroll-mt-24 border-y border-[#dfe5ef] bg-[#eef3f9]">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
          <div>
            <SectionHeading eyebrow="Icon Library" title="The icons are not included in your asset pack." />
            <p className="mt-4 max-w-3xl text-base font-medium leading-8 text-[#41516b]">
              You are not missing anything. Study the reference to determine which icons you need,
              then find them in Google's icon library.
            </p>
          </div>
          <a
            href="https://fonts.google.com/icons"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md bg-[#082b63] px-5 py-4 text-sm font-black uppercase tracking-wide text-white outline-none transition hover:bg-[#0d63bf] focus-visible:ring-4 focus-visible:ring-[#f1aa20]"
          >
            <ArrowTopRightOnSquareIcon className="h-5 w-5" aria-hidden="true" />
            Open Google Icons
          </a>
        </div>
      </section>

      <section id="help" className="scroll-mt-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading eyebrow="Stuck?" title="Good. You found something to figure out." />
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {[
              ["Try 1", "Explore", "Look at menus, right-click, and inspect tools that appear."],
              ["Try 2", "Ask", "Ask a classmate what they discovered and explain what you are trying to do."],
              ["Try 3", "Take a hint", "Reveal only as much help as you need, then return to your slide."],
            ].map(([kicker, title, body]) => (
              <article key={title} className="rounded-lg border border-[#d7deea] bg-[#f8fafd] p-5">
                <p className="text-sm font-black uppercase tracking-wide text-[#0b326d]">{kicker}</p>
                <h3 className="mt-2 text-xl font-black text-[#061d45]">{title}</h3>
                <p className="mt-2 text-base font-medium leading-7 text-[#4b5a72]">{body}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {hintTopics.map((topic) => (
              <details
                key={topic.title}
                className="group rounded-lg border border-[#d7deea] bg-[#f8fafd] p-4 open:bg-white open:shadow-sm"
              >
                <summary className="cursor-pointer list-none text-lg font-black text-[#061d45] outline-none focus-visible:ring-4 focus-visible:ring-[#f1aa20]">
                  {topic.title}
                </summary>
                <div className="mt-4 space-y-3">
                  <HintDetail title="Nudge" body={topic.nudge} />
                  <HintDetail title="Bigger Hint" body={topic.biggerHint} />
                  <HintDetail title="Show Me" body={topic.showMe} />
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            <article className="rounded-lg bg-[#082b63] p-6 text-white">
              <h3 className="text-2xl font-black">Need help?</h3>
              <p className="mt-4 font-semibold leading-8">
                Before asking, be ready to say:
              </p>
              <p className="mt-4 rounded-md bg-white/10 p-4 font-bold leading-8">
                I'm trying to: ________
                <br />
                I tried: ________
                <br />
                What I can't figure out is: ________
              </p>
            </article>
            <article className="rounded-lg border border-[#d7deea] bg-[#f8fafd] p-6">
              <h3 className="text-2xl font-black text-[#061d45]">Discovered something?</h3>
              <p className="mt-4 text-base font-semibold leading-8 text-[#41516b]">
                Write it on your Discovery Trail. Useful discoveries and useful questions are
                evidence of learning.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="checkpoint" className="scroll-mt-24 bg-[#061d45] text-white">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <SectionHeading eyebrow="Ready for a checkpoint?" title="You do not need to wait for everyone else." light />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-lg border border-white/15 bg-white/10 p-6">
              <h3 className="text-3xl font-black">BUILD</h3>
              <p className="mt-4 text-base font-semibold leading-8 text-[#d9e5f7]">
                If you believe you have demonstrated everything in BUILD, check your printed Progress
                Map, mark yourself Ready, and ask for teacher verification.
              </p>
            </article>
            <article className="rounded-lg border border-white/15 bg-white/10 p-6">
              <h3 className="text-3xl font-black">CONTROL</h3>
              <p className="mt-4 text-base font-semibold leading-8 text-[#d9e5f7]">
                After BUILD is verified, continue toward CONTROL. When you believe CONTROL is
                demonstrated, mark yourself Ready and ask for teacher verification.
              </p>
            </article>
          </div>
          <p className="mt-8 rounded-lg bg-[#f1aa20] px-6 py-5 text-xl font-black text-[#082b63]">
            You may explore anywhere. Achievement is recognized in order.
          </p>
        </div>
      </section>

      {lightboxOpen ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020817]/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Large approved Spring Fair flyer reference"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxOpen(false);
            }
          }}
        >
          <div className="relative max-h-full w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setLightboxOpen(false)}
              className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#082b63] outline-none transition hover:bg-[#f1aa20] focus-visible:ring-4 focus-visible:ring-white"
              aria-label="Close large flyer view"
            >
              <XMarkIcon className="h-7 w-7" aria-hidden="true" />
            </button>
            <img
              src={`${assetBase}/reference-flyer.webp`}
              alt="Large approved Spring Fair flyer reference for Riverdale Middle School."
              className="max-h-[92vh] w-full rounded-lg object-contain shadow-2xl"
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div>
      <p className={`text-sm font-black uppercase tracking-wide ${light ? "text-[#f1aa20]" : "text-[#0b326d]"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-2 text-3xl font-black tracking-tight md:text-4xl ${light ? "text-white" : "text-[#061d45]"}`}>
        {title}
      </h2>
    </div>
  );
}

function HintDetail({ title, body }: { title: string; body: string }) {
  return (
    <details className="rounded-md border border-[#d7deea] bg-white p-3">
      <summary className="cursor-pointer list-none font-black text-[#0b326d] outline-none focus-visible:ring-4 focus-visible:ring-[#f1aa20]">
        {title}
      </summary>
      <p className="mt-3 text-sm font-semibold leading-6 text-[#41516b]">{body}</p>
    </details>
  );
}
