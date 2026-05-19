import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 text-center sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
          Contact
        </p>
        <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
          Ready to simplify how your business runs?
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Describe your workflow challenge in a few sentences. I&apos;ll respond
          with honest feedback on whether I can help—and what a first step might
          look like.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-full bg-teal-700 px-8 py-4 text-sm font-semibold text-white transition hover:bg-teal-800 sm:w-auto"
          >
            Message on WhatsApp
          </a>
          <a
            href={`mailto:${site.email}?subject=Business%20automation%20inquiry`}
            className="w-full rounded-full border border-slate-300 bg-white px-8 py-4 text-sm font-semibold text-slate-800 transition hover:border-slate-400 sm:w-auto"
          >
            Email me
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">{site.availability}</p>
      </div>
    </section>
  );
}
