import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { HERO, PROJECTS, RESUME } from '../data/siteData'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react'

const fadeIn = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Home({ theme, setTheme }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100">
      <Navbar theme={theme} setTheme={setTheme} />
      <main className="max-w-6xl mx-auto px-6 space-y-16 py-10">

        {/* HERO */}
        <motion.section
          className="pt-6"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 text-center md:text-left">
            <div>
              <h1 className="text-5xl font-extrabold text-sky-700">{HERO.name}</h1>
              <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">{HERO.tagline}</p>
            </div>
            <div className="flex justify-center md:justify-end">
              <Image
                src={HERO.photo}
                alt="Faisal Imam"
                width={260}
                height={260}
                className="rounded-2xl object-cover shadow-lg"
              />
            </div>
          </div>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          className="p-8 rounded-2xl bg-sky-50 dark:bg-sky-900/30 shadow-md"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-sky-800 dark:text-sky-300">About</h2>
          <p className="mt-3 text-slate-700 dark:text-slate-300 whitespace-pre-line">{HERO.long}</p>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          className="p-8 rounded-2xl bg-emerald-50 dark:bg-emerald-900/30 shadow-md"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-emerald-800 dark:text-emerald-300">Skills</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Object.entries(HERO.skills).map(([k, v]) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={k}
                className="p-5 bg-white dark:bg-slate-800 rounded-xl border shadow"
              >
                <h4 className="font-medium">{k}</h4>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{v.join(', ')}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          className="p-8 rounded-2xl bg-white dark:bg-slate-800 shadow-md"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-slate-800 dark:text-slate-200">Projects</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <motion.div
                whileHover={{ scale: 1.02 }}
                key={p.title}
                className="p-5 border rounded-xl bg-slate-50 dark:bg-slate-900 shadow"
              >
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm mt-1 text-slate-600 dark:text-slate-300">{p.summary}</p>
                <div className="flex gap-2 mt-2 overflow-x-auto">
                  {p.screenshots.map((s, i) => (
                    <Image
                      key={i}
                      src={s}
                      alt={p.title + i}
                      width={280}
                      height={160}
                      className="rounded"
                    />
                  ))}
                </div>
                <div className="text-sm mt-2">Tech: {p.tech.join(', ')}</div>
                <a
                  href={p.repo}
                  target="_blank"
                  className="mt-2 inline-block text-sm px-3 py-1 bg-emerald-500 hover:bg-emerald-600 text-white rounded"
                >
                  View repo
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* EDUCATION */}
        <motion.section
          id="education"
          className="p-8 rounded-2xl bg-violet-50 dark:bg-violet-900/30 shadow-md"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-violet-800 dark:text-violet-300">Education</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HERO.education.map((e, i) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={i}
                className="p-5 bg-white dark:bg-slate-800 border rounded-xl shadow"
              >
                <div className="font-medium">{e.degree}</div>
                <div className="text-sm text-slate-600 dark:text-slate-300">
                  {e.institution} {e.cgpa && `• CGPA ${e.cgpa}`}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CERTIFICATIONS (cards) */}
        <motion.section
          id="certifications"
          className="p-8 rounded-2xl bg-rose-50 dark:bg-rose-900/30 shadow-md"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-rose-800 dark:text-rose-300">Certifications</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HERO.certifications.map((c, i) => (
              <motion.div
                whileHover={{ scale: 1.03 }}
                key={i}
                className="p-5 bg-white dark:bg-slate-800 border rounded-xl shadow flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-medium">{c.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{c.issuer}</p>
                </div>
                <a
                  href={c.link}
                  target="_blank"
                  className="mt-3 inline-block text-sm px-3 py-1 bg-rose-500 hover:bg-rose-600 text-white rounded text-center"
                >
                  View Certificate
                </a>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CONTACT (2-column grid) */}
        <motion.section
          id="contact"
          className="p-8 rounded-2xl bg-cyan-50 dark:bg-cyan-900/30 shadow-md"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-cyan-800 dark:text-cyan-300">Contact</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left side: contact info */}
            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Mail size={16} />{' '}
                <a href={`mailto:${HERO.email}`} className="text-sky-600">
                  {HERO.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} /> {HERO.phone}
              </div>
              <div className="flex items-center gap-2">
                <Linkedin size={16} />{' '}
                <a href={HERO.linkedin} target="_blank" className="text-sky-600">
                  {HERO.linkedin}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={16} />{' '}
                <a href={HERO.github} target="_blank" className="text-sky-600">
                  {HERO.github}
                </a>
              </div>
            </div>

            {/* Right side: location and resume */}
            <div className="flex flex-col justify-between">
              <div className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                <MapPin size={16} /> {HERO.location}
              </div>
              <div className="mt-4">
                <a
                  href={RESUME.url}
                  target="_blank"
                  className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded inline-block text-sm"
                >
                  View Resume
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
