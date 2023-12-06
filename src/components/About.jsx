import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Hello! I’m a tech enthusiast with a passion for full-stack development, 
        currently exploring the technology through personal projects. 
        Specializing on the front-end with JavaScript, React, Tailwind, 
        while I complemented my proficiency on back-end with Node.js, Express 
        and REST APIs. Besides individual work, I am also team player as I 
        collaborated in various IT projects with classmates during my degree. 
        I am eager to bring my knowledge, creativity and collaborative 
        mindset to the tech world.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about");