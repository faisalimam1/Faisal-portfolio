
export default function Navbar({theme,setTheme}){
  const toggle = ()=> setTheme(theme==='dark'?'light':'dark')
  return (
    <nav className="sticky top-0 z-40 bg-white/75 dark:bg-slate-900/75 backdrop-blur border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-medium text-lg">Portfolio</div>
        <div className="hidden md:flex gap-4 text-sm">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#certifications">Certifications</a>
          <a href="#contact">Contact</a>
        </div>
        <button onClick={toggle} className="px-3 py-1 border rounded">{theme==='dark'?'Light':'Dark'}</button>
      </div>
    </nav>
  )
}
