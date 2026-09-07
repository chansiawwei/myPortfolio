export type SkillGroup = {
  title: string;
  skills: string[];
};

/**
 * Mirrors the May 2026 résumé. Text-only by design: the previous logo tiles were
 * a mix of transparent PNGs and white-background JPEGs, which showed as bright
 * squares against the dark theme, and half this list has no logo in the repo.
 * Icons live in src/assets/icons/ if this ever goes back to a logo treatment.
 */
export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C#'],
  },
  {
    title: 'Frameworks & Libraries',
    skills: ['React', 'Next.js', 'Angular', '.NET Core', 'Node.js', 'Playwright', 'Jest'],
  },
  {
    title: 'Technologies',
    skills: ['Firebase', 'MongoDB', 'MySQL', 'Swagger'],
  },
];
