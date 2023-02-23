import Project from './Project';

function Projects() {
  return (
    <section
      className={'flex flex-col gap-4 bg-black text-center'}
      id={'projects'}
    >
      <h2 className={'p-4 text-6xl'}> Check out my awesome projects</h2>

      <div className={'grid flex-1 grid-cols-3 gap-8'}>
        <Project
          name="Tasker"
          links={{ github: '', live: '' }}
          technologies={['react', 'javascript', 'css', 'html']}
        >
          Simple too do app that lets you add, modify and delete tasks. You can
          add deadline to task and group them in groups
        </Project>

        <Project
          name="Discofy"
          links={{
            github: 'https://github.com/Predakor/spotify-web-player',
            live: 'https://spotify-web-player-sandy.vercel.app',
          }}
          technologies={['react', 'nextjs', 'typescript', 'redux', 'tailwind']}
        >
          The functional spotify clone that lets you play music add delete and
          modify playlist follow and unfollow artist and more
        </Project>

        <Project
          name="Typer"
          links={{
            github: 'https://github.com/Predakor/Typer',
            live: 'https://predakor.github.io/Typer/',
          }}
          technologies={['react', 'javascript', 'css', 'html']}
        >
          Typing speed app that lets you test your typing speed
        </Project>
      </div>
    </section>
  );
}
export default Projects;
