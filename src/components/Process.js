import { process } from "@/data/site";

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            How I work
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A clear path from problem to solution
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            No black boxes. You stay involved at each stage so the final system
            fits your operations—not a generic template.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((step) => (
            <article
              key={step.step}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <span className="text-4xl font-bold text-slate-200">{step.step}</span>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
