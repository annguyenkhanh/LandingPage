export default function DashboardPreview() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
            Dashboard preview
          </p>
          <h2 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
            A clean workspace your team will actually enjoy using
          </h2>
        </div>

        <div className="mt-12 rounded-[2rem] border border-gray-200 bg-white p-6 shadow-2xl shadow-gray-200/50">
          <div className="grid gap-6 md:grid-cols-[260px_1fr]">
            <aside className="rounded-3xl bg-gray-50 p-5">
              <p className="text-sm font-semibold text-gray-900">Workspace</p>
              <div className="mt-5 space-y-3 text-sm text-gray-600">
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  Overview
                </div>
                <div className="rounded-xl bg-indigo-600 px-4 py-3 text-white shadow-sm">
                  Projects
                </div>
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  Tasks
                </div>
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  Analytics
                </div>
                <div className="rounded-xl bg-white px-4 py-3 shadow-sm">
                  Team
                </div>
              </div>
            </aside>

            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Active projects</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">12</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Completed tasks</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">348</p>
                </div>
                <div className="rounded-2xl bg-gray-50 p-5">
                  <p className="text-sm text-gray-500">Avg. delivery time</p>
                  <p className="mt-2 text-3xl font-bold text-gray-900">4.2d</p>
                </div>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Team activity
                  </h3>
                  <span className="text-sm text-gray-500">Last 7 days</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex justify-between text-sm text-gray-600">
                      <span>Design system update</span>
                      <span>90%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white">
                      <div className="h-3 w-[90%] rounded-full bg-indigo-600"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-sm text-gray-600">
                      <span>Marketing site launch</span>
                      <span>72%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white">
                      <div className="h-3 w-[72%] rounded-full bg-sky-500"></div>
                    </div>
                  </div>

                  <div>
                    <div className="mb-2 flex justify-between text-sm text-gray-600">
                      <span>Mobile app QA</span>
                      <span>58%</span>
                    </div>
                    <div className="h-3 rounded-full bg-white">
                      <div className="h-3 w-[58%] rounded-full bg-emerald-500"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent updates
                </h3>
                <div className="mt-4 space-y-3 text-sm text-gray-700">
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    Olivia moved “Hero redesign” to Review
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    Daniel completed 8 tasks this week
                  </div>
                  <div className="rounded-2xl bg-white px-4 py-3 shadow-sm">
                    New automation rule created for bug triage
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
