import { projects } from '../data/profile'
import { GitHubIcon } from './Icons'
import { Button, Chip, Photo, SectionHeading } from './ui'

export default function Projects() {
  const [featured, ...others] = projects
  // Supports either `links: [{ label, url }]` or a single `link: 'https://…'`
  const featuredLinks = (featured.links ?? (featured.link ? [{ label: 'View Project', url: featured.link }] : [])).filter(
    (l) => l.url,
  )

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
      <SectionHeading
        title="My"
        highlight="Projects"
        subtitle="Full-cycle prototypes across web, mobile and embedded systems — designed, built and tested."
      />

      <article className="grid overflow-hidden rounded-3xl bg-surface lg:grid-cols-[1.1fr_1fr]">
        <Photo
          src={featured.image}
          alt={`${featured.title} app screenshots`}
          label={`[${featured.title} app screenshots]`}
          className="min-h-72 w-full rounded-none! border-0!"
        />
        <div className="flex flex-col gap-4 p-8 md:p-12">
          <div className="flex flex-wrap gap-2">
            <Chip variant="accent">{featured.badge}</Chip>
            <Chip variant="muted">{featured.period}</Chip>
          </div>
          <h3 className="text-5xl font-bold text-headline">{featured.title}</h3>
          <p className="leading-relaxed">{featured.description}</p>
          <p>
            <span className="text-accent">Role: </span>
            <span className="text-headline">{featured.role}</span>
          </p>
          <ul className="flex flex-wrap gap-2">
            {featured.tags.map((t) => (
              <li key={t}>
                <Chip>{t}</Chip>
              </li>
            ))}
          </ul>
          {featuredLinks.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-3">
              {featuredLinks.map(({ label, url }, i) => (
                <Button
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  variant={i === 0 ? 'primary' : 'outline'}
                  icon={GitHubIcon}
                >
                  {label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </article>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {others.map((p, i) => {
          const Wrapper = p.link ? 'a' : 'article'
          return (
            <Wrapper
              key={i}
              {...(p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
              className="overflow-hidden rounded-3xl bg-surface transition-transform hover:-translate-y-1"
            >
              <Photo src={p.image} alt={p.title} label="[Project image]" className="h-60 w-full rounded-none! border-0!" />
              <div className="p-7">
                <p className="text-[13px] font-medium tracking-[0.08em] text-accent uppercase">{p.category}</p>
                <h3 className="mt-2 text-2xl font-semibold text-headline">{p.title}</h3>
                <p className="mt-2 leading-relaxed">{p.description}</p>
              </div>
            </Wrapper>
          )
        })}
      </div>
    </section>
  )
}
