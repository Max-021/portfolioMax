import React from 'react'
import Box  from '@mui/material/Box'
import { skill } from '../data/skillsData';
import { text } from '../data/aboutData/textEn';
import Fhcontainer from '../hoc/Fhcontainer';

import SkillCard from '../components/aboutComps/SkillCard';

const About = () => {
  return (
    <Fhcontainer clase={`about-section`}>
      <Box className='about-position'>
        <Box className='about-info'>
          <h2>About me</h2>
          {text.map((texto, index) => {
            return <div key={index}>
              <p>{texto}</p>
            </div>;
          })}
        </Box>
        <Box className='about-skills'>
          {skill.map((item,index) => {
            const {name,porcentaje} = item;
            return <SkillCard key={index} name={name} porcentaje={porcentaje}/>
          })}
        </Box>
      </Box>
    </Fhcontainer>
  )
}

export default About