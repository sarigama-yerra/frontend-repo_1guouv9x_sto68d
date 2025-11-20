const experiences = [
  { company: 'Termii', year: '2024', role: 'Product Manager' },
  { company: 'Arca Payments', year: '2023', role: 'Product Manager' },
  { company: 'Bunce', year: '2023', role: 'Product Manager' },
  { company: 'TasAfrica', year: '2022', role: 'Product Manager' },
  { company: 'Arnergy Solar', year: '2021', role: 'Product Analyst' },
  { company: 'Astrotech Venture NG', year: '2019', role: 'Senior Manager' },
]

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
          Building the Future One Product at a Time
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-slate-500">{exp.year}</p>
                  <h3 className="text-lg font-semibold text-slate-900">{exp.company}</h3>
                </div>
                <span className="inline-flex rounded-full bg-slate-100 text-slate-700 px-3 py-1 text-xs font-medium">
                  {exp.role}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <a href="#contact" className="inline-flex rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-700 transition-colors">
            Learn what I did at each touchpoint
          </a>
        </div>
      </div>
    </section>
  )
}
