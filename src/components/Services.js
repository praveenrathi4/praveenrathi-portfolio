import { services } from "@/data/site";

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Services
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            What I build for your business
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Practical, affordable software—not enterprise bloat. Solutions shaped
            around how your team actually works today.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-200 hover:shadow-md"
            >
              <span className="text-2xl" aria-hidden>
                {service.icon}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
