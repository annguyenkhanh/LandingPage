const features = [
  {
    title: "Task management",
    description:
      "Organize projects with clean workflows, timelines, and priorities your whole team can follow.",
  },
  {
    title: "Real-time collaboration",
    description:
      "Keep everyone aligned with live updates, comments, and shared project visibility.",
  },
  {
    title: "Analytics dashboard",
    description:
      "Track team performance, delivery speed, and blockers before they become a problem.",
  },
  {
    title: "Smart automation",
    description:
      "Automate repetitive actions so your team spends more time building and less time managing.",
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Features
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Everything your team needs to move faster
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Built to reduce clutter, improve visibility, and help your team stay
            focused.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-xl">
                ✦
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>
              <p className="mt-3 leading-7 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
