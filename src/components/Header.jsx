import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const ids = sections.map((s) => s.id)

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(ids)
  const { theme, toggle } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 backdrop-blur-md transition-[background-color,box-shadow] ${
        scrolled ? 'bg-nav shadow-[0_1px_0_var(--line)]' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-10">
        {/* Logo + wordmark */}
        <a href="#home" className="flex items-center gap-3" aria-label={`${profile.name} — home`}>
          <span className="grid size-11 place-items-center rounded-full bg-navy text-base font-bold text-accent ring-2 ring-accent/70 ring-offset-2 ring-offset-bg">
            {profile.logoText}
          </span>
          <span className="text-xl font-semibold tracking-tight text-ink">{profile.wordmark}</span>
        </a>

        {/* Desktop pill nav */}
        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full border border-line bg-surface/70 p-1.5 lg:flex">
          {sections.map(({ id, label }) => {
            const isActive = active === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-5 py-2 text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-navy text-on-navy dark:bg-accent dark:text-navy'
                    : 'text-text hover:bg-bg-alt hover:text-ink'
                }`}
              >
                {label}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Theme toggle ([Sun] in the wireframe) */}
          <button
            type="button"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-accent-ink hover:text-accent-ink"
          >
            {theme === 'dark' ? <SunIcon className="size-5" /> : <MoonIcon className="size-5" />}
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <CloseIcon className="size-5" /> : <MenuIcon className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="border-t border-line bg-bg px-5 pb-5 lg:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {sections.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={() => setOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-medium ${
                    active === id ? 'bg-navy text-on-navy dark:bg-accent dark:text-navy' : 'text-ink'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
