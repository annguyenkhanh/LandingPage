export default function CTA() {
  return (
    <section id="contact" className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-gray-900 px-8 py-14 text-center text-white md:px-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-300">
            Ready to start
          </p>
          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            Start your free trial today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-gray-300">
            Join modern teams using FlowTrack to simplify planning, increase
            visibility, and ship work with less friction.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="rounded-full bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500">
              Start Free Trial
            </a>
            <a
              href="#features"
              className="rounded-full border border-white/20 px-6 py-3 font-medium text-white transition hover:bg-white/10">
              Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
