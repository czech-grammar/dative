import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Theory',
      items: [
        'singular',
        'plural',
        'prepositions',
        'adjectives',
        'pronouns',
      ],
    },
    {
      type: 'category',
      label: 'Exercises',
      link: {
        type: 'doc',
        id: 'exercises/index',
      },
      items: [
        'exercises/direct-objects',
        'exercises/fill-blank',
        'exercises/transform',
        'exercises/interactive',
      ],
    },
    {
      type: 'category',
      label: 'Cheatsheets',
      link: {
        type: 'doc',
        id: 'cheatsheets/index',
      },
      items: [
        'cheatsheets/singular',
        'cheatsheets/plural',
        'cheatsheets/adjectives',
      ],
    },
    'quick-reference',
  ],
};

export default sidebars;
