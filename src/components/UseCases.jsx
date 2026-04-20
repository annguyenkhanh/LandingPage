const cases = [
  {
    title: "For startups",
    description:
      "Move quickly from idea to launch with clean planning, sprint visibility, and better execution.",
  },
  {
    title: "For agencies",
    description:
      "Keep client work organized across multiple teams, deadlines, and deliverables without losing context.",
  },
  {
    title: "For product teams",
    description:
      "Track features, align stakeholders, and manage cross-functional delivery in one clear workspace.",
  },
];

export default function UseCases() {
  return (
    <section id="use-cases" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
              Use cases
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Flexible enough for every modern team
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Whether you are launching products, managing clients, or
              coordinating operations, FlowTrack adapts to how your team works.
            </p>
          </div>

          <div className="grid gap-5">
            {cases.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-slate-950">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
