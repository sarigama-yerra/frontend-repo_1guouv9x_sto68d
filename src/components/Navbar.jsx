import { FileDown } from 'lucide-react'

const navItems = [
  { label: 'About Me', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Community', href: '#community' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-tight text-slate-900">Moses Afolabi</a>

          <nav className="hidden md:flex items-center gap-6 text-slate-700">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="hover:text-slate-900 transition-colors">
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="/Moses_Afolabi_CV.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 text-white px-4 py-2 text-sm font-medium hover:bg-slate-700 transition-colors"
          >
            <FileDown size={16} /> Download CV
          </a>
        </div>
      </div>
    </header>
  )
}
