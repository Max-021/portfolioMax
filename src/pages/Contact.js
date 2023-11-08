import React, { useState,useEffect } from 'react'
import Box  from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Slide from '@mui/material/Slide';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import {motion} from 'framer-motion'
import { TypeAnimation } from 'react-type-animation';
import {centerMui, contactListPosition, iconStyle} from '../styles/muiConfig';
import {contactInfo} from '../data/navData';
import ContactForm from '../components/contactComps/ContactForm';
import Fhcontainer from '../hoc/Fhcontainer';

const Contact = () => {

  const [customHeight, setCustomHeight] = useState(0)
  const [copied, setCopied] = useState(false)
  //ACA AGREGAR UN EFECTO PARA EL COPYMAIL
  const copyMail = (indice,mail) => {
    if(indice === 0) {
      navigator.clipboard.writeText(mail)
      setCopied(true)
      setTimeout(() => {
        setCopied(false)
      }, 1500);
    }
  }

  useEffect(()=> {
    const navHeight = document.querySelector('.nav-container').clientHeight;
    setCustomHeight(navHeight);
  }, [])


  
  return (
    <Fhcontainer clase={`contact-section`}>
      <motion.div
        className='custom-bkg' 
        style={{height: `${customHeight}px`}}
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:1, ease: 'easeIn'}}
      ></motion.div>
      <Slide  direction='down' mountOnEnter unmountOnExit in={true} timeout={1000}>
        <div className='top' style={{marginTop: customHeight}}></div>
      </Slide>
      <Stack className='contact-content' direction={{md:'column', lg:'column'}} sx={centerMui} divider={<Divider orientation='vertical' flexItem/>} spacing={5}>        
        <Box className='form-container'>
          <Typography className='contact-title' variant='h3'>Get in touch!</Typography>
          <TypeAnimation
            sequence={["Any question you may want to ask me, be it a project, a job, or just saying hello, feel free to go ahead!"]}
            speed={96}
            wrapper='p'
            cursor={false}
            className='contact-text'
          />
          <ContactForm/>
        </Box>
      </Stack>
      <Box sx={contactListPosition}>
        <Slide  direction='left' mountOnEnter unmountOnExit in={true} timeout={1000}>
          <List className='contactIcons'>
            {contactInfo.map((info,index) => {
              const {name,icon,link} = info;
              return index > 0 
              ? 
              <a key={index} href={link} target='_blank' rel="noreferrer">
                          <ListItemButton>
                            <ListItemIcon sx={iconStyle}>
                              {icon}
                            </ListItemIcon>
                          </ListItemButton>
                        </a>
                      : 
                      <ListItemButton key={index} onClick={() => copyMail(index,name)}>
                          <ListItemIcon sx={iconStyle}>{icon}</ListItemIcon>
                        </ListItemButton>
            })}
          </List>
        </Slide>
      </Box>
      <Collapse className='copiedAlert' in={copied}>
        <Alert variant='filled' severity='success' >Copied to clipboard!</Alert>
      </Collapse>
    </Fhcontainer>
  );
}

export default Contact