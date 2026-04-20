export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-lg shadow-slate-300/40">
            F
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-950">
              FlowTrack
            </p>
            <p className="text-xs text-slate-500">Modern SaaS Template</p>
          </div>
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <a href="#features" className="transition hover:text-slate-950">
            Features
          </a>
          <a href="#use-cases" className="transition hover:text-slate-950">
            Use Cases
          </a>
          <a href="#pricing" className="transition hover:text-slate-950">
            Pricing
          </a>
          <a href="#faq" className="transition hover:text-slate-950">
            FAQ
          </a>
        </nav>

        <a
          href="#pricing"
          className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-lg">
          Start Free Trial
        </a>
      </div>
    </header>
  );
}
