import { profile } from '../data/profile'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { Button } from './ui'
import { ToolLogo } from './ToolLogos'
import { useTypewriter } from '../hooks/useTypewriter'

// Tile positions copied from the Figma "Home" frame, as % of each cluster.
// [left %, top %, rotation°] — rotations softened slightly so labels stay readable.
const LEFT_LAYOUT = [
  [0, 52, -16],
  [17, 6, 3.5],
  [31, 56, -3],
  [47, 8, 14],
  [61, 60, 10],
  [79, 22, -5],
]
const RIGHT_LAYOUT = [
  [0, 56, 10],
  [14, 4, -14],
  [28, 56, -8],
  [45, 8, 16],
  [62, 48, -14],
  [80, 0, -6],
]

function Tile({ label, style, delay }) {
  return (
    <li
      className="group absolute grid aspect-square w-[var(--tile)] place-items-center"
      style={{ ...style, animationDelay: delay }}
    >
      <span
        className="flex size-full animate-float flex-col items-center justify-center gap-[8%] rounded-[22%] border border-line bg-tile p-2 text-center text-[clamp(10px,0.8vw,13px)] leading-tight font-medium text-ink shadow-soft transition-transform duration-300 group-hover:rotate-0! group-hover:scale-105"
        style={{ rotate: style.rotate, animationDelay: delay }}
      >
        <ToolLogo name={label} className="size-[42%] shrink-0" />
        <span>{label}</span>
      </span>
    </li>
  )
}

function Cluster({ tools, layout, side }) {
  return (
    <ul
      aria-label={side === 'left' ? 'Design & productivity tools' : 'Languages & frameworks'}
      className={`absolute top-0 bottom-6 w-[34%] ${
        side === 'left' ? 'left-6 xl:left-10' : 'right-6 xl:right-10'
      }`}
    >
      {tools.map((t, i) => {
        const [left, top, rot] = layout[i % layout.length]
        return <Tile key={t} label={t} delay={`${i * -0.9}s`} style={{ left: `${left}%`, top: `${top}%`, rotate: `${rot}deg` }} />
      })}
    </ul>
  )
}

const socials = [
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon },
]

export default function Hero() {
  const allTools = [...profile.heroTools.left, ...profile.heroTools.right]
  const role = useTypewriter(profile.roles)

  return (
    <section
      id="home"
      className="relative overflow-hidden [--tile:clamp(76px,6.2vw,118px)] lg:flex lg:min-h-[max(760px,calc(100svh-5rem))] lg:flex-col"
    >
      {/* soft pink glow behind the illustration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-[60%] w-[min(720px,80vw)] -translate-x-1/2 rounded-full bg-accent/35 blur-3xl dark:bg-accent/15"
      />

      {/* not `relative` on lg, so the illustration anchors to the bottom of the whole section */}
      <div className="relative mx-auto w-full max-w-[1600px] px-5 pt-8 lg:static lg:px-10 lg:pt-12">
        <h1 className="relative z-0 text-center text-[clamp(2.6rem,calc(8vw-0.5rem),9rem)] leading-[0.95] font-extrabold tracking-[-0.03em] text-ink lg:whitespace-nowrap">
          {profile.name}
        </h1>

        {/* Left column: who I am + calls to action */}
        <div className="relative z-20 mx-auto mt-6 flex max-w-xl flex-col items-center gap-5 text-center lg:mx-0 lg:mt-8 lg:max-w-[31%] lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-semibold tracking-wide text-ink">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>
          {/* Typing line — min-height fits two lines so long roles don't make the page jump */}
          <p className="min-h-[2.75em] text-2xl leading-snug font-semibold text-ink md:text-[1.75rem]">
            <span aria-hidden="true">
              I am a <span className="text-accent-ink">{role}</span>
              <span className="ml-1 inline-block h-[1em] w-[3px] translate-y-1 animate-blink bg-accent-ink" />
            </span>
            <span className="sr-only">I am a {profile.roles.join(', ')}</span>
          </p>
          <p className="text-base leading-relaxed md:text-lg">{profile.pitch}</p>
          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <Button href="#projects" icon={ArrowRightIcon}>
              View my work
            </Button>
            <Button href={profile.resume} variant="outline" icon={DownloadIcon} download>
              Download CV
            </Button>
          </div>
          <ul className="flex gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-line bg-surface text-ink transition hover:border-accent-ink hover:text-accent-ink"
                >
                  <Icon className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Illustration — overlaps the name on large screens like the Figma frame */}
        <img
          src={profile.illustration}
          alt="Illustration of Aliah looking up and ahead"
          width="352"
          height="620"
          fetchPriority="high"
          className="relative z-10 mx-auto mt-6 h-[380px] w-auto select-none sm:h-[460px] lg:absolute lg:bottom-0 lg:left-1/2 lg:mt-0 lg:h-[min(84%,800px)] lg:-translate-x-1/2"
          draggable="false"
        />

        {/* Mobile / tablet: tools as a tidy wrap of tiles under the illustration */}
        <ul
          aria-label="Tools and languages"
          className="relative z-20 -mt-6 flex flex-wrap justify-center gap-2.5 pb-12 lg:hidden"
        >
          {allTools.map((t, i) => (
            <li
              key={t}
              className="flex items-center gap-2 rounded-2xl border border-line bg-tile px-3.5 py-2 text-sm font-medium text-ink shadow-soft"
              style={{ rotate: `${i % 2 ? 3 : -3}deg` }}
            >
              <ToolLogo name={t} className="size-5 shrink-0" />
              {t}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom band for the floating tiles — in the normal flow so they never cover the buttons */}
      <div className="relative mt-auto hidden h-[calc(var(--tile)*2.8)] shrink-0 lg:block">
        <Cluster tools={profile.heroTools.left} layout={LEFT_LAYOUT} side="left" />
        <Cluster tools={profile.heroTools.right} layout={RIGHT_LAYOUT} side="right" />
      </div>
    </section>
  )
}
