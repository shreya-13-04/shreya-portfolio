import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Hearth — Recipe Book (Electron)",
      summary: "Offline-first recipe book with persistent storage.",
      tech: ["Electron", "IndexedDB"],
      link: "https://github.com",
    },
    {
      title: "AR Object Placement (AVL + Heaps)",
      summary: "Spatial data management for AR interior design.",
      tech: ["Three.js", "WebXR", "AVL Trees"],
      link: "https://github.com",
    },
    {
      title: "NovaDetect — Lunar Boulder Detection",
      summary: "YOLOv8 + DTM fusion for lunar boulder detection.",
      tech: ["YOLOv8", "PyTorch"],
      link: "https://github.com",
    },
  ];

  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">Selected Projects</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
