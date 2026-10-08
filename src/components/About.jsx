import { useRef, useState } from 'react'
import { about, profile } from '../data/profile'
import { iconByName } from './Icons'
import { Photo, SectionHeading } from './ui'

const tabNames = Object.keys(about.tabs)

export default function About() {
  const [active, setActive] = useState(tabNames[0])
  const tabRefs = useRef([])

  // Arrow keys move between tabs (standard tablist behaviour)
  const onKeyDown = (e, i) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    const next = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabNames.length) % tabNames.length
    setActive(tabNames[next])
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="about" className="bg-bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading title="About" highlight="Me" subtitle="A quick look at who I am and what I bring to a team." />

        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-16">
          {/* Photo with offset accent frame */}
          <div data-reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div aria-hidden="true" className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-accent" />
            <Photo
              src={profile.aboutPhoto}
              alt={`Photo of ${profile.name}`}
              label="[About photo]"
              className="relative aspect-[4/5] w-full rounded-[2rem]"
            />
          </div>

          {/* Navy info card with tabs */}
          <div data-reveal className="rounded-[2rem] bg-navy p-7 text-on-navy-muted shadow-soft md:p-10">
            <p className="text-lg leading-relaxed text-on-navy md:text-xl">{about.paragraph}</p>

            <div role="tablist" aria-label="About details" className="mt-8 inline-flex flex-wrap gap-1 rounded-full bg-navy-2 p-1.5">
              {tabNames.map((name, i) => {
                const selected = name === active
                return (
                  <button
                    key={name}
                    ref={(el) => (tabRefs.current[i] = el)}
                    role="tab"
                    id={`tab-${name}`}
                    aria-selected={selected}
                    aria-controls={`panel-${name}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(name)}
                    onKeyDown={(e) => onKeyDown(e, i)}
                    className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors md:text-base ${
                      selected ? 'bg-accent text-navy' : 'text-on-navy-muted hover:text-on-navy'
                    }`}
                  >
                    {name}
                  </button>
                )
              })}
            </div>

            <dl
              role="tabpanel"
              id={`panel-${active}`}
              aria-labelledby={`tab-${active}`}
              className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2"
            >
              {about.tabs[active].map(({ label, value }) => (
                <div key={label} className="border-l-2 border-accent/60 pl-4">
                  <dt className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">{label}</dt>
                  <dd className="mt-1.5 text-on-navy">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div data-reveal className="mt-16">
          <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase">When I’m not coding</p>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.hobbies.map(({ icon, name, text }) => {
              const Icon = iconByName[icon]
              return (
                <li
                  key={name}
                  className="flex gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:-translate-y-1 hover:shadow-soft"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent/40 text-ink">
                    <Icon />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{name}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed">{text}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
