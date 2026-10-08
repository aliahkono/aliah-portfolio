import { useEffect, useState } from 'react'

// "Portfolio loading" splash from the Figma wireframe.
// Shows once per browser session, waits for the page to finish loading, then fades out.
export default function Loader() {
  const [state, setState] = useState(() => {
    try {
      return sessionStorage.getItem('seenLoader') ? 'gone' : 'show'
    } catch {
      return 'show'
    }
  })

  useEffect(() => {
    if (state !== 'show') return
    const start = Date.now()
    const finish = () => {
      const wait = Math.max(0, 1200 - (Date.now() - start))
      setTimeout(() => setState('hide'), wait)
    }
    if (document.readyState === 'complete') finish()
    else window.addEventListener('load', finish, { once: true })
    const safety = setTimeout(() => setState('hide'), 4000)
    return () => {
      window.removeEventListener('load', finish)
      clearTimeout(safety)
    }
  }, [state])

  useEffect(() => {
    if (state !== 'hide') return
    try {
      sessionStorage.setItem('seenLoader', '1')
    } catch {
      /* ignore */
    }
    const t = setTimeout(() => setState('gone'), 600)
    return () => clearTimeout(t)
  }, [state])

  if (state === 'gone') return null

  return (
    <div
      role="status"
      aria-live="polite"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-8 bg-bg transition-opacity duration-500 ${
        state === 'hide' ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative grid size-40 place-items-center sm:size-48">
        <span className="absolute inset-0 rounded-full border-4 border-line" />
        <span className="absolute inset-0 animate-spin-slow rounded-full border-4 border-transparent border-t-accent-ink" />
        <span className="grid size-32 place-items-center rounded-full bg-navy text-5xl font-bold tracking-tight text-accent sm:size-40 sm:text-6xl">
          AC
        </span>
      </div>
      <div className="flex flex-col items-center gap-3">
        <p className="text-sm font-medium tracking-[0.3em] text-ink">PORTFOLIO LOADING</p>
        <span className="relative h-1 w-40 overflow-hidden rounded-full bg-line">
          <span className="absolute inset-y-0 left-0 w-1/3 animate-load rounded-full bg-accent-ink" />
        </span>
      </div>
    </div>
  )
}
