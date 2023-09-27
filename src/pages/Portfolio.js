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


const imgNameTest = 'nuevotest.png'
// cambiar el banner simple que hice para que no se vea tan feo
//puede ser una imágen o algo que rompa un poco la uniformidad de la seccion
// pero que no haga demasiado ruido

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
      <div className='portfolio-upper-section'>
        {/* <h1 className='portfolio-title'>My work</h1> */}
        <img className='portfolio-main-img' src={require(`../assets/images/portfolio/${imgNameTest}`)} alt='main-img'/>
      </div>
      <div className='portfolio-second-section'>
        <motion.div variants={container} initial='hidden' animate='show' className='projects-container'>
          {projects.map((item, index) => {
            return <motion.div
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
        <Fade in={open} style={{border: 'none', boxShadow:'none'}}>
          <Box sx={modalStyle}>
            <ExpandedProjectCard {...expandedInfo}/>
          </Box>
        </Fade>
      </Modal>
    </Fhcontainer>
  )
}

export default Portfolio