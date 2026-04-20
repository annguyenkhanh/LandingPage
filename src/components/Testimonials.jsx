const testimonials = [
  {
    name: "Olivia Carter",
    role: "Product Lead at Nova",
    quote:
      "FlowTrack gave our team a cleaner workflow, faster visibility, and fewer status meetings. It feels polished and actually enjoyable to use.",
  },
  {
    name: "Daniel Kim",
    role: "Frontend Manager at PixelLabs",
    quote:
      "We reduced delivery friction almost immediately. The dashboard and collaboration flow made weekly planning far easier.",
  },
  {
    name: "Mia Johnson",
    role: "Operations Director at CloudPeak",
    quote:
      "The experience feels premium from top to bottom. It helped our team move from scattered tools into one clear system.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Testimonials
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            Teams love how fast and clear it feels
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-sky-100 font-bold text-slate-800">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-slate-950">{item.name}</p>
                  <p className="text-sm text-slate-500">{item.role}</p>
                </div>
              </div>

              <p className="mt-6 leading-8 text-slate-600">“{item.quote}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
