export default function Brands() {
  const brands = ["PixelLabs", "NovaHQ", "ShiftCore", "CloudPeak", "VisionX"];

  return (
    <section className="border-y border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <p className="text-center text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
          Trusted by 10,000+ teams worldwide
        </p>

        <div className="mt-8 grid grid-cols-2 gap-6 text-center text-lg font-semibold text-gray-400 md:grid-cols-5">
          {brands.map((brand) => (
            <div key={brand}>{brand}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
