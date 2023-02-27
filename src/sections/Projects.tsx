import Project from '@components/Project';
import { motion } from 'framer-motion';
import projectsData from 'utils/projectsData';

function Projects() {
  return (
    <motion.section
      className={'grid grid-rows-[auto,1fr,auto] gap-12 bg-black text-center'}
      id={'projects'}
    >
      <h2 className={'text-6xl'}> Check out my awesome projects</h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className={'grid flex-1 grid-cols-3 gap-8 p-24'}
      >
        {projectsData.map((projectData) => (
          <Project projectData={projectData} key={projectData.name} />
        ))}
      </motion.div>
    </motion.section>
  );
}
export default Projects;
