import React from 'react'
import Fhcontainer from '../hoc/Fhcontainer'
import ProjectCard from '../components/portfolioComps/ProjectCard';
import ExpandedProjectCard from '../components/portfolioComps/ExpandedProjectCard';

import {projects} from '../data/projectsData';

const Portfolio = () => {
  return (
    <Fhcontainer clase={`portfolio-section`}>
      <div className='portfolio-upper-section'>
        <h1 className='portfolio-title'>Portfolio</h1>
      </div>
      <div className='portfolio-second-section'>
        <div className='projects-container'>
          {projects.map((item, index) => {
            return <ProjectCard key={index}  {...item}/>;
          })}
        </div>
      </div>
    </Fhcontainer>
  )
}

export default Portfolio