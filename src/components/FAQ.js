import { faqs } from "@/data/site";

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900">
          Frequently asked questions
        </h2>
        <p className="mt-3 text-center text-slate-600">
          Quick answers for business owners considering a project.
        </p>

        <dl className="mt-10 space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <dt className="font-semibold text-slate-900">{faq.q}</dt>
              <dd className="mt-2 text-slate-600 leading-relaxed">{faq.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
