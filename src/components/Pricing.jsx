const plans = [
  {
    name: "Starter",
    price: "$0",
    description: "Perfect for individuals testing the workflow.",
    features: ["Up to 3 projects", "Basic analytics", "Email support"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    description: "For growing teams that need better speed and visibility.",
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
    description: "For larger teams managing complex delivery pipelines.",
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
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Pricing
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            Simple pricing for teams of any size
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose a plan that fits your workflow today and scale when you are
            ready.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 shadow-sm ${
                plan.highlighted
                  ? "border-indigo-600 bg-indigo-600 text-white shadow-xl"
                  : "border-gray-200 bg-white text-gray-900"
              }`}>
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p
                className={`mt-3 ${plan.highlighted ? "text-indigo-100" : "text-gray-600"}`}>
                {plan.description}
              </p>

              <div className="mt-6 flex items-end gap-2">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span
                  className={
                    plan.highlighted ? "text-indigo-100" : "text-gray-500"
                  }>
                  /month
                </span>
              </div>

              <ul className="mt-8 space-y-3 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>

              <button
                className={`mt-8 w-full rounded-full px-5 py-3 font-medium transition ${
                  plan.highlighted
                    ? "bg-white text-indigo-600 hover:bg-gray-100"
                    : "bg-black text-white hover:opacity-90"
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
