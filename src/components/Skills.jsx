import { skills } from '../data/profile'
import { iconByName } from './Icons'
import { Chip, SectionHeading } from './ui'

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading title="My" highlight="Skills" subtitle="What I bring to a software team." />

      <div className="grid gap-6 md:grid-cols-3">
        {skills.groups.map(({ icon, name, items }) => {
          const Icon = iconByName[icon]
          return (
            <article key={name} className="rounded-3xl bg-surface p-8">
              <span className="grid size-15 place-items-center rounded-full bg-accent text-bg">
                <Icon className="size-6.5" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-headline">{name}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {items.map((s) => (
                  <li key={s}>
                    <Chip>{s}</Chip>
                  </li>
                ))}
              </ul>
            </article>
          )
        })}
      </div>

      <div className="mt-14 text-center">
        <p className="text-[13px] font-medium tracking-[0.08em] text-accent uppercase">Soft skills</p>
        <ul className="mt-4 flex flex-wrap justify-center gap-2.5">
          {skills.soft.map((s) => (
            <li key={s}>
              <Chip variant="outline">{s}</Chip>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
