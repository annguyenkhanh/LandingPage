export default function DashboardPreview() {
  return (
    <section className="bg-slate-50/70">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-indigo-600">
            Product preview
          </p>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            A polished workspace your team will actually want to use
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            A premium interface with dashboards, task views, activity feeds, and
            performance analytics built for fast-moving teams.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-[36px] border border-slate-200 bg-white shadow-[0_35px_90px_rgba(15,23,42,0.10)]">
          <div className="border-b border-slate-200 bg-slate-50 px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-300"></span>
                <span className="h-3 w-3 rounded-full bg-amber-300"></span>
                <span className="h-3 w-3 rounded-full bg-emerald-300"></span>
              </div>
              <div className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-500">
                Team dashboard
              </div>
            </div>
          </div>

          <div className="grid gap-0 md:grid-cols-[260px_1fr]">
            <aside className="border-r border-slate-200 bg-slate-50 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
                Workspace
              </p>

              <div className="mt-6 space-y-3 text-sm font-medium">
                <div className="rounded-2xl bg-slate-950 px-4 py-3 text-white shadow-sm">
                  Overview
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm">
                  Projects
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm">
                  Tasks
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm">
                  Calendar
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm">
                  Reports
                </div>
                <div className="rounded-2xl bg-white px-4 py-3 text-slate-700 shadow-sm">
                  Team
                </div>
              </div>

              <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-slate-950">
                  Team performance
                </p>
                <p className="mt-3 text-3xl font-bold text-slate-950">+23%</p>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Improvement in weekly output after reducing review
                  bottlenecks.
                </p>
              </div>
            </aside>

            <div className="p-6 md:p-8">
              <div className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-3">
                    <div className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-sm text-slate-500">Active projects</p>
                      <p className="mt-2 text-3xl font-bold text-slate-950">
                        12
                      </p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-sm text-slate-500">Completed tasks</p>
                      <p className="mt-2 text-3xl font-bold text-slate-950">
                        348
                      </p>
                    </div>
                    <div className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-sm text-slate-500">Delivery time</p>
                      <p className="mt-2 text-3xl font-bold text-slate-950">
                        4.2d
                      </p>
                    </div>
                  </div>

                  <div className="rounded-[28px] bg-slate-50 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-950">
                        Weekly progress
                      </h3>
                      <span className="text-sm text-slate-500">
                        Last 7 days
                      </span>
                    </div>

                    <div className="mt-6 space-y-5">
                      <div>
                        <div className="mb-2 flex justify-between text-sm text-slate-600">
                          <span>Design system revamp</span>
                          <span>92%</span>
                        </div>
                        <div className="h-3 rounded-full bg-white">
                          <div className="h-3 w-[92%] rounded-full bg-slate-950"></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex justify-between text-sm text-slate-600">
                          <span>Marketing site relaunch</span>
                          <span>74%</span>
                        </div>
                        <div className="h-3 rounded-full bg-white">
                          <div className="h-3 w-[74%] rounded-full bg-indigo-600"></div>
                        </div>
                      </div>

                      <div>
                        <div className="mb-2 flex justify-between text-sm text-slate-600">
                          <span>Mobile app QA</span>
                          <span>61%</span>
                        </div>
                        <div className="h-3 rounded-full bg-white">
                          <div className="h-3 w-[61%] rounded-full bg-sky-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] bg-slate-50 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-slate-950">
                        Task board
                      </h3>
                      <span className="text-sm text-slate-500">Today</span>
                    </div>

                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      <div className="rounded-3xl bg-white p-4 shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">
                          To do
                        </p>
                        <div className="mt-4 space-y-3 text-sm">
                          <div className="rounded-2xl bg-slate-50 p-3">
                            Review landing hero copy
                          </div>
                          <div className="rounded-2xl bg-slate-50 p-3">
                            Finalize mobile nav states
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-white p-4 shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">
                          In progress
                        </p>
                        <div className="mt-4 space-y-3 text-sm">
                          <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-800">
                            Update dashboard charts
                          </div>
                          <div className="rounded-2xl bg-indigo-50 p-3 text-indigo-800">
                            Polish testimonials section
                          </div>
                        </div>
                      </div>

                      <div className="rounded-3xl bg-white p-4 shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">
                          Done
                        </p>
                        <div className="mt-4 space-y-3 text-sm">
                          <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-800">
                            Setup analytics events
                          </div>
                          <div className="rounded-2xl bg-emerald-50 p-3 text-emerald-800">
                            Launch pricing experiment
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="rounded-[28px] bg-slate-950 p-6 text-white">
                    <p className="text-sm text-slate-400">
                      Current efficiency score
                    </p>
                    <p className="mt-3 text-5xl font-bold">89</p>
                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Teams using FlowTrack maintain higher visibility and fewer
                      delivery delays.
                    </p>
                  </div>

                  <div className="rounded-[28px] bg-slate-50 p-6">
                    <h3 className="text-lg font-semibold text-slate-950">
                      Recent updates
                    </h3>
                    <div className="mt-4 space-y-3 text-sm text-slate-700">
                      <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                        Olivia moved “Onboarding redesign” to Review
                      </div>
                      <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                        Daniel resolved 5 blockers this sprint
                      </div>
                      <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                        Revenue dashboard sync completed
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[28px] bg-slate-50 p-6">
                    <h3 className="text-lg font-semibold text-slate-950">
                      Team members
                    </h3>
                    <div className="mt-4 space-y-3">
                      {[
                        ["Olivia Carter", "Product Design"],
                        ["Daniel Kim", "Frontend Engineering"],
                        ["Mia Johnson", "Growth Marketing"],
                      ].map(([name, role]) => (
                        <div
                          key={name}
                          className="flex items-center gap-4 rounded-2xl bg-white px-4 py-3 shadow-sm">
                          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700">
                            {name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-medium text-slate-900">{name}</p>
                            <p className="text-sm text-slate-500">{role}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
