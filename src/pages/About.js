import React from 'react'
import Box  from '@mui/material/Box'
import Typography from '@mui/material/Typography';
import { skillGroup } from '../data/skillsData';
import { text } from '../data/aboutData/textEn';
import Fhcontainer from '../hoc/Fhcontainer';

// import AboutBkg from '../components/aboutComps/AboutBkg';
import SkillCard from '../components/aboutComps/SkillCard';

const About = () => {
  return (
    <Fhcontainer clase={`about-section`}>
      {/* <AboutBkg/> */}
      <Box className='about-position'>
        <Box className='about-info'>
          <Typography className='titles' variant='h2' gutterBottom>About me</Typography>
          {text.map((texto, index) => {
            return <Typography className='general' gutterBottom key={index}>
              {texto}
            </Typography>
          })}
        </Box>
        <Box className='about-skills'>
          <Typography className='about-skills-title titles' variant='h5'>Skills</Typography>
          {skillGroup.map((item,index) => {
            const {groupName,skills} = item;
            return <SkillCard key={index} skillGroupName={groupName} skills={skills}/>
          })}
        </Box>
      </Box>
    </Fhcontainer>
  )
}

export default About