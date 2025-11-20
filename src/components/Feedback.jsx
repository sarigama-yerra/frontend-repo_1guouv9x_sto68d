import { ThumbsUp, ThumbsDown } from 'lucide-react'

export default function Feedback() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
          I am big on feedback. What do you think of my portfolio website?
        </h2>

        <form className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3">
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-700 transition-colors">
              <ThumbsUp size={16} />
            </button>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-slate-100 text-slate-700 px-4 py-2 text-sm font-medium hover:bg-slate-200 transition-colors">
              <ThumbsDown size={16} />
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Your Role</label>
            <input type="text" className="mt-2 w-full rounded-xl border-slate-200 focus:ring-slate-300" placeholder="e.g., Hiring Manager, Founder, Product Lead" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Feedback</label>
            <textarea rows="4" className="mt-2 w-full rounded-xl border-slate-200 focus:ring-slate-300" placeholder="Share your thoughts—what worked well and what could be better"></textarea>
          </div>

          <div className="md:col-span-2">
            <button type="button" className="inline-flex rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-medium hover:bg-slate-700 transition-colors">
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
