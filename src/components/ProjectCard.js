import Link from "next/link";
import ProjectImage from "./ProjectImage";

export default function ProjectCard({ project, index }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:border-slate-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden">
        <ProjectImage
          src={project.image}
          alt={project.title}
          accent={project.accent}
          className="transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
            {project.industry}
          </span>
          <span className="text-xs text-slate-400">Case study {index + 1}</span>
        </div>

        <h3 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">
          {project.title}
        </h3>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-teal-50 px-2 py-0.5 text-xs font-medium text-teal-800"
            >
              {t}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-slate-600 leading-relaxed line-clamp-3">
          <span className="font-medium text-slate-800">Challenge: </span>
          {project.problem}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.metrics.map((m) => (
            <span
              key={m}
              className="rounded-lg border border-slate-200 px-2.5 py-1 text-xs text-slate-600"
            >
              {m}
            </span>
          ))}
        </div>

        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition group-hover:gap-3"
        >
          Read full case study
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
