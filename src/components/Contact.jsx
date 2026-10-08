import { profile } from '../data/profile'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'
import { Button } from './ui'

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
  { label: 'LinkedIn', value: 'aliah-coleen-divinagracia', href: profile.linkedin, Icon: LinkedInIcon, external: true },
  { label: 'GitHub', value: profile.github.replace('https://', ''), href: profile.github, Icon: GitHubIcon, external: true },
  { label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}`, Icon: PhoneIcon },
]

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="px-5 pt-8 pb-10 lg:px-10">
      <div
        data-reveal
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-navy px-6 py-16 text-center text-on-navy-muted md:px-12 md:py-24"
      >
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-accent/20 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 -left-24 size-72 rounded-full bg-accent/10 blur-3xl" />

        <h2 className="relative text-4xl leading-tight font-bold text-on-navy md:text-6xl">
          Let’s Get To Know <span className="text-accent">Each Other!</span>
        </h2>
        <p className="relative mx-auto mt-5 max-w-2xl text-lg">
          I’m open to internship opportunities in software development, UI/UX design and QA. I’d love to hear from you.
        </p>

        <div className="relative mt-9 flex flex-wrap justify-center gap-3">
          <Button href={`mailto:${profile.email}`} variant="accent" icon={ArrowRightIcon}>
            Say hello
          </Button>
          <Button href={profile.resume} variant="on-navy" icon={DownloadIcon} download>
            Download CV
          </Button>
        </div>

        <ul className="relative mx-auto mt-12 grid max-w-5xl gap-3 text-left sm:grid-cols-2 lg:grid-cols-4">
          {channels.map(({ label, value, href, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="flex h-full items-center gap-3.5 rounded-2xl bg-navy-2 p-4 transition hover:-translate-y-0.5 hover:ring-2 hover:ring-accent/70"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-accent text-navy">
                  <Icon className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold tracking-[0.12em] text-accent uppercase">{label}</span>
                  <span className="block truncate text-sm text-on-navy">{value}</span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-8 flex max-w-7xl flex-col items-center justify-between gap-2 text-sm text-muted sm:flex-row">
        <p>© {year} {profile.name}</p>
        <a href="#home" className="font-medium text-ink hover:text-accent-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
