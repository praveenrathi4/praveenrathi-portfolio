import { site } from "@/data/site";
import { profile } from "@/data/experience";

export default function About() {
  return (
    <section id="about" className="border-y border-slate-200 bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A CA who builds systems, not slide decks
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              {profile.credential} ({profile.qualified}). I spent years in corporate
              finance preparing MIS for leadership—then started building the tools
              myself when Excel wasn&apos;t enough.
            </p>
          </div>

          <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
            <p>
              I&apos;m {site.name}, an independent consultant for small and medium
              businesses worldwide. I understand reporting, controls, and operations
              from the inside—then deliver working software: web apps, dashboards, or
              lean Google Workspace automation.
            </p>
            <p>
              Whether you&apos;re in trading, automotive, property, or membership-based
              operations, I focus on reducing manual work and giving management
              reliable data—at a fraction of typical software or staffing cost.
            </p>
            <ul className="grid gap-2 pt-2 sm:grid-cols-2">
              {[
                "Workflow & process automation",
                "MIS dashboards & reporting",
                "Custom web applications",
                "Google Workspace integrations",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-base">
                  <span className="text-teal-600">●</span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 pt-2 text-sm font-semibold text-teal-700 hover:underline"
            >
              See my full journey
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
