const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for solo founders and small experiments.",
    features: ["Up to 3 projects", "Basic analytics", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For fast-moving teams that need visibility and automation.",
    features: [
      "Unlimited projects",
      "Advanced analytics",
      "Automation tools",
      "Priority support",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$49",
    description:
      "Built for larger teams running more complex delivery workflows.",
    features: [
      "Team permissions",
      "Custom reports",
      "Advanced workflows",
      "Dedicated support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Pricing
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Simple pricing that scales with your team
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Start for free, upgrade when your workflow grows, and keep every
            stakeholder aligned along the way.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${
                plan.highlighted
                  ? "border-slate-950 bg-slate-950 text-white"
                  : "border-slate-200 bg-slate-50 text-slate-950"
              }`}>
              {plan.highlighted && (
                <div className="mb-5 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200">
                  Most popular
                </div>
              )}

              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-3 leading-7 ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-2">
                <span className="text-5xl font-bold tracking-tight">
                  {plan.price}
                </span>
                <span
                  className={
                    plan.highlighted ? "text-slate-400" : "text-slate-500"
                  }>
                  /month
                </span>
              </div>

              <ul className="mt-8 space-y-4 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <span
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs ${
                        plan.highlighted
                          ? "bg-white/10 text-white"
                          : "bg-white text-slate-900"
                      }`}>
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full px-5 py-3.5 font-semibold transition ${
                  plan.highlighted
                    ? "bg-white text-slate-950 hover:bg-slate-100"
                    : "bg-slate-950 text-white hover:opacity-90"
                }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
