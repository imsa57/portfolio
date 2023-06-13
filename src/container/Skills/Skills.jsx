import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { MotionWrap, Wrapper } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss'
import { Tooltip } from 'react-tooltip';

const Skills = () => {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';
    const skillQuery = '*[_type == "skills"]';

    client.fetch(query).then((data) => {
      setExperiences(data);
    });
    client.fetch(skillQuery).then((data) => {
      setSkills(data);
    });
  }, [])


  return (
    <>
      <h2 className="head-text">Skills & Experience</h2>
      <div className="app__skills-container">
        <motion.div className='app__skills-list'>
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: .5 }}
              className='app__skills-item app__flex'
              key={skill.name}>

              <div className="app__flex" style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* experience */}

        <div
          className='app__skills-exp'>
          {experiences.map((experience) => (
            <motion.div
              className='app__skills-exp-item'
              key={experience.year}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className='app__skills-exp-works'>
                {experience.works.map((work, index) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: .5 }}
                      className='app__skills-exp-work'
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <h4 className='bold-text' data-tooltip-id={`work-description`} data-tooltip-content={work.desc}>{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                  </>
                ))}
                <Tooltip
                  id={`work-description`}
                  effect="solid"
                  arrowColor="#fff"
                  className="skills-tooltip"
                >
                </Tooltip>

              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Wrapper(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg'
)