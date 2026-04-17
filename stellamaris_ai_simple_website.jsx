export default function StellaMarisAISite() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-6 py-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
            Ocean Monitoring Technology
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            StellaMaris AI
          </h1>

          <p className="mt-4 text-xl text-cyan-200 sm:text-2xl">
            Protecting Reefs Through Intelligence
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            StellaMaris AI is a coral reef monitoring concept focused on helping organizations track reef conditions in real time through intelligent sensing, environmental data collection, and future AI-powered analysis.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:stellamarisai@gmail.com"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-medium text-slate-950 shadow-lg transition hover:scale-[1.02]"
            >
              Contact Us
            </a>
            <a
              href="#about"
              className="rounded-2xl border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-slate-900/60">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-20 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <h2 className="text-xl font-semibold">Real-Time Monitoring</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Designed to monitor important reef conditions such as temperature, pH, and turbidity through a compact marine sensing system.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <h2 className="text-xl font-semibold">Future AI Insights</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Built with the long-term vision of using AI to identify patterns, detect environmental threats, and support reef protection efforts.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <h2 className="text-xl font-semibold">Mission Driven</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Our mission is to protect and preserve coral reef ecosystems by making ocean monitoring smarter, more accessible, and more actionable.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-semibold">Why StellaMaris AI?</h2>
            <p className="mt-5 text-base leading-7 text-slate-300">
              Coral reefs are under pressure from warming oceans, pollution, and habitat damage. StellaMaris AI is being developed as a modern monitoring concept that can help researchers, organizations, and conservation teams better understand reef health.
            </p>
            <p className="mt-4 text-base leading-7 text-slate-300">
              This project is currently in its early development stage, with a focus on branding, system design, sensor planning, and future prototype development.
            </p>
          </div>

          <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-br from-cyan-400/10 to-blue-500/10 p-8 shadow-2xl">
            <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Core Focus</p>
              <ul className="mt-5 space-y-4 text-slate-200">
                <li>• Coral reef condition monitoring</li>
                <li>• Sensor-based environmental tracking</li>
                <li>• Future cloud and AI integration</li>
                <li>• Support for conservation decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-slate-900/80">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Get in touch</h2>
              <p className="mt-2 text-slate-300">
                Interested in the concept, collaboration, or future updates?
              </p>
            </div>
            <a
              href="mailto:stellamarisai@gmail.com"
              className="inline-flex rounded-2xl bg-white px-6 py-3 font-medium text-slate-950 transition hover:scale-[1.02]"
            >
              stellamarisai@gmail.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
