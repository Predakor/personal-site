export interface ProjectData {
  name: string;
  description: string;
  technologies: string[];
  links: { github: string; live: string };
}

const projectsData: ProjectData[] = [
  {
    name: 'Tasker',
    links: { github: '1', live: '1' },
    technologies: ['react', 'javascript', 'css', 'html'],
    description: `Simple too do app that lets you add, modify and delete tasks. You can add deadline to task and group them in groups`,
  },
  {
    name: 'Discofy',
    links: {
      github: 'https://github.com/Predakor/spotify-web-player',
      live: 'https://spotify-web-player-sandy.vercel.app',
    },
    technologies: ['react', 'nextjs', 'typescript', 'redux', 'tailwind'],
    description: `The functional spotify clone that lets you play music add delete and modify playlist follow and unfollow artist and more}`,
  },
  {
    name: 'Typer',
    links: {
      github: 'https://github.com/Predakor/Typer',
      live: 'https://predakor.github.io/Typer/',
    },
    technologies: ['react', 'javascript', 'css', 'html'],

    description: `Typing speed app that lets you test your typing speed`,
  },
];

export default projectsData;
