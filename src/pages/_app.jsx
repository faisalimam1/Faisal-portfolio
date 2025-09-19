
import '../styles/globals.css'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    const saved = typeof window !== 'undefined' && localStorage.getItem('theme')
    if(saved) setTheme(saved)
    else setTheme('light')
    setMounted(true)
    const t = setTimeout(()=> setLoading(false), 700)
    return ()=> clearTimeout(t)
  },[])

  useEffect(()=>{
    if(!mounted) return
    if(theme==='dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  },[theme,mounted])

  if(loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900">
      <div className="flex flex-col items-center gap-4">
        <div className="w-14 h-14 border-4 border-sky-600 rounded-full animate-spin"></div>
        <div className="text-slate-700 dark:text-slate-300 font-semibold">FAISAL IMAM</div>
      </div>
    </div>
  )

  return <Component {...pageProps} theme={theme} setTheme={setTheme} />
}
