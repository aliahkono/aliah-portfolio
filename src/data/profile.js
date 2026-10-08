// ─────────────────────────────────────────────────────────────
//  All the website's content lives in this one file.
//  Edit text, links, and image paths here — no need to touch the components.
//  Images go in /public/images and are referenced as '/images/<file>'.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Aliah Coleen Divinagracia',
  firstName: 'Aliah',
  handle: 'aliah.divinagracia',
  logoText: 'AC',
  wordmark: 'AC.Div',
  title: '4th Year Computer Science Student',
  pitch:
    'Software Engineering student building web & mobile apps — designed in Figma, built with care, and tested before they ship.',
  availability: 'Open to internships',
  // The hero illustration (exported from the Figma "Home" frame).
  illustration: '/images/hero-illustration.png',
  // Floating tiles around the hero illustration. Left = design & productivity, right = languages & frameworks.
  heroTools: {
    left: ['Figma', 'Canva', 'VS Code', 'Android Studio', 'Xcode', 'Microsoft 365'],
    right: ['Google Workspace', 'Dart / Flutter', 'Swift', 'Java', 'Python', 'C++'],
  },
  roles: [
    'Software Engineering Student',
    'UI/UX Designer',
    'Mobile App Developer',
    'QA Tester',
  ],
  intro:
    'A 4th-year Computer Science student seeking an internship in software development, web and mobile apps, UI/UX design, and QA testing. I’ve grown from writing my first website in first year to designing and building a full thesis system — and I’m still just as eager to learn.',
  location: 'Tayabas City, Quezon',
  email: 'aliahcoleen.divi@gmail.com',
  phone: '+63 995 841 4142',
  github: 'https://github.com/aliahkono',
  linkedin: 'https://linkedin.com/in/aliah-coleen-divinagracia',
  resume: '/resume.pdf',
  // Set these to your photos, e.g. '/images/profile.jpg'. Leave null to show a placeholder.
  photo: '/images/profile.jpg',
  // about-web.jpg is a web-sized copy of about.jpg (113 KB instead of 9 MB) so the page loads fast.
  aboutPhoto: '/images/about-web.jpg',
}

export const about = {
  paragraph:
    'Good day! I’m Aliah, a 4th-year Computer Science student specializing in Software Engineering at Manuel S. Enverga University Foundation. I enjoy turning ideas into working software — sketching the experience in Figma, building it in Flutter or on the web, and testing it until it’s dependable. I’m an approachable, optimistic teammate who writes thorough documentation and keeps projects on track.',
  tabs: {
    Information: [
      { label: 'Full name', value: 'Aliah Coleen Divinagracia' },
      { label: 'Course', value: 'BS Computer Science — Software Engineering' },
      { label: 'Based in', value: 'Tayabas City, Quezon' },
      { label: 'Career goal', value: 'Software Engineer / System Architect' },
      { label: 'Status', value: 'Open to internships' },
    ],
    Strengths: [
      { label: 'Documentation', value: 'Clear technical docs, sprint notes, and requirement specs' },
      { label: 'Detail-oriented', value: 'Catching bugs and usability issues before users do' },
      { label: 'Collaboration', value: 'Cross-functional teamwork from design to development' },
      { label: 'Problem-solving', value: 'Breaking big problems into testable pieces' },
    ],
    Interests: [
      { label: 'Product design', value: 'User research, wireframes, and interactive prototypes' },
      { label: 'Mobile development', value: 'Cross-platform apps with Flutter & Dart' },
      { label: 'Software quality', value: 'Testing, deployment, and maintenance strategies' },
      { label: 'Security', value: 'Security, compliance, and identity fundamentals' },
    ],
  },
  hobbies: [
    { icon: 'music', name: 'Music', text: 'Keeps me focused and calm on long build days.' },
    { icon: 'book', name: 'Reading', text: 'Slice-of-life, sci-fi and mystery — a good reset.' },
    { icon: 'camera', name: 'Photography', text: 'Capturing skies, food, and places I travel to.' },
    { icon: 'gamepad', name: 'Gaming', text: 'Team games that train quick thinking and communication.' },
  ],
}

