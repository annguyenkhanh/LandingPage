export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-semibold text-slate-950">FlowTrack</p>
          <p className="mt-1 text-sm text-slate-500">
            Premium SaaS landing page template for modern teams.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-950">
            Privacy
          </a>
          <a href="#" className="hover:text-slate-950">
            Terms
          </a>
          <a href="#" className="hover:text-slate-950">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
