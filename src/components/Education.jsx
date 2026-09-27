import { education } from '../data/profile'
import { Chip, Photo, SectionHeading } from './ui'

export default function Education() {
  const { school, degree, location, period, logo, honors, careerGoal, certifications, involvement } = education

  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading title="My" highlight="Education" subtitle="Where I’m building my foundation in software engineering." />

      <div className="flex flex-col items-center gap-10 rounded-2xl bg-surface p-8 text-center md:flex-row md:p-12 md:text-left">
        <Photo
          src={logo}
          alt={`${school} logo`}
          label="[School logo]"
          className="size-40 shrink-0 rounded-full border-4! border-solid! border-accent! bg-headline object-contain! p-3 text-bg!"
        />
        <div>
          <p className="text-[13px] font-medium tracking-[0.08em] text-accent uppercase">{period}</p>
          <h3 className="mt-2 text-2xl font-semibold text-headline md:text-3xl">{school}</h3>
          <p className="mt-2 text-lg">
            {degree} · {location}
          </p>
          <ul className="mt-5 flex flex-wrap justify-center gap-3 md:justify-start">
            {honors.map((h) => (
              <li key={h}>
                <Chip variant="outline">{h}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line p-8 md:flex-row md:items-center md:gap-10">
        <div className="md:w-72 md:shrink-0">
          <p className="text-[13px] font-medium tracking-[0.08em] text-accent uppercase">My future career</p>
          <p className="mt-1 text-xl font-semibold text-headline">{careerGoal.title}</p>
        </div>
        <p className="leading-relaxed">{careerGoal.text}</p>
      </div>

      <h3 className="mt-16 text-xl font-semibold text-headline">Certifications & recognitions</h3>
      <ul className="mt-5 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {certifications.map(({ title, meta }) => (
          <li key={title} className="rounded-2xl bg-surface p-6">
            <span className="block h-1 w-8 rounded-full bg-accent" />
            <p className="mt-4 font-medium text-headline">{title}</p>
            <p className="mt-1 text-sm">{meta}</p>
          </li>
        ))}
        <li className="rounded-2xl bg-surface p-6">
          <span className="block h-1 w-8 rounded-full bg-accent" />
          <p className="mt-4 font-medium text-headline">Campus involvement</p>
          <ul className="mt-1 space-y-1 text-sm">
            {involvement.map(({ role, org, period: p }) => (
              <li key={role}>
                {role} · {org} <span className="text-paragraph/70">({p})</span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </section>
  )
}