export const education = {
  school: 'Manuel S. Enverga University Foundation',
  degree: 'Bachelor of Science in Computer Science, specialization in Software Engineering',
  location: 'Lucena City, Quezon',
  period: 'Aug 2023 — Present',
  logo: '/images/mseuf-logo.jpg',
  honors: ['Dean’s Lister (multiple semesters)', 'College Scholar', 'GWA 1.41 – 1.73'],
  careerGoal: {
    title: 'Software Engineer / System Architect',
    text: 'Since first year I’ve wanted to turn abstract ideas into useful software. That goal hasn’t changed — it’s just backed by real projects now, from Figma prototypes to a full thesis system.',
  },
  certifications: [
    { title: 'SC-900: Security, Compliance & Identity Fundamentals', meta: 'Microsoft · Jul 2026' },
    { title: 'Software Testing, Deployment & Maintenance Strategies', meta: 'IBM · Jun 2026' },
    { title: 'Flutter and Dart Development', meta: 'IBM · Apr 2025' },
    { title: 'Top 10 Finalist — MSEUF Startup Pitch Competition', meta: '2025' },
    { title: 'Participant / Competitor — DAP NextGenPH', meta: '2026 — Ongoing' },
  ],
  involvement: [
    { role: 'Research Committee Member', org: 'PSITES / MASTECH', period: '2024 — 2026' },
    { role: 'Social Media Manager', org: 'MSEUF Wildcat Esports', period: '2024 — 2025' },
  ],
}

export const projects = [
  {
    featured: true,
    title: 'ResQ',
    badge: 'Thesis Project',
    period: 'Mar 2026 — Present',
    description:
      'A centralized blood donation management system using Decision Tree classification and Min-Heap priority scheduling — streamlining donor recruitment, eligibility screening, and urgent hospital supply allocation.',
    role: 'UI/UX Designer & Mobile Application Developer',
    tags: ['Flutter & Dart', 'Figma', 'Decision Tree', 'Min-Heap'],
    image: '/images/resq.png', // e.g. '/images/resq.png'
    // Each link becomes a button on the ResQ card. Leave url empty to hide that button.
    links: [
      { label: 'Mobile App Repo', url: 'https://github.com/aliahkono/resq_app' },
      { label: 'Web Dashboard Repo', url: 'https://github.com/lunaella/hospital-web-dashboard' },
    ],
  },
  {
    title: '[Project Title]',
    category: 'Web Application · [YEAR]',
    description: '[One-line summary: the problem, what you built, and your role.]',
    image: null,
    link: '',
  },
  {
    title: '[Project Title]',
    category: 'Embedded System · [YEAR]',
    description: '[One-line summary: the problem, what you built, and your role.]',
    image: null,
    link: '',
  },
]

export const skills = {
  groups: [
    {
      icon: 'pen',
      name: 'UI/UX Design',
      text: 'Personas, wireframes and interactive prototypes that hand off cleanly to development.',
      items: ['Figma', 'Canva', 'Wireframing', 'Prototyping', 'User Personas'],
    },
    {
      icon: 'code',
      name: 'Development',
      text: 'Cross-platform mobile and web apps backed by well-structured databases.',
      items: ['Flutter & Dart', 'Java', 'Swift', 'Python', 'C++', 'SQL Databases', 'Web & App Development'],
    },
    {
      icon: 'check',
      name: 'Testing & QA',
      text: 'Functional testing and clear documentation so software stays dependable.',
      items: ['Software Testing', 'Functional Testing', 'Quality Assurance', 'Technical Documentation'],
    },
  ],
  tools: ['VS Code', 'Android Studio', 'Xcode', 'Figma', 'Canva', 'Microsoft 365', 'Google Workspace', 'GitHub'],
  soft: ['Attention to Detail', 'Critical Thinking', 'Collaboration', 'Problem-Solving', 'Task Tracking', 'Adaptability'],
}
