// Small building blocks shared by the sections.

export function SectionHeading({ title, highlight, subtitle }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      <h2 className="text-4xl font-bold text-headline md:text-5xl">
        {title} <span className="text-accent">{highlight}</span>
      </h2>
      {subtitle && <p className="mt-3 text-base">{subtitle}</p>}
    </div>
  )
}

export function Chip({ children, variant = 'soft' }) {
  const styles = {
    soft: 'bg-surface-2 text-paragraph',
    outline: 'border border-accent text-headline',
    accent: 'bg-accent text-bg font-medium',
    muted: 'border border-line text-paragraph',
  }
  return <span className={`inline-block rounded-full px-3.5 py-1.5 text-sm ${styles[variant]}`}>{children}</span>
}

// Shows an image when `src` is set, otherwise a dashed placeholder box with a label.
export function Photo({ src, alt, label, className = '' }) {
  if (src) return <img src={src} alt={alt} className={`object-cover ${className}`} loading="lazy" />
  return (
    <div
      role="img"
      aria-label={alt}
      className={`grid place-items-center border-2 border-dashed border-line bg-surface-2 text-center text-xs font-medium tracking-[0.08em] text-paragraph uppercase ${className}`}
    >
      {label}
    </div>
  )
}

export function Button({ href, children, variant = 'primary', icon: Icon, ...rest }) {
  const styles = {
    primary: 'bg-accent text-bg hover:bg-accent-strong',
    outline: 'border-[1.5px] border-accent text-accent hover:bg-accent hover:text-bg',
    ghost: 'border-[1.5px] border-line text-headline hover:border-accent hover:text-accent',
  }
  return (
    <a
      href={href}
      className={`inline-flex h-14 items-center justify-center gap-2.5 rounded-[10px] px-7 font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${styles[variant]}`}
      {...rest}
    >
      {Icon && <Icon className="size-5" />}
      {children}
    </a>
  )
}
