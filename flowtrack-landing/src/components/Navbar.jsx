export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-tight">
          FlowTrack
        </a>

        <nav className="hidden gap-8 text-sm text-gray-600 md:flex">
          <a href="#features" className="hover:text-black">
            Features
          </a>
          <a href="#pricing" className="hover:text-black">
            Pricing
          </a>
          <a href="#contact" className="hover:text-black">
            Contact
          </a>
        </nav>

        <a
          href="#pricing"
          className="rounded-full bg-black px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90">
          Start Free Trial
        </a>
      </div>
    </header>
  );
}
