'use client';

import { NavMenuItemLink } from './NavMenuItemLink';

// Icon components (you can replace these with your preferred icon library)
const BookClosed = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>
);

const FileCode01 = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const LifeBuoy01 = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const PlayCircle = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Stars02 = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

export const DropdownMenuSimple = () => {
  const items = [
    {
      title: "Blog",
      subtitle: "The latest industry news and guides curated by our expert team.",
      href: "/blog",
      Icon: BookClosed,
    },
    {
      title: "Customer stories",
      subtitle: "Learn how our customers are using our platform to 10x their growth.",
      href: "/customer-stories",
      Icon: Stars02,
    },
    {
      title: "Video tutorials",
      subtitle: "Get up and running on our newest features and in-depth guides.",
      href: "/tutorials",
      Icon: PlayCircle,
    },
    {
      title: "Documentation",
      subtitle: "In-depth articles on our tools and technologies to empower teams.",
      href: "/docs",
      Icon: FileCode01,
    },
    {
      title: "Help and support",
      subtitle: "Need help with something? Our expert team is here to help 24/7.",
      href: "/help",
      Icon: LifeBuoy01,
    },
  ];

  return (
    <div className="px-3 pb-2 md:max-w-[32rem] md:p-0">
      <nav className="overflow-hidden rounded-2xl bg-base-100 py-2 shadow-lg ring-1 ring-base-300 md:p-2">
        <ul className="flex flex-col gap-0.5">
          {items.map(({ title, subtitle, href, Icon }) => (
            <li key={title}>
              <NavMenuItemLink icon={Icon} title={title} subtitle={subtitle} href={href} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}; 