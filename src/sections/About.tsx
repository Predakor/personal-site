import { motion } from 'framer-motion';

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id={'about'}
    >
      <h2>Hi I'm Patrick</h2>
      <h3>Front-end developer</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
        reiciendis exercitationem a asperiores illum ipsam inventore, vero
        repellat, voluptas harum perferendis adipisci in aliquam distinctio vel
        est? Ipsa itaque cupiditate architecto nemo libero facere beatae
        pariatur obcaecati, nihil illum laborum unde magni, modi et, inventore
        porro asperiores ipsam odit! Sed.
      </p>
    </motion.section>
  );
}
