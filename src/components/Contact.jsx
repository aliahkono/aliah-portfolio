import { profile } from '../data/profile'
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'
import { Button } from './ui'

export default function Contact() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="bg-header">
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-12 text-center lg:px-10">
        <h2 className="text-4xl font-bold text-headline md:text-5xl">
          Let’s Get To Know <span className="text-accent">Each Other!</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          I’m open to internship opportunities in software development, UI/UX design, and QA. I’d love to hear from you.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button href={`mailto:${profile.email}`} icon={MailIcon}>
            {profile.email}
          </Button>
          <Button href={profile.linkedin} variant="ghost" icon={LinkedInIcon} target="_blank" rel="noreferrer">
            LinkedIn
          </Button>
          <Button href={profile.github} variant="ghost" icon={GitHubIcon} target="_blank" rel="noreferrer">
            GitHub
          </Button>
          <Button href={`tel:${profile.phone.replace(/\s/g, '')}`} variant="ghost" icon={PhoneIcon}>
            {profile.phone}
          </Button>
        </div>

        <p className="mt-16 border-t border-line pt-7 text-sm">© {year} AC.Divinagracia</p>
      </div>
    </footer>
  )
}
