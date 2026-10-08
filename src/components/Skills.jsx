import { skills } from '../data/profile'
import { iconByName } from './Icons'
import { Chip, SectionHeading } from './ui'

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading title="My" highlight="Skills" subtitle="What I bring to a software team — from first sketch to tested release." />

        <div className="grid gap-6 md:grid-cols-3">
          {skills.groups.map(({ icon, name, text, items }, i) => {
            const Icon = iconByName[icon]
            return (
              <article
                key={name}
                data-reveal
                style={{ transitionDelay: `${i * 90}ms` }}
                className="flex flex-col rounded-[2rem] bg-navy p-8 text-on-navy-muted transition hover:-translate-y-1"
              >
                <span className="grid size-14 place-items-center rounded-2xl bg-accent text-navy">
                  <Icon className="size-6.5" />
                </span>
                <h3 className="mt-6 text-2xl font-bold text-on-navy">{name}</h3>
                {text && <p className="mt-2 leading-relaxed">{text}</p>}
                <ul className="mt-6 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li key={s}>
                      <Chip variant="navy">{s}</Chip>
                    </li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div data-reveal className="rounded-[2rem] border border-line bg-surface p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase">Tools I use daily</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.tools.map((s) => (
                <li key={s}>
                  <Chip>{s}</Chip>
                </li>
              ))}
            </ul>
          </div>
          <div data-reveal className="rounded-[2rem] border border-line bg-surface p-8">
            <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase">Soft skills</p>
            <ul className="mt-4 flex flex-wrap gap-2.5">
              {skills.soft.map((s) => (
                <li key={s}>
                  <Chip variant="outline">{s}</Chip>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
