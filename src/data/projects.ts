import type { ImageMetadata } from 'astro';

import byteplusCms from '../assets/byteplus-cms.png';
import bytehouseCdw from '../assets/bytehouse-cdw.png';
import vtim from '../assets/vtim1.png';

export type ProjectLink = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
};

export type Project = {
  title: string;
  context: string;
  description: string;
  /** Bullets for the work worth explaining in depth. Optional. */
  highlights?: string[];
  tech: string[];
  /** Optional — projects without a UI render a monogram tile instead. */
  image?: ImageMetadata;
  alt?: string;
  /**
   * Renders a diagram instead of a screenshot, and switches the row to a wide
   * stacked layout. Use for internal work where no screenshot can be published.
   */
  visual?: 'harness';
  links: ProjectLink[];
  /** Muted badge for work that is no longer publicly reachable. */
  isDeprecated?: boolean;
  /** Exactly one project should set this — its image is the LCP element. */
  isFeatured?: boolean;
};

/**
 * Ordered newest-first and work-first: what Chan builds professionally leads,
 * side projects trail. Adding a project = adding an object.
 */
export const PROJECTS: Project[] = [
  {
    title: 'MAIA — PayPal Integration Agent',
    context: 'PayPal · 2026',
    description:
      "MAIA is the Claude Skill and agent library that does PayPal integration work for merchants: upgrading a legacy SDK from v4 to v5, wiring up PayLater, ACDC, Apple Pay or Google Pay. A merchant pulls a hosted script and runs a single slash command — no toolchain to install, no integration guide to read end to end. The interesting half is the other one: an agent is only worth shipping if you can prove it still works, so the same integration runs continuously against real storefronts and everything it learns flows back into the skills.",
    highlights: [
      'Built the skills and agent instructions behind SDK v4 → v5 upgrades and PayLater, ACDC, Apple Pay and Google Pay integration, delivered to merchants as a hosted script plus a single slash command.',
      'Validate reliability against real e-commerce stacks rather than fixtures — Medusa, Magento, ZenCart and OpenCart are brought up with Docker Compose and the merchant-facing script runs inside them.',
      'Built into an internal feedback-loop platform with scheduled and manually triggered runs, Playwright E2E results and Claude traces surfaced per run, so a regression is traceable to the step that caused it.',
      'Results feed Microsoft SkillOpt to improve the skills continuously, closing the loop between what fails in a real storefront and what the next merchant runs.',
    ],
    tech: ['Claude Skills', 'Playwright', 'Docker Compose', 'SkillOpt', 'E2E Testing'],
    visual: 'harness',
    links: [],
  },
  {
    title: 'AI Job Diagnosis Chatbot',
    context: 'ByteDance',
    description:
      "A chat front end for AI-assisted diagnosis of Spark, Hive and Ray jobs — closer to building a Claude-style client than a typical dashboard. Nothing is hard-coded: the backend streams AG-UI instructions over SSE and the client renders the chat surface from them at runtime. When the agent doesn't have enough to go on it sends back a form, the user fills it in, and the conversation continues — so the human is a step in the loop rather than an observer of it.",
    highlights: [
      'Built a dynamic, protocol-driven frontend chatbot using the AG-UI SDK for AI-assisted job diagnostics on Spark, Hive and Ray.',
      'Streamed responses over SSE, rendering chat UI, custom forms and workflow actions from backend AG-UI instructions at runtime rather than from hard-coded screens.',
      'Implemented human-in-the-loop interaction: when the agent needs more context it returns a form, and the answer feeds straight back into the diagnosis.',
      'Developed persistent chat sessions with historical message retrieval, adaptive chat UI and live updates.',
      'Implemented downloadable report generation and dynamic workflow actions, integrated with backend event-driven updates.',
      'Extracted the core AG-UI components into an npm package, so other teams could adopt the protocol without rebuilding the client.',
    ],
    tech: ['AG-UI SDK', 'React', 'TypeScript', 'SSE', 'npm package'],
    links: [],
  },
  {
    title: 'Blog Management System with Headless CMS',
    context: 'BytePlus · ByteDance',
    description:
      'A headless CMS with a rich-text editor and blog renderer, letting non-technical teams publish independently and cutting development time and cost.',
    highlights: [
      'Built a headless CMS with a rich-text editor and blog renderer, enabling non-technical users to publish content independently with seamless third-party integration.',
      'Implemented server-side rendering to optimise SEO and initial load performance.',
      'Developed a Backend-for-Frontend API layer, fully documented with Swagger for clear service contracts and better cross-team collaboration.',
    ],
    tech: ['React', 'SSR', 'BFF', 'Swagger', 'Headless CMS'],
    image: byteplusCms,
    alt: 'BytePlus headless CMS editor showing the content model and blog renderer',
    links: [{ label: 'See Live', href: 'https://www.byteplus.com/en/blog', variant: 'primary' }],
    isFeatured: true,
  },
  {
    title: 'ByteHouse CDW',
    context: 'ByteDance',
    description:
      'A unified cloud data warehouse providing self-served analytics at petabyte scale, connecting streaming and batch sources for real-time insight. Storage and compute separation, unified batch and streaming, enterprise-grade security, standard SQL, and multiple data-source connectors.',
    tech: ['React', 'TypeScript', 'Data Warehouse', 'Standard SQL'],
    image: bytehouseCdw,
    alt: 'ByteHouse cloud data warehouse console displaying analytics dashboards',
    // The docs host (docs.bytehouse.cloud) resolves but refuses connections as of
    // Sep 2026, so only the live console is linked.
    links: [{ label: 'Try It', href: 'https://console.bytehouse.cloud/', variant: 'primary' }],
  },
  {
    title: 'Vehicle Test Management',
    context: 'Early work',
    description:
      'A SaaS platform for a vehicle-testing company, built end to end: data tracking and entry, role-based access control, analysis and reporting, a consumer portal and OTP verification — plus a companion Ionic PWA for drivers with offline caching and live location tracking. Angular front end, .NET Core services with Swagger-documented REST APIs.',
    tech: ['Angular', '.NET Core', 'Ionic PWA', 'REST API', 'SQL'],
    image: vtim,
    alt: 'Vehicle Test Management dashboard showing test data tracking and reporting charts',
    links: [],
    isDeprecated: true,
  },
];
