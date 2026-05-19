import Link from "next/link";
import { site } from "@/data/site";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6">
        <Link href="/" className="min-w-0 flex-1">
          <div className="truncate text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            {site.name}
          </div>
          <div className="truncate text-xs text-slate-500 sm:text-sm">
            {site.title}
          </div>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-teal-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-teal-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-800 sm:inline-block"
          >
            Get in touch
          </a>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
