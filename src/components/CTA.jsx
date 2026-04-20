export default function CTA() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="relative overflow-hidden rounded-[36px] bg-slate-950 px-8 py-16 text-center text-white shadow-[0_35px_90px_rgba(15,23,42,0.18)] md:px-16">
          <div className="absolute left-0 top-0 h-60 w-60 rounded-full bg-indigo-500/20 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 h-60 w-60 rounded-full bg-sky-500/20 blur-3xl"></div>

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-300">
              Ready to move faster?
            </p>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              Start your free trial today
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Join modern teams using FlowTrack to simplify planning, increase
              visibility, and ship work with less friction.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-100">
                Start Free Trial
              </a>
              <a
                href="#features"
                className="rounded-full border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10">
                Explore Features
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
