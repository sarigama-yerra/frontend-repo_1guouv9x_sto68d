export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center md:justify-start">
          <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded-3xl bg-gradient-to-br from-slate-100 to-slate-200 border border-slate-200 shadow-inner overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-slate-400">Photo</div>
          </div>
        </div>

        {/* Right: Text */}
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
            Hi, I am Moses Afolabi, an AI Product Manager.
          </h1>
          <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
            <p>
              I craft impactful products at the intersection of AI and human-centered design. Over the years, I’ve helped teams turn complex problems into elegant, measurable outcomes.
            </p>
            <p>
              I’ve contributed across high-growth companies such as Arca, Arnergy, TasAfrica, Bunce, and Termii—leading discovery, defining strategy, and driving end-to-end execution.
            </p>
            <p>
              I’m passionate about using AI to unlock leverage, align stakeholders, and build experiences that customers love—and businesses trust.
            </p>
          </div>

          <div className="mt-8">
            <a href="#about" className="inline-flex rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-700 transition-colors">
              Learn More About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
