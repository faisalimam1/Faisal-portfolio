import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HERO, PROJECTS, RESUME } from '../data/siteData'
import Image from 'next/image'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  ExternalLink,
  Download,
  ArrowRight,
} from 'lucide-react'

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }
const section = {
  variants: fadeIn,
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const socialBtn =
  'w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-white hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:border-transparent transition-colors'

const chip =
  'px-3 py-1 text-xs rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'

function Heading({ children }) {
  return (
    <div className="mb-6">
      <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100">{children}</h2>
      <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500" />
    </div>
  )
}

export default function Home({ theme, setTheme }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-6xl mx-auto px-6 space-y-16 py-10">

        {/* HERO */}
        <section className="relative pt-6 overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-sky-400/30 dark:bg-sky-500/20 blur-3xl animate-float" />
            <div
              className="absolute top-8 right-0 w-72 h-72 rounded-full bg-indigo-400/30 dark:bg-indigo-500/20 blur-3xl animate-float"
              style={{ animationDelay: '2.5s' }}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 text-center md:text-left"
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.6 }}
          >
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Open to AI/ML roles
              </span>
              <h1 className="mt-4 text-5xl font-extrabold gradient-text leading-tight">{HERO.name}</h1>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{HERO.tagline}</p>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-3">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 shadow-md hover:shadow-lg transition-all"
                >
                  View Projects <ArrowRight size={16} />
                </a>
                <a
                  href={RESUME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                >
                  Download Resume <Download size={16} />
                </a>
              </div>

              <div className="mt-6 flex justify-center md:justify-start gap-3">
                <a className={socialBtn} href={HERO.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github size={18} />
                </a>
                <a className={socialBtn} href={HERO.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a className={socialBtn} href={HERO.huggingface} target="_blank" rel="noopener noreferrer" aria-label="HuggingFace">
                  <span className="text-base leading-none">🤗</span>
                </a>
                <a className={socialBtn} href={HERO.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
                  <span className="font-bold text-sm">K</span>
                </a>
                <a className={socialBtn} href={`mailto:${HERO.email}`} aria-label="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 blur opacity-60" />
                <Image
                  src={HERO.photo}
                  alt="Faisal Imam"
                  width={260}
                  height={260}
                  className="relative rounded-2xl object-cover shadow-lg"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>

        {/* ABOUT */}
        <motion.section id="about" className="p-8 rounded-2xl bg-sky-50 dark:bg-sky-900/30 shadow-md" {...section}>
          <Heading>About</Heading>
          <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{HERO.long}</p>
        </motion.section>

        {/* SKILLS */}
        <motion.section id="skills" className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 shadow-md" {...section}>
          <Heading>Skills</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(HERO.skills).map(([k, v]) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={k}
                className="p-5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm"
              >
                <h4 className="font-semibold text-sky-700 dark:text-sky-400">{k}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {v.map((item) => (
                    <span key={item} className={chip}>
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section id="projects" className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-md" {...section}>
          <Heading>Projects</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <motion.div
                whileHover={{ y: -6 }}
                key={p.title}
                className="group p-5 border border-slate-200 dark:border-slate-700 rounded-xl bg-slate-50 dark:bg-slate-900 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-lg group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {p.title}
                  </h3>
                  {p.demo && (
                    <span className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live
                    </span>
                  )}
                </div>
                <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">{p.summary}</p>

                {(p.screenshots || []).length > 0 && (
                  <div className="flex gap-2 mt-3 overflow-x-auto">
                    {p.screenshots.map((s, i) => (
                      <Image key={i} src={s} alt={p.title + i} width={280} height={160} className="rounded" />
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tech.map((t) => (
                    <span key={t} className={chip}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 transition-all"
                    >
                      <ExternalLink size={14} /> Live Demo
                    </a>
                  )}
                  <a
                    href={p.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  >
                    <Github size={14} /> View repo
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section id="education" className="p-8 rounded-2xl bg-violet-50 dark:bg-violet-900/30 shadow-md" {...section}>
          <Heading>Education</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HERO.education.map((e, i) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={i}
                className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm"
              >
                <div className="font-medium">{e.degree}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {e.institution} {e.cgpa && `• CGPA ${e.cgpa}`}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CERTIFICATIONS */}
        <motion.section id="certifications" className="p-8 rounded-2xl bg-rose-50 dark:bg-rose-900/30 shadow-md" {...section}>
          <Heading>Certifications</Heading>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HERO.certifications.map((c, i) => (
              <motion.div
                whileHover={{ y: -4 }}
                key={i}
                className="p-5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-medium">{c.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{c.issuer}</p>
                </div>
                <a
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center justify-center gap-1.5 text-sm px-3 py-1.5 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 transition-all"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section id="contact" className="p-8 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 shadow-md" {...section}>
          <Heading>Contact</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />{' '}
                <a href={`mailto:${HERO.email}`} className="text-sky-600 hover:underline">
                  {HERO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> {HERO.phone}
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />{' '}
                <a href={HERO.linkedin} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                  linkedin.com/in/faisalimam19
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />{' '}
                <a href={HERO.github} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                  github.com/faisalimam1
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-base leading-none">🤗</span>{' '}
                <a href={HERO.huggingface} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                  huggingface.co/faisalimam19
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm w-4 text-center">K</span>{' '}
                <a href={HERO.kaggle} target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">
                  kaggle.com/faisalimam19
                </a>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <MapPin size={16} /> {HERO.location}
              </div>
              <div className="mt-4">
                <a
                  href={RESUME.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-sm transition-all"
                >
                  <Download size={16} /> View Resume
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}
