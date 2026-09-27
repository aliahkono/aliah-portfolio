import { useState } from 'react'
import { profile } from '../data/profile'
import { CloseIcon, MenuIcon } from './Icons'

const links = ['Home', 'About', 'Education', 'Projects', 'Skills', 'Contact']

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-header/95 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 lg:px-10">
        <a href="#home" className="text-xl font-semibold text-accent">
          {profile.handle}
        </a>

        <nav aria-label="Main" className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-[15px] text-headline transition-colors hover:text-accent">
              {l}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg text-headline md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <CloseIcon className="size-6" /> : <MenuIcon className="size-6" />}
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="flex flex-col border-t border-line px-6 pb-4 md:hidden">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="py-3 text-base text-headline hover:text-accent"
            >
              {l}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
