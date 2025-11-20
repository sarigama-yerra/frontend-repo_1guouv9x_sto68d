import { Linkedin, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">Made with Whimsical</p>

          <div className="flex items-center gap-4 text-slate-600">
            <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin size={18} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter size={18} /></a>
            <a href="mailto:hello@example.com" aria-label="Email" className="hover:text-slate-900"><Mail size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
