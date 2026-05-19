import { stats } from "@/data/site";

export default function TrustBar() {
  return (
    <section className="border-b border-slate-200 bg-slate-900 text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-10 sm:px-6 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center lg:text-left">
            <div className="text-2xl font-bold text-teal-400 sm:text-3xl">{stat.value}</div>
            <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
