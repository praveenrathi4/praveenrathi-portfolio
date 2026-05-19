import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ProjectImage from "@/components/ProjectImage";
import { projects, getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import { site } from "@/data/site";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.solution,
    openGraph: {
      title: project.title,
      description: project.outcome,
    },
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const projectIndex = projects.findIndex((p) => p.slug === slug);

  return (
    <>
      <Header />
      <main>
        <section className="border-b border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16">
            <Link
              href="/#projects"
              className="text-sm font-medium text-slate-500 transition hover:text-teal-700"
            >
              ← Back to projects
            </Link>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                {project.industry}
              </span>
              <span className="text-sm text-slate-400">
                Case study {projectIndex + 1} of {projects.length}
              </span>
            </div>

            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg text-slate-600 leading-relaxed">
              {project.solution}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md bg-teal-50 px-2.5 py-1 text-xs font-medium text-teal-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </section>

        {project.gallery?.length > 0 && (
          <section className="border-b border-slate-200 py-10">
            <div className="mx-auto max-w-6xl px-5 sm:px-6">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Screenshots</h2>
                <span className="text-sm text-slate-400">Scroll →</span>
              </div>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="h-[220px] min-w-[300px] shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
                  >
                    <ProjectImage
                      src={image}
                      alt={`${project.title} screenshot ${index + 1}`}
                      accent={project.accent}
                      contain
                      className="h-full"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="py-12 sm:py-16">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <article>
                <h2 className="text-xl font-bold text-slate-900">Business challenge</h2>
                <p className="mt-3 text-lg text-slate-600 leading-relaxed">{project.problem}</p>
              </article>
              <article>
                <h2 className="text-xl font-bold text-slate-900">Solution delivered</h2>
                <p className="mt-3 text-lg text-slate-600 leading-relaxed">{project.solution}</p>
              </article>
              <article>
                <h2 className="text-xl font-bold text-slate-900">Business outcome</h2>
                <p className="mt-3 text-lg text-slate-600 leading-relaxed">{project.outcome}</p>
              </article>
            </div>

            <aside>
              <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-bold text-slate-900">Key features</h3>
                <ul className="mt-4 space-y-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-lg bg-slate-50 px-4 py-2.5 text-sm text-slate-700"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-slate-200 pt-6">
                  <p className="text-sm text-slate-600">
                    Facing a similar challenge? Let&apos;s discuss your workflow.
                  </p>
                  <a
                    href={site.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 block rounded-full bg-teal-700 py-3 text-center text-sm font-semibold text-white transition hover:bg-teal-800"
                  >
                    Get in touch
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
