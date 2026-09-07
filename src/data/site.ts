/** Single source of truth for identity, SEO, and contact details. */

export const SITE = {
  url: 'https://chan-portfolio.web.app',
  name: 'Chan Siaw Wei',
  shortName: 'Chan',
  role: 'Senior Software Engineer',
  employer: 'PayPal',
  employerUrl: 'https://www.paypal.com',
  location: 'Singapore',
  title: 'Chan Siaw Wei | Senior Software Engineer',
  description:
    'Senior software engineer at PayPal in Singapore, specialising in scalable web applications — end-to-end delivery from intuitive UI to API integration, CI/CD automation, and architecture built to last. Previously ByteDance.',
  keywords: [
    'Chan Siaw Wei',
    'senior software engineer',
    'frontend engineer',
    'React',
    'TypeScript',
    'Next.js',
    'Angular',
    'Singapore',
  ],
  email: 'siawwei98@gmail.com',
  /** Served from public/ — no third-party host that can go stale or vanish. */
  resumeUrl: '/resume.pdf',
  ogImage: '/og-image.png',
} as const;

/**
 * Career started at Semantia in January 2020, per the May 2026 résumé.
 * Derived so the copy can't go stale.
 */
export const CAREER_START_YEAR = 2020;

export const yearsOfExperience = () => new Date().getFullYear() - CAREER_START_YEAR;

export const SOCIALS = [
  {
    label: 'LinkedIn',
    // TODO(chan): the May 2026 résumé lists in/siawwei; the old site used the
    // long numeric handle. Confirm which one resolves.
    href: 'https://www.linkedin.com/in/siawwei',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/chansiawwei',
    icon: 'github',
  },
  {
    label: 'Email',
    href: `mailto:siawwei98@gmail.com`,
    icon: 'mail',
  },
] as const;

export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;
