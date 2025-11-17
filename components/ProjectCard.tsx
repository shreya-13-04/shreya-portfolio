import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <article className="p-5 border rounded-xl hover:shadow-lg transition">
      <h3 className="font-semibold text-lg">{project.title}</h3>
      <p className="text-slate-600 mt-2">{project.summary}</p>

      <div className="flex gap-2 mt-3">
        {project.tech.map((t) => (
          <span key={t} className="text-xs px-2 py-1 bg-slate-100 rounded">
            {t}
          </span>
        ))}
      </div>

      <Link href={project.link} target="_blank" className="text-purple-600 underline mt-4 inline-block">
        Code ↗
      </Link>
    </article>
  );
}
