export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <div className="mb-4 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            New • Built for modern teams
          </div>

          <h1 className="max-w-xl text-4xl font-bold leading-tight text-gray-900 md:text-6xl">
            Manage your work smarter, not harder.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
            FlowTrack helps fast-moving teams plan projects, collaborate in real
            time, and stay aligned without the usual chaos.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#pricing"
              className="rounded-full bg-indigo-600 px-6 py-3 text-center font-medium text-white transition hover:bg-indigo-700">
              Start Free Trial
            </a>
            <a
              href="#features"
              className="rounded-full border border-gray-300 px-6 py-3 text-center font-medium text-gray-900 transition hover:bg-gray-50">
              See Features
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-sm text-gray-500">
            <div>✔ No credit card required</div>
            <div>✔ Cancel anytime</div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-100 blur-3xl"></div>
          <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-sky-100 blur-3xl"></div>

          <div className="relative rounded-3xl border border-gray-200 bg-white p-5 shadow-2xl shadow-gray-200/60">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-300"></span>
              <span className="h-3 w-3 rounded-full bg-yellow-300"></span>
              <span className="h-3 w-3 rounded-full bg-green-300"></span>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <div className="grid gap-4">
                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Project progress</p>
                  <div className="mt-3 h-3 rounded-full bg-gray-200">
                    <div className="h-3 w-4/5 rounded-full bg-indigo-600"></div>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800">
                    82% completed
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Tasks done</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">124</p>
                  </div>
                  <div className="rounded-xl bg-white p-4 shadow-sm">
                    <p className="text-sm text-gray-500">Team velocity</p>
                    <p className="mt-2 text-3xl font-bold text-gray-900">
                      +18%
                    </p>
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 shadow-sm">
                  <p className="text-sm text-gray-500">Upcoming priorities</p>
                  <ul className="mt-3 space-y-2 text-sm text-gray-700">
                    <li>• Finalize onboarding flow</li>
                    <li>• Review mobile dashboard</li>
                    <li>• Launch analytics update</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
