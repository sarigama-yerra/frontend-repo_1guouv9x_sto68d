export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-slate-900">
          Do You Have a Product You Are Building and I’m a Good Fit?
        </h2>

        <form className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Reason for contacting</label>
            <select className="mt-2 w-full rounded-xl border-slate-200 focus:ring-slate-300">
              <option>Product role opportunity</option>
              <option>Advisory/Consulting</option>
              <option>Speaking/Workshop</option>
              <option>Collaboration</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Name</label>
            <input type="text" className="mt-2 w-full rounded-xl border-slate-200 focus:ring-slate-300" placeholder="Your name" />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input type="email" className="mt-2 w-full rounded-xl border-slate-200 focus:ring-slate-300" placeholder="you@example.com" />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-slate-700">Message</label>
            <textarea rows="5" className="mt-2 w-full rounded-xl border-slate-200 focus:ring-slate-300" placeholder="Tell me about your product and goals"></textarea>
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
