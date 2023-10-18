import React, { useState } from 'react'
import Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import { skillGroup } from '../data/skillsData';
import { text } from '../data/aboutData/textEn';
import Fhcontainer from '../hoc/Fhcontainer';

import AboutBkg from '../components/aboutComps/AboutBkg';
import SkillCard from '../components/aboutComps/SkillCard';

const About = () => {
  let [activeSkillGroup,setActiveSkillGroup] = useState('fe');
  let [isActive,setIsActive] = useState(skillGroup.map((el,index) => {
    return {
      group: el.groupName,
      ind: index,
      isActive: el.groupName === 'Frontend development' ? true : false,
    }
  }));
  const skillGroupChange = (skillGroup) => {
    const updatedActive = [...isActive];
    switch (skillGroup) {
      case 'Frontend development':
        setActiveSkillGroup('fe');
        updatedActive[0].isActive = true
        updatedActive[1].isActive = false
        updatedActive[2].isActive = false
        break;
      case 'Backend development':
        setActiveSkillGroup('be');
        updatedActive[0].isActive = false
        updatedActive[1].isActive = true
        updatedActive[2].isActive = false
        break;
        case 'Database management':
        setActiveSkillGroup('db');
        updatedActive[0].isActive = false
        updatedActive[1].isActive = false
        updatedActive[2].isActive = true
        break;
        default:
        setActiveSkillGroup('fe');
        updatedActive[0].isActive = true
        updatedActive[1].isActive = false
        updatedActive[2].isActive = false
        break;
      }
      setIsActive([...updatedActive]);
  }
  return (
    <Fhcontainer clase={`about-section`}>
      <AboutBkg IconsSet={activeSkillGroup}/>
      <Box className='about-position'>
        <Box className='about-info'>
          <Typography className='titles' variant='h2' gutterBottom>About me</Typography>
            <TypeAnimation
            sequence={[text]}
            speed={90}
            wrapper='p'
            className='general'
            cursor={false}
            style={{whiteSpace: 'pre-line'}}
            />
          {/* {text.map((texto, index) => {
            return 
            
            
            
            <Typography className='general' gutterBottom key={index}>
                <TypeAnimation
                  sequence={[texto]}
                  speed={50}
                />;
              // </Typography>
          })} */}
        </Box>
        <motion.div
          initial={{opacity:0}}
          animate={{opacity:1}}
          transition={{duration:0.8, ease: 'easeInOut'}}
        >
          <Box className='about-skills'>
            <div className='about-skills-title'>
              <Typography className='titles' variant='h5'>My skills</Typography>
            </div>
            {skillGroup.map((item,index) => {
              const {groupName,skills} = item;
              return <SkillCard key={index} skillGroupName={groupName} active={isActive[index].isActive} skills={skills} activeGroupCallback={skillGroupChange}/>
            })}
          </Box>
        </motion.div>
      </Box>
    </Fhcontainer>
  )
}

export default About