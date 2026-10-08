// Small stroke icons that inherit the current text color.
const base = {
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

const make = (paths) =>
  function Icon({ className = 'size-5' }) {
    return (
      <svg {...base} className={className}>
        {paths}
      </svg>
    )
  }

export const GitHubIcon = make(
  <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
)
export const LinkedInIcon = make(
  <>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M8 11v5M8 8v.01M12 16v-5M16 16v-3a2 2 0 0 0-4 0" />
  </>,
)
export const MailIcon = make(
  <>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </>,
)
export const PhoneIcon = make(
  <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />,
)
export const MenuIcon = make(<path d="M4 7h16M4 12h16M4 17h16" />)
export const CloseIcon = make(<path d="M6 6l12 12M18 6 6 18" />)
export const DownloadIcon = make(<path d="M12 4v12M6 11l6 6 6-6M5 20h14" />)
export const ArrowRightIcon = make(<path d="M5 12h14M13 6l6 6-6 6" />)
export const CodeIcon = make(<path d="m8 7-5 5 5 5M16 7l5 5-5 5" />)
export const PenIcon = make(<path d="m4 20 4-1 11-11-3-3L5 16l-1 4zM14 6l3 3" />)
export const CheckIcon = make(
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12 3 3 5-6" />
  </>,
)
export const MusicIcon = make(
  <>
    <path d="M9 18V5l11-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="17" cy="16" r="3" />
  </>,
)
export const BookIcon = make(
  <path d="M2 5h7a3 3 0 0 1 3 3v12a2 2 0 0 0-2-2H2zM22 5h-7a3 3 0 0 0-3 3v12a2 2 0 0 1 2-2h8z" />,
)
export const CameraIcon = make(
  <>
    <path d="M4 8h3l2-3h6l2 3h3v11H4z" />
    <circle cx="12" cy="13" r="3.5" />
  </>,
)
export const GamepadIcon = make(
  <path d="M6 8h12a4 4 0 0 1 4 4v1a4 4 0 0 1-7 2.6l-.6-.6H9.6l-.6.6A4 4 0 0 1 2 13v-1a4 4 0 0 1 4-4zM7 11v3M5.5 12.5h3M16 12h.01M18 14h.01" />,
)

export const SunIcon = make(
  <>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </>,
)
export const MoonIcon = make(<path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z" />)
export const MapPinIcon = make(
  <>
    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </>,
)

// Lets profile.js refer to icons by name (e.g. icon: 'music').
export const iconByName = {
  music: MusicIcon,
  book: BookIcon,
  camera: CameraIcon,
  gamepad: GamepadIcon,
  code: CodeIcon,
  pen: PenIcon,
  check: CheckIcon,
}
