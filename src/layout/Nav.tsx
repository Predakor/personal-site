import { motion } from 'framer-motion';

function Nav({}) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      class={'fixed z-50 w-full p-4 text-2xl'}
    >
      <ul class={'flex justify-end gap-4'}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </motion.nav>
  );
}
export default Nav;
