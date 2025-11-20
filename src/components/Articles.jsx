const articles = [
  { title: 'Who Are the Real Winners of the AI Era', href: '#' },
  { title: '“I Think, I Feel, I Hope”: Why Product Managers Must Be Assertive', href: '#' },
  { title: 'Why You Shouldn’t Be Empathetic as a Product Manager', href: '#' },
]

export default function Articles() {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">Latest Articles</h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {articles.map(({ title, href }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-900 leading-snug">{title}</h3>
              <a href={href} className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:opacity-80">
                Read →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
