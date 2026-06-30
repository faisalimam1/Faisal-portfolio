import { useState } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

const LINKS = [
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Certifications', '#certifications'],
  ['Contact', '#contact'],
]

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false)
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <nav className="sticky top-0 z-40 bg-white/75 dark:bg-slate-900/75 backdrop-blur border-b border-slate-200/70 dark:border-slate-700/70">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#" className="font-extrabold text-lg gradient-text tracking-tight">
          Faisal Imam
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-5 text-sm font-medium">
          {LINKS.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="md:hidden p-2 rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-200/70 dark:border-slate-700/70 bg-white/95 dark:bg-slate-900/95 backdrop-blur">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-1 text-sm font-medium">
            {LINKS.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="py-2 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
