import { education } from '../data/profile'
import { CheckIcon, MapPinIcon } from './Icons'
import { Chip, Photo, SectionHeading } from './ui'

export default function Education() {
  const { school, degree, location, period, logo, honors, careerGoal, certifications, involvement } = education

  return (
    <section id="education" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading title="My" highlight="Education" subtitle="Where I’m building my foundation in software engineering." />

        <div className="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          {/* School — navy card with pink heading accent */}
          <article data-reveal className="relative overflow-hidden rounded-[2rem] bg-navy p-8 text-on-navy-muted md:p-10">
            <span aria-hidden="true" className="absolute top-0 left-0 h-1.5 w-full bg-accent" />
            <div className="flex flex-col gap-7 sm:flex-row sm:items-center">
              <Photo
                src={logo}
                alt={`${school} logo`}
                label="[School logo]"
                className="size-28 shrink-0 rounded-full bg-on-navy object-contain! p-2 ring-4 ring-accent md:size-32"
              />
              <div>
                <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">{period}</p>
                <h3 className="mt-2 text-2xl font-bold text-on-navy md:text-3xl">{school}</h3>
                <p className="mt-2 leading-relaxed">{degree}</p>
                <p className="mt-2 flex items-center gap-1.5 text-sm">
                  <MapPinIcon className="size-4 text-accent" /> {location}
                </p>
              </div>
            </div>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {honors.map((h) => (
                <li key={h}>
                  <Chip variant="navy-outline">{h}</Chip>
                </li>
              ))}
            </ul>
          </article>

          {/* Career goal */}
          <article data-reveal className="flex flex-col justify-center rounded-[2rem] bg-accent p-8 text-navy md:p-10">
            <p className="text-xs font-semibold tracking-[0.14em] uppercase opacity-80">My future career</p>
            <h3 className="mt-2 text-2xl font-bold md:text-3xl">{careerGoal.title}</h3>
            <p className="mt-3 leading-relaxed">{careerGoal.text}</p>
          </article>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <article data-reveal className="rounded-[2rem] border border-line bg-surface p-8 md:p-10">
            <h3 className="text-xl font-bold text-ink">
              Certifications <span className="text-accent-ink">&amp; recognitions</span>
            </h3>
            <ul className="mt-6 divide-y divide-line">
              {certifications.map(({ title, meta }) => (
                <li key={title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <CheckIcon className="mt-0.5 size-5 shrink-0 text-accent-ink" />
                  <div>
                    <p className="font-medium text-ink">{title}</p>
                    <p className="text-sm text-muted">{meta}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article data-reveal className="rounded-[2rem] bg-navy p-8 text-on-navy-muted md:p-10">
            <h3 className="text-xl font-bold text-on-navy">
              Campus <span className="text-accent">involvement</span>
            </h3>
            <ol className="mt-6 space-y-6 border-l-2 border-navy-2 pl-6">
              {involvement.map(({ role, org, period: p }) => (
                <li key={role} className="relative">
                  <span aria-hidden="true" className="absolute top-1.5 -left-[31px] size-3 rounded-full bg-accent ring-4 ring-navy" />
                  <p className="font-semibold text-on-navy">{role}</p>
                  <p className="text-sm">{org}</p>
                  <p className="text-xs text-accent">{p}</p>
                </li>
              ))}
            </ol>
          </article>
        </div>
      </div>
    </section>
  )
}
