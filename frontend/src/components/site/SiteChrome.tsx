import Image from 'next/image';
import Link from 'next/link';

const dbaLinks = [
  {
    name: 'Chart-Ed Institute for Global Data Literacy',
    href: 'https://chart-ed.cc',
  },
  {
    name: 'Chart-Ed Learning',
    href: 'https://chart-ed.om',
  },
  {
    name: 'Living Spiral Education',
    href: 'https://livingspiral.education',
  },
];

const navLinks = [
  { label: 'Overview', href: '/' },
  { label: 'DBAs', href: '/#dbas' },
  { label: 'Contact', href: '/contact' },
  { label: 'Support', href: '/support' },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-8">
        <Link href="/" className="min-w-0">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-living-spiral.svg"
              alt="Living Spiral Studio logo"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <div className="min-w-0">
              <div className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700">
                Living Spiral Studio, LLC
              </div>
              <div className="truncate text-lg font-semibold text-stone-900">
                Educational Support Services
              </div>
            </div>
          </div>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-medium text-stone-700">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-emerald-700">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-950 text-stone-100">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo-living-spiral.svg"
              alt="Living Spiral Studio logo"
              width={56}
              height={56}
              className="h-14 w-14 brightness-0 invert"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-emerald-300">
                Living Spiral Studio, LLC
              </p>
              <p className="mt-1 text-sm text-stone-400">Parent entity and public support home</p>
            </div>
          </div>
          <p className="max-w-xl text-sm leading-7 text-stone-300">
            Parent organization for educational brands and products spanning data literacy,
            district frameworks, and broader learning experiences.
          </p>
          <div className="text-sm leading-7 text-stone-300">
            <p>155 Anita Drive</p>
            <p>Powder Springs, GA 30127</p>
            <p>USA</p>
            <p>
              <a className="transition hover:text-white" href="tel:+18668834086">
                +1 (866) 883-4086
              </a>
            </p>
            <p>
              <a
                className="transition hover:text-white"
                href="mailto:support@livingspiralstudio.com"
              >
                support@livingspiralstudio.com
              </a>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Brands</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            {dbaLinks.map((brand) => (
              <li key={brand.name}>
                <a
                  href={brand.href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:text-white"
                >
                  {brand.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-white">Company</h2>
          <ul className="mt-4 space-y-3 text-sm text-stone-300">
            <li>
              <Link href="/support" className="transition hover:text-white">
                Support
              </Link>
            </li>
            <li>
              <Link href="/contact" className="transition hover:text-white">
                Contact and routing
              </Link>
            </li>
            <li>
              <Link href="/#entity" className="transition hover:text-white">
                Legal entity details
              </Link>
            </li>
            <li>
              <Link href="/#dbas" className="transition hover:text-white">
                DBA portfolio
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="transition hover:text-white">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-white">
                Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
