import { useState } from 'react'
import { about, profile } from '../data/profile'
import { iconByName } from './Icons'
import { Photo } from './ui'

const tabNames = Object.keys(about.tabs)

export default function About() {
  const [active, setActive] = useState(tabNames[0])

  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <div className="grid gap-14 lg:grid-cols-[400px_1fr] lg:gap-18">
        <Photo
          src={profile.aboutPhoto}
          alt={`Photo of ${profile.name}`}
          label="[About photo]"
          className="aspect-[4/5] w-full max-w-md rounded-2xl"
        />

        <div>
          <h2 className="text-4xl font-bold text-headline md:text-5xl">
            About <span className="text-accent">Me</span>
          </h2>
          <p className="mt-6 leading-relaxed">{about.paragraph}</p>

          <div role="tablist" aria-label="About details" className="mt-10 flex gap-8 sm:gap-10">
            {tabNames.map((name) => {
              const selected = name === active
              return (
                <button
                  key={name}
                  role="tab"
                  id={`tab-${name}`}
                  aria-selected={selected}
                  aria-controls={`panel-${name}`}
                  onClick={() => setActive(name)}
                  className={`relative pb-2 text-lg font-semibold transition-colors sm:text-xl ${
                    selected ? 'text-headline' : 'text-paragraph hover:text-headline'
                  }`}
                >
                  {name}
                  <span
                    className={`absolute bottom-0 left-0 h-[3px] rounded-full bg-accent transition-all ${
                      selected ? 'w-12' : 'w-0'
                    }`}
                  />
                </button>
              )
            })}
          </div>

          <dl
            role="tabpanel"
            id={`panel-${active}`}
            aria-labelledby={`tab-${active}`}
            className="mt-8 grid gap-x-6 gap-y-5 sm:grid-cols-2"
          >
            {about.tabs[active].map(({ label, value }) => (
              <div key={label}>
                <dt className="text-[13px] font-medium tracking-[0.08em] text-accent uppercase">{label}</dt>
                <dd className="mt-1 text-headline">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="mt-16">
        <p className="text-[13px] font-medium tracking-[0.08em] text-accent uppercase">When I’m not coding</p>
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {about.hobbies.map(({ icon, name, text }) => {
            const Icon = iconByName[icon]
            return (
              <li key={name} className="flex gap-3.5 rounded-2xl bg-surface p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-surface-2 text-accent">
                  <Icon />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-headline">{name}</h3>
                  <p className="text-sm leading-relaxed">{text}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
