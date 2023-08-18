import React, { useState,useEffect } from 'react'
import Box  from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Alert from '@mui/material/Alert';
import Collapse from '@mui/material/Collapse';
//ver video de como hacer un formulario en react mui!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import {centerMui, contactListPosition, iconStyle} from '../styles/muiConfig';
import {contactInfo} from '../data/navData';
import ContactForm from '../components/contactComps/ContactForm';
import Fhcontainer from '../hoc/Fhcontainer';

const Contact = () => {

  const [customHeight, setCustomHeight] = useState(0)
  const [copied, setCopied] = useState(false)
  //ACA AGREGAR UN EFECTO PARA EL COPYMAIL
  const copyMail = (indice,mail) => {
    console.log('clicked')
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
    console.log(navHeight)
    setCustomHeight(navHeight);
  }, [])


  
  return (
    <Fhcontainer clase={`contact-section`}>
      <div className='custom-bkg' style={{height: `${customHeight}px`}}></div>
      <div className='top' style={{marginTop: customHeight}}></div>
      <Stack direction={{md:'column', lg:'column'}} sx={centerMui} divider={<Divider orientation='vertical' flexItem/>} spacing={5}>        
        <Box>
          <h2>Get in touch!</h2>
          <p>agregar texto para tipo: ponte en contacto para lo que sea!</p>
          <ContactForm/>
        </Box>
      </Stack>
      <Box>
        <List className='contactIcons' sx={contactListPosition}>
          {contactInfo.map((info,index) => {
            const {name,icon,link} = info;
            return index > 0 
                    ? 
                      <a href={link} target='_blank' rel="noreferrer">
                        <ListItemButton key={index}>
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
      </Box>
      <Collapse className='copiedAlert' in={copied}>
        <Alert variant='filled' severity='success' >Copied to clipboard!</Alert>
      </Collapse>
    </Fhcontainer>
  );
}

export default Contact