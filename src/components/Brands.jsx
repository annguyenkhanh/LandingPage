export default function Brands() {
  const brands = ["Nova", "PixelLabs", "CloudPeak", "ShiftCore", "VisionX"];

  return (
    <section className="border-y border-slate-200 bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-slate-400">
          Trusted by high-performing teams
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 text-center text-lg font-semibold tracking-wide text-slate-400 md:grid-cols-5">
          {brands.map((brand) => (
            <div key={brand}>{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
