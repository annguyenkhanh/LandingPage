export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute left-[-120px] top-[-120px] h-[320px] w-[320px] rounded-full bg-indigo-200/40 blur-3xl"></div>
      <div className="absolute right-[-80px] top-[120px] h-[280px] w-[280px] rounded-full bg-sky-200/40 blur-3xl"></div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 pb-20 pt-16 md:grid-cols-2 md:items-center md:pb-28 md:pt-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-white px-4 py-2 text-sm font-medium text-indigo-700 shadow-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-indigo-600"></span>
            Built for startups, agencies, and product teams
          </div>

          <h1 className="mt-6 max-w-2xl text-5xl font-bold leading-[1.05] tracking-tight text-slate-950 md:text-7xl">
            Project management that feels{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-sky-500 bg-clip-text text-transparent">
              fast, clear,
            </span>{" "}
            and actually enjoyable.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
            FlowTrack helps modern teams plan projects, collaborate in real
            time, and ship work without the clutter of outdated tools.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-full bg-slate-950 px-7 py-3.5 text-center font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-xl">
              Start Free Trial
            </a>
            <a
              href="#features"
              className="rounded-full border border-slate-300 bg-white px-7 py-3.5 text-center font-semibold text-slate-900 transition hover:border-slate-400 hover:bg-slate-50">
              Explore Features
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-slate-500">
            <span>✔ No credit card required</span>
            <span>✔ Setup in under 5 minutes</span>
            <span>✔ Cancel anytime</span>
          </div>

          <div className="mt-10 flex items-center gap-6 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex -space-x-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-indigo-100 font-semibold text-indigo-700">
                A
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-sky-100 font-semibold text-sky-700">
                J
              </div>
              <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-emerald-100 font-semibold text-emerald-700">
                M
              </div>
            </div>
            <div>
              <p className="font-semibold text-slate-950">
                Trusted by 10,000+ teams worldwide
              </p>
              <p className="text-sm text-slate-500">
                Used by product, design, and operations teams in 40+ countries
              </p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-52 w-52 rounded-full bg-indigo-100/70 blur-3xl"></div>
          <div className="absolute -right-10 bottom-10 h-56 w-56 rounded-full bg-sky-100/70 blur-3xl"></div>

          <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.12)]">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-300"></span>
                <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-300"></span>
              </div>
              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
                Workspace Overview
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">
                      Quarterly launch plan
                    </p>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      On track
                    </span>
                  </div>

                  <div className="mt-5 h-3 rounded-full bg-white">
                    <div className="h-3 w-[78%] rounded-full bg-gradient-to-r from-indigo-600 to-sky-500"></div>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs text-slate-500">Tasks done</p>
                      <p className="mt-2 text-2xl font-bold text-slate-950">
                        124
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs text-slate-500">Velocity</p>
                      <p className="mt-2 text-2xl font-bold text-slate-950">
                        +18%
                      </p>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <p className="text-xs text-slate-500">Blocked</p>
                      <p className="mt-2 text-2xl font-bold text-slate-950">
                        03
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-950 p-5 text-white">
                  <p className="text-sm text-slate-300">This week’s output</p>
                  <p className="mt-3 text-4xl font-bold">82%</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">
                    Team performance improved with fewer blockers and faster
                    approvals.
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="rounded-2xl bg-white/10 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Design</span>
                        <span>91%</span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Development</span>
                        <span>76%</span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-3">
                      <div className="flex items-center justify-between text-sm">
                        <span>Marketing</span>
                        <span>68%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                <div className="rounded-3xl bg-slate-50 p-5">
                  <p className="font-semibold text-slate-900">
                    Recent activity
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-slate-600">
                    <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                      Olivia moved “Mobile redesign” to review
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                      Daniel completed 8 tasks this week
                    </div>
                    <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                      New automation rule created for bug triage
                    </div>
                  </div>
                </div>

                <div className="rounded-3xl bg-slate-50 p-5">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-900">
                      Upcoming priorities
                    </p>
                    <span className="text-sm text-slate-500">
                      3 active items
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-slate-900">
                          Onboarding flow update
                        </p>
                        <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
                          High
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-slate-900">
                          Marketing site QA
                        </p>
                        <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
                          Medium
                        </span>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-slate-900">
                          Analytics event cleanup
                        </p>
                        <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                          Done
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 rounded-3xl border border-slate-200 bg-white px-5 py-4 shadow-xl">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Avg. time saved
            </p>
            <p className="mt-1 text-2xl font-bold text-slate-950">10h / week</p>
          </div>
        </div>
      </div>
    </section>
  );
}
