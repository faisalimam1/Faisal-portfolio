import { HERO } from '../data/siteData'
import { Github, Linkedin, Mail } from 'lucide-react'

const btn =
  'w-10 h-10 flex items-center justify-center rounded-full bg-slate-700 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 text-white transition-colors'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col items-center gap-4">
        <div className="flex items-center gap-3">
          <a className={btn} href={HERO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={18} />
          </a>
          <a className={btn} href={HERO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
          <a className={btn} href={HERO.huggingface} target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
            <span className="text-base leading-none">🤗</span>
          </a>
          <a className={btn} href={HERO.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
            <span className="font-bold text-sm">K</span>
          </a>
          <a className={btn} href={`mailto:${HERO.email}`} aria-label="Email">
            <Mail size={18} />
          </a>
        </div>
        <p className="text-sm text-slate-400">
          © {year} Faisal Imam · Built with Next.js & Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
