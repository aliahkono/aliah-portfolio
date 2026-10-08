// Small building blocks shared by the sections.

export function SectionHeading({ title, highlight, subtitle }) {
  return (
    <div data-reveal className="mx-auto mb-14 max-w-2xl text-center">
      <h2 className="text-4xl font-bold tracking-tight text-ink md:text-6xl">
        {title} <span className="text-accent-ink">{highlight}</span>
      </h2>
      {subtitle && <p className="mt-4 text-base text-text md:text-lg">{subtitle}</p>}
    </div>
  )
}

// Small uppercase label used above titles.
export function Eyebrow({ children, onNavy = false }) {
  return (
    <p className={`text-xs font-semibold tracking-[0.14em] uppercase ${onNavy ? 'text-accent' : 'text-accent-ink'}`}>
      {children}
    </p>
  )
}

export function Chip({ children, variant = 'soft' }) {
  const styles = {
    // on light page backgrounds
    soft: 'bg-bg-alt text-ink',
    outline: 'border border-accent-ink/60 text-ink',
    // on navy cards
    navy: 'bg-navy-2 text-on-navy-muted',
    'navy-outline': 'border border-accent/70 text-accent',
    accent: 'bg-accent text-navy font-medium',
    muted: 'border border-on-navy-muted/40 text-on-navy-muted',
  }
  return <span className={`inline-block rounded-full px-3.5 py-1.5 text-sm ${styles[variant]}`}>{children}</span>
}

// Shows an image when `src` is set, otherwise a dashed placeholder box with a label.
export function Photo({ src, alt, label, className = '' }) {
  if (src) return <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" decoding="async" />
  return (
    <div
      role="img"
      aria-label={alt}
      className={`grid place-items-center border-2 border-dashed border-line bg-bg-alt text-center text-xs font-medium tracking-[0.08em] text-muted uppercase ${className}`}
    >
      {label}
    </div>
  )
}

export function Button({ href, children, variant = 'primary', icon: Icon, className = '', ...rest }) {
  const styles = {
    primary: 'bg-navy text-on-navy hover:bg-navy-2 dark:bg-accent dark:text-navy dark:hover:brightness-95',
    accent: 'bg-accent text-navy hover:brightness-95',
    outline: 'border-[1.5px] border-ink/80 text-ink hover:bg-ink hover:text-bg',
    'on-navy': 'border-[1.5px] border-on-navy-muted/50 text-on-navy hover:border-accent hover:text-accent',
  }
  return (
    <a
      href={href}
      className={`inline-flex h-12 items-center justify-center gap-2.5 rounded-full px-6 text-[15px] font-semibold transition md:h-13 md:px-7 ${styles[variant]} ${className}`}
      {...rest}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </a>
  )
}
