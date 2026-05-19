import { profile, timeline, capabilities } from "@/data/experience";

const typeStyles = {
  education: "border-slate-200 bg-slate-50",
  corporate: "border-blue-200 bg-blue-50/50",
  build: "border-teal-200 bg-teal-50/50",
};

const typeLabels = {
  education: "Foundation",
  corporate: "Corporate MIS",
  build: "Systems built",
};

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Background
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From CA and corporate MIS to custom automation
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {profile.summary}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
            <span className="text-teal-700">✓</span>
            {profile.credential} · {profile.qualified}
          </p>
        </div>

        <ol className="relative mt-14">
          <div
            className="absolute bottom-2 left-[1.125rem] top-2 w-px bg-slate-200 sm:left-1/2 sm:-ml-px"
            aria-hidden
          />

          {timeline.map((item, index) => (
            <li
              key={`${item.period}-${item.title}`}
              className={`relative flex flex-col gap-6 pb-12 sm:flex-row sm:gap-8 ${
                index % 2 === 0 ? "sm:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden flex-1 sm:block" aria-hidden />

              <div className="relative z-10 flex shrink-0 justify-start sm:absolute sm:left-1/2 sm:-translate-x-1/2">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-teal-600 bg-white text-xs font-bold text-teal-700 shadow-sm">
                  {index + 1}
                </span>
              </div>

              <article
                className={`flex-1 rounded-2xl border p-6 shadow-sm sm:max-w-[calc(50%-2.5rem)] ${
                  typeStyles[item.type] ?? typeStyles.build
                }`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {item.period}
                  </span>
                  <span className="rounded-full bg-white/80 px-2 py-0.5 text-xs font-medium text-slate-600">
                    {typeLabels[item.type]}
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm font-medium text-slate-700">{item.org}</p>

                {item.highlight ? (
                  <p className="mt-3 inline-block rounded-lg bg-white/90 px-3 py-1.5 text-sm font-semibold text-teal-800">
                    {item.highlight}
                  </p>
                ) : null}

                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>

                {item.milestone ? (
                  <p className="mt-3 text-sm italic text-slate-500">{item.milestone}</p>
                ) : null}

                {item.outcomes ? (
                  <ul className="mt-3 space-y-1.5">
                    {item.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-teal-600">→</span>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                ) : null}

                {item.projects ? (
                  <ul className="mt-3 space-y-1.5">
                    {item.projects.map((project) => (
                      <li key={project} className="flex gap-2 text-sm text-slate-600">
                        <span className="text-teal-600">•</span>
                        {project}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <ul className="mt-4 flex list-none flex-wrap gap-1.5 p-0">
                  {item.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md bg-white/70 px-2 py-0.5 text-xs text-slate-600"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>

        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h3 className="text-lg font-bold text-slate-900">
            What this means for your business
          </h3>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {capabilities.map((cap) => (
              <li key={cap} className="flex gap-3 text-sm text-slate-600">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-teal-100 text-xs text-teal-700">
                  ✓
                </span>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
