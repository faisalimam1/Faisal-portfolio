import '../styles/globals.css'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const SITE_URL = 'https://faisal-portfolio-roan.vercel.app'
const TITLE = 'Faisal Imam — AI/ML Engineer'
const DESCRIPTION =
  'AI/ML Engineer building and shipping RAG systems, fine-tuned transformers and multimodal AI. Final-year CS student. IEEE-published, award-winning projects.'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const saved = typeof window !== 'undefined' && localStorage.getItem('theme')
    if (saved) setTheme(saved)
    else setTheme('light')
    setMounted(true)
    const t = setTimeout(() => setLoading(false), 700)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!mounted) return
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme, mounted])

  return (
    <div className={inter.variable}>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/assets/faisal_dp.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={TITLE} />
        <meta name="twitter:description" content={DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/assets/faisal_dp.jpg`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
          <div className="flex flex-col items-center gap-4">
            <div className="w-14 h-14 border-4 border-transparent border-t-sky-500 border-r-indigo-500 rounded-full animate-spin"></div>
            <div className="text-lg font-extrabold gradient-text tracking-wide">FAISAL IMAM</div>
          </div>
        </div>
      ) : (
        <Component {...pageProps} theme={theme} setTheme={setTheme} />
      )}
    </div>
  )
}
