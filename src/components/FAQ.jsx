import { useState } from 'react'

const faqs = [
  {
    q: 'Are you available for a role?',
    a: 'Yes—open to roles where I can drive meaningful outcomes in AI-driven product environments, full-time or advisory.'
  },
  {
    q: 'How do you prioritize features?',
    a: 'I align opportunities to outcomes using research, impact sizing, and constraints—leveraging frameworks like RICE and opportunity solution trees.'
  },
  {
    q: 'What skills are some essential skills you have?',
    a: 'Product discovery, strategy, storytelling, stakeholder alignment, AI application design, and shipping with excellence.'
  },
  {
    q: 'What does a Product Manager actually do?',
    a: 'Creates clarity, reduces risk, and ensures the team builds the right thing at the right time to deliver value to users and the business.'
  }
]

const testimonials = [
  { name: 'Person One', role: 'Head of Product', quote: 'Moses brings clarity, calm, and momentum to teams.' },
  { name: 'Person Two', role: 'Engineer', quote: 'He balances empathy with rigor—great to work with.' },
  { name: 'Person Three', role: 'Designer', quote: 'Sharp product instincts and excellent communication.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
          Are You Impressed? Some Other People Have Also Been
        </h2>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-slate-700">“{t.quote}”</p>
              <p className="mt-4 text-sm text-slate-500">{t.name} • {t.role}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item, idx) => (
            <details key={idx} open={open === idx} onToggle={(e) => setOpen(e.target.open ? idx : null)} className="group p-6">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <span className="font-medium text-slate-900">{item.q}</span>
                <span className="text-slate-400 group-open:rotate-180 transition-transform">⌄</span>
              </summary>
              <p className="mt-3 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
