import { ProjectData } from 'utils/projectsData';

function Project({ projectData }: { projectData: ProjectData }) {
  const { name, description, links, technologies } = projectData;
  return (
    <article
      className={
        'flex flex-col justify-between gap-8 rounded-xl border-8 border-blue-600 p-4'
      }
    >
      <div>
        <h3 className={'text-6xl'}>{name}</h3>
        <p className={'text-white text-opacity-80'}>{description}</p>
      </div>

      <div>
        <h3 className={'text-4xl'}>Created with</h3>
        <ul className={'flex gap-2'}>
          {technologies.map((technology) => (
            <li
              className={'rounded-3xl border-2 border-blue-500 p-2'}
              key={technology}
            >
              {technology}
            </li>
          ))}
        </ul>
      </div>
      <footer>
        <a href={links.github} target="_blank" rel={'noreferrer'}>
          Github
        </a>
        <a href={links.live} target="_blank" rel={'noreferrer'}>
          Live
        </a>
      </footer>
    </article>
  );
}
export default Project;
