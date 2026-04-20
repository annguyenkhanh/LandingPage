const stats = [
  { value: "10k+", label: "Active teams" },
  { value: "4.9/5", label: "Average rating" },
  { value: "32%", label: "Faster delivery" },
  { value: "10h", label: "Saved per week" },
];

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6 md:py-10">
        <div className="grid gap-4 md:grid-cols-4">
          {stats.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
              <p className="text-3xl font-bold tracking-tight text-slate-950">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
