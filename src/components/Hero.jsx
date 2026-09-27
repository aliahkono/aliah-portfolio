import { profile } from '../data/profile'
import { useTypewriter } from '../hooks/useTypewriter'
import { DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon } from './Icons'
import { Button, Photo } from './ui'

const socials = [
  { label: 'GitHub', href: profile.github, Icon: GitHubIcon },
  { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon },
  { label: 'Email', href: `mailto:${profile.email}`, Icon: MailIcon },
]

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="home" className="mx-auto grid max-w-7xl items-center gap-16 px-6 pt-36 pb-24 lg:grid-cols-[1fr_auto] lg:px-10 lg:pt-44 lg:pb-32">
      <div className="max-w-2xl">
        <p className="text-2xl font-semibold text-headline md:text-3xl">Hi, I’m</p>
        <h1 className="mt-2 text-5xl leading-[1.1] font-bold text-headline md:text-7xl">{profile.name}</h1>
        <p className="mt-4 text-2xl font-semibold text-headline md:text-3xl">
          I am a <span className="text-accent">{role}</span>
          <span aria-hidden="true" className="ml-1 inline-block h-[1em] w-[3px] translate-y-1 animate-blink bg-accent" />
          <span className="sr-only">{profile.roles.join(', ')}</span>
        </p>
        <p className="mt-6 text-lg leading-relaxed">{profile.intro}</p>

        <ul className="mt-8 flex gap-3.5">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid size-13 place-items-center rounded-full border-[1.5px] border-accent bg-surface-2 text-accent transition-colors hover:bg-accent hover:text-bg"
              >
                <Icon className="size-5.5" />
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="#contact">Let’s Talk</Button>
          <Button href={profile.resume} variant="outline" icon={DownloadIcon} download>
            Download CV
          </Button>
        </div>
      </div>

      <Photo
        src={profile.photo}
        alt={`Portrait of ${profile.name}`}
        label="[Your photo]"
        className="mx-auto size-72 rounded-full ring-8 ring-accent shadow-[0_0_60px_4px_rgba(238,187,195,0.45)] sm:size-96 lg:size-[26rem]"
      />
    </section>
  )
}
