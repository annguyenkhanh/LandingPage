const features = [
  {
    icon: "✦",
    title: "Task management",
    description:
      "Organize projects with clear workflows, priorities, and timelines your entire team can follow.",
  },
  {
    icon: "⚡",
    title: "Real-time collaboration",
    description:
      "Keep everyone aligned with comments, shared visibility, and instant updates across teams.",
  },
  {
    icon: "📊",
    title: "Analytics dashboard",
    description:
      "Track team velocity, progress, and blockers before they slow down your delivery pipeline.",
  },
  {
    icon: "🤖",
    title: "Smart automation",
    description:
      "Automate repetitive tasks so your team can spend more time building and less time managing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Features
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Built for teams that need clarity without the clutter
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Every section is designed to help modern teams manage work faster,
            communicate clearly, and deliver with confidence.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 to-sky-100 text-2xl shadow-sm">
                {feature.icon}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
