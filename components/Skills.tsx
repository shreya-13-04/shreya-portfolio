export default function Skills() {
  const items = [
    "Python", "C++", "React", "Next.js",
    "Tailwind", "YOLOv8", "Three.js",
    "PyTorch", "OpenCV"
  ];

  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold mb-10">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {items.map((s) => (
          <span
            key={s}
            className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium"
          >
            {s}
          </span>
        ))}
      </div>
    </section>
  );
}
