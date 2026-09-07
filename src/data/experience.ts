export type Role = {
  company: string;
  companyUrl?: string;
  title: string;
  /** Displayed verbatim, e.g. "Jan 2026 — Present". */
  period: string;
  location?: string;
  /** One-line framing, then the bullets that carry the detail. */
  summary: string;
  highlights: string[];
  tech: string[];
};

/**
 * Sourced from the May 2026 résumé. Recruiters read work history before
 * projects, so this section sits above them.
 */
export const EXPERIENCE: Role[] = [
  {
    company: 'PayPal',
    companyUrl: 'https://www.paypal.com',
    title: 'Senior Software Engineer',
    period: 'Jan 2026 — Present',
    location: 'Singapore',
    summary:
      'Building MAIA — the agent that does PayPal integration work for merchants — and the harness that proves it keeps working.',
    highlights: [
      'Build the Claude Skills and agent instructions behind legacy SDK v4 → v5 upgrades and PayLater, ACDC, Apple Pay and Google Pay integration, shipped to merchants as a hosted script and a single slash command.',
      'Run the integration continuously against real e-commerce stacks — Medusa, Magento, ZenCart, OpenCart — brought up with Docker Compose, so reliability is measured against real storefronts rather than fixtures.',
      'Surface Playwright E2E results and Claude traces per run in an internal feedback-loop platform, on both scheduled and manual triggers, and feed the results into SkillOpt so the skills improve continuously.',
    ],
    tech: ['Claude Skills', 'Playwright', 'Docker Compose', 'Agent Reliability'],
  },
  {
    company: 'ByteDance',
    companyUrl: 'https://www.bytedance.com/en/',
    title: 'Senior Frontend Software Engineer',
    period: 'May 2021 — Dec 2025',
    location: 'Singapore',
    summary:
      'Built data-warehousing product surfaces and led the engineering practices behind them.',
    highlights: [
      'Built data warehousing solutions end to end — gathering requirements and authoring PRDs and Architecture Decision Records.',
      'Led the transition to trunk-based development, reducing average merge time to under 3 days and cutting merge overhead by removing long-lived branches.',
      'Implemented a feature-flag system with a shared Chrome extension for quick toggling, driving team-wide adoption with controlled rollouts and reducing frontend rollbacks by 90%.',
      'Led migration of the core component library, refactoring 1000+ usage references with an upgrade strategy that preserved backward compatibility; built a shared React component library used across teams.',
      'Integrated automated E2E testing with Playwright across new features and CI/CD, and used Midscene for prompt-driven test-case generation. Improved code stability with Storybook.',
    ],
    tech: ['React', 'TypeScript', 'Playwright', 'Storybook', 'CI/CD'],
  },
  {
    company: 'Semantia',
    title: 'Software Engineer',
    period: 'Jan 2020 — Mar 2021',
    location: 'Melbourne',
    summary: 'Progressive web app development in a fast-paced startup environment.',
    highlights: [
      'Contributed to progressive web app development using Ionic Native and Angular.',
      'Integrated WordPress as a backend via RESTful APIs, and supported CI/CD pipeline setup and site maintenance.',
    ],
    tech: ['Ionic', 'Angular', 'WordPress REST API', 'CI/CD'],
  },
];
