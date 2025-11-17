// components/ProjectCard.tsx
import Link from "next/link";

type Project = {
  title: string;
  summary?: string;
  tech?: string[];
  link?: string;
  cover?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="p-5 border rounded-xl hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      {project.summary ? (
        <p className="text-slate-600 mt-2">{project.summary}</p>
      ) : null}

      <div className="flex gap-2 mt-3 flex-wrap">
        {project.tech?.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">
            {t}
          </span>
        ))}
      </div>

      {project.link ? (
        <Link
          href={project.link}
          target="_blank"
          className="text-purple-600 underline mt-4 inline-block"
        >
          Code ↗
        </Link>
      ) : null}
    </article>
  );
}
