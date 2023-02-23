export interface Props {
  name: string;
  children: string;
  technologies: string[];
  links: { github: string; live: string };
}

function Project({ name, children, technologies, links }: Props) {
  return (
    <article className={'flex flex-col gap-8'}>
      <h3 className={'text-4xl'}>{name}</h3>
      <p className={'text-white text-opacity-80'}>{children}</p>

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
