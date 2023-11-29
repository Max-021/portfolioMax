import React, { useState } from 'react'
import {motion} from 'framer-motion'
//comps
import {modalStyle, container} from '../styles/muiConfig';
import Fhcontainer from '../hoc/Fhcontainer'
import ProjectCard from '../components/portfolioComps/ProjectCard';
import ExpandedProjectCard from '../components/portfolioComps/ExpandedProjectCard';
//react mui
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

import {projects} from '../data/projectsData';

const Portfolio = () => {
  const [open, setOpen] = useState(false)
  const [expandedInfo, setExpandedInfo] = useState({});
  //acá poner la data para la tarjeta

  const closeModal = () => {
    setOpen(false);
  }
  const openModal = (ind) => {
    setOpen(true);
    setExpandedInfo({
      ...projects[ind]
    })
  }

  return (
    <Fhcontainer clase={`portfolio-section`}>
      <motion.div 
        className='portfolio-upper-section'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1.5, ease: 'easeIn'}}
      >
        <img className='portfolio-main-img' src={require(`../assets/images/portfolio/banner.png`)} alt='main-img'/>
      </motion.div>
      <div className='portfolio-second-section'>
        <motion.div variants={container} initial='hidden' animate='show' className='projects-container'>
          {projects.map((item, index) => {
            return <motion.div
              key={index}
              className='project-card'
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0,
                },
                show: {
                  opacity: 1,
                  scale: 1,
                  transition: {duration:0.7}
                }
              }}
            >
              <ProjectCard key={index} {...item} clicked={() => openModal(index)}/>
            </motion.div>;
          })}
        </motion.div>
      </div>
      <Modal
        open={open}
        onClose={closeModal}
        closeAfterTransition
        slots={{backdrop: Backdrop}}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
        sx={{border: 'none', boxShadow: 'none'}}
      >
        <Fade in={open} style={{border: 'none', boxShadow:'none'}} className="project-modal expanded-project-card">
          <Box sx={modalStyle}>
            <ExpandedProjectCard {...expandedInfo}/>
          </Box>
        </Fade>
      </Modal>
    </Fhcontainer>
  )
}

export default Portfolio