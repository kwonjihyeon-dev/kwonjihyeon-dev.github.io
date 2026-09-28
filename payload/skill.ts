import { ISkill } from '../component/skill/ISkill';

const Languages: ISkill.Skill = {
  category: 'Languages',
  items: ['JavaScript', 'TypeScript', 'HTML', 'CSS'],
};

const Frameworks: ISkill.Skill = {
  category: 'Frameworks',
  items: ['Next.js', 'React', 'Vue'],
};

const Data: ISkill.Skill = {
  category: 'State · Data',
  items: ['Tanstack Query', 'Zustand', 'Jotai', 'Vuex', 'Axios', 'GraphQL'],
};

const Styling: ISkill.Skill = {
  category: 'Styling',
  items: ['TailwindCSS', 'SCSS', 'CSS-in-JS', 'Style Dictionary'],
};

const Testing: ISkill.Skill = {
  category: 'Testing',
  items: ['Playwright', 'Vitest', 'Storybook'],
};

const Etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    'Turborepo',
    'pnpm',
    'yarn',
    'GitHub Actions',
    'FSD',
    'ESLint',
    'AWS Bedrock',
    'Claude Code',
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [Languages, Frameworks, Data, Styling, Testing, Etc],
};

export default skill;
