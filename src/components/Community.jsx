import { Podcast, Youtube, Mail } from 'lucide-react'

const items = [
  {
    title: 'Podcast',
    icon: Podcast,
    desc: 'Conversations at the frontier of AI Product Management—frameworks, pitfalls, and stories from the field.',
    cta: 'Listen to my podcast',
    href: '#'
  },
  {
    title: 'YouTube',
    icon: Youtube,
    desc: 'Deep dives and practical walkthroughs for aspiring and practicing AI Product Managers.',
    cta: 'Subscribe to my YouTube',
    href: '#'
  },
  {
    title: 'Newsletter',
    icon: Mail,
    desc: 'Exclusive insights, featured articles, job openings, and opportunities—straight to your inbox.',
    cta: 'Subscribe',
    href: '#'
  }
]

export default function Community() {
  return (
    <section id="community" className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900 max-w-4xl">
          Beyond 9–5, I Also Do Things That Provide Value to the Tech Community
        </h2>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map(({ title, icon: Icon, desc, cta, href }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <Icon size={18} />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
              <a href={href} className="mt-4 inline-flex text-sm font-medium text-slate-900 hover:opacity-80">
                {cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
