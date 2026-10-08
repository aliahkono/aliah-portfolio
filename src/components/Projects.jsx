import { projects } from '../data/profile'
import { ArrowRightIcon, GitHubIcon } from './Icons'
import { Button, Chip, Photo, SectionHeading } from './ui'

export default function Projects() {
  const [featured, ...others] = projects
  // Supports either `links: [{ label, url }]` or a single `link: 'https://…'`
  const featuredLinks = (featured.links ?? (featured.link ? [{ label: 'View Project', url: featured.link }] : [])).filter(
    (l) => l.url,
  )

  return (
    <section id="projects" className="bg-bg-alt py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <SectionHeading
          title="My"
          highlight="Projects"
          subtitle="Full-cycle prototypes across web, mobile and embedded systems — designed, built and tested."
        />

        {/* Featured project */}
        <article data-reveal className="grid overflow-hidden rounded-[2rem] bg-navy text-on-navy-muted shadow-soft lg:grid-cols-[1.1fr_1fr]">
          <div className="relative bg-navy-2 p-5 md:p-8">
            <Photo
              src={featured.image}
              alt={`${featured.title} app screenshots`}
              label={`[${featured.title} app screenshots]`}
              className="h-full min-h-72 w-full rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-5 p-8 md:p-12">
            <div className="flex flex-wrap gap-2">
              <Chip variant="accent">{featured.badge}</Chip>
              <Chip variant="muted">{featured.period}</Chip>
            </div>
            <h3 className="text-5xl font-extrabold tracking-tight text-on-navy md:text-6xl">{featured.title}</h3>
            <p className="leading-relaxed">{featured.description}</p>
            <p className="rounded-2xl bg-navy-2 px-4 py-3 text-sm">
              <span className="font-semibold text-accent">My role: </span>
              <span className="text-on-navy">{featured.role}</span>
            </p>
            <ul aria-label="Technologies" className="flex flex-wrap gap-2">
              {featured.tags.map((t) => (
                <li key={t}>
                  <Chip variant="navy">{t}</Chip>
                </li>
              ))}
            </ul>
            {featuredLinks.length > 0 && (
              <div className="mt-auto flex flex-wrap gap-3 pt-2">
                {featuredLinks.map(({ label, url }, i) => (
                  <Button
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    variant={i === 0 ? 'accent' : 'on-navy'}
                    icon={GitHubIcon}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            )}
          </div>
        </article>

        {/* Other projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((p, i) => {
            const Wrapper = p.link ? 'a' : 'article'
            return (
              <Wrapper
                key={i}
                data-reveal
                {...(p.link ? { href: p.link, target: '_blank', rel: 'noreferrer' } : {})}
                className="group overflow-hidden rounded-[2rem] border border-line bg-surface transition hover:-translate-y-1 hover:shadow-soft"
              >
                <div className="p-4 pb-0">
                  <Photo src={p.image} alt={p.title} label="[Project image]" className="h-56 w-full rounded-2xl" />
                </div>
                <div className="p-7">
                  <p className="text-xs font-semibold tracking-[0.14em] text-accent-ink uppercase">{p.category}</p>
                  <h3 className="mt-2 flex items-center justify-between gap-3 text-2xl font-bold text-ink">
                    {p.title}
                    {p.link && <ArrowRightIcon className="size-5 shrink-0 transition group-hover:translate-x-1" />}
                  </h3>
                  <p className="mt-2 leading-relaxed">{p.description}</p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
