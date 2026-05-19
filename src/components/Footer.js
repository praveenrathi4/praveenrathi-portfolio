import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-6 lg:flex-row lg:justify-between">
        <div>
          <p className="text-xl font-bold text-slate-900">{site.name}</p>
          <p className="mt-1 text-slate-600">{site.title}</p>
          <p className="mt-3 max-w-sm text-sm text-slate-500">{site.availability}</p>
        </div>

        <div className="flex flex-col gap-2 text-sm text-slate-600 sm:items-end">
          <a href={`mailto:${site.email}`} className="hover:text-teal-700">
            {site.email}
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700">
            WhatsApp: {site.phone}
          </a>
        </div>
      </div>

      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} {site.name}. Built for businesses worldwide.
      </div>
    </footer>
  );
}
