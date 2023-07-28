import React, { useState } from 'react'
//comps
import {modalStyle} from '../styles/muiConfig';
import Fhcontainer from '../hoc/Fhcontainer'
import ProjectCard from '../components/portfolioComps/ProjectCard';
import ExpandedProjectCard from '../components/portfolioComps/ExpandedProjectCard';
//react mui
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';

import {projects} from '../data/projectsData';

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
        <h1 className='portfolio-title'>Portfolio</h1>
      </div>
      <div className='portfolio-second-section'>
        <div className='projects-container'>
          {projects.map((item, index) => {
            return <ProjectCard key={index} {...item} clicked={() => openModal(index)}/>;
          })}
        </div>
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