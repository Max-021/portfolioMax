import React from 'react'
import Box  from '@mui/material/Box'
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
//ver video de como hacer un formulario en react mui!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
import {centerMui} from '../styles/muiConfig';
import {contactInfo} from '../data/navData';
import ContactForm from '../components/contactComps/ContactForm';
import Fhcontainer from '../hoc/Fhcontainer';

const Contact = () => {

  const copyMail = (indice,mail) => {
    console.log('clicked')
    if(indice === 0) {
      navigator.clipboard.writeText(mail)
      alert('falta hacer un pequeño popup que diga copied to clipboard')
    }
  }
  
  return (
    <Fhcontainer clase={`contact-section`}>
      <Stack direction={{md:'column', lg:'column'}} sx={centerMui} divider={<Divider orientation='vertical' flexItem/>} spacing={5}>        
        <Box>
          <h2>Get in touch!</h2>
          <p>agregar texto para tipo: ponte en contacto para lo que sea!</p>
          <ContactForm/>
        </Box>
        <Box>
          <List>
            {contactInfo.map((info,index) => {
              const {name,icon,link} = info;
              return <ListItemButton key={index} onClick={() => copyMail(index,name)}>
                      <ListItemIcon>
                        {icon}
                      </ListItemIcon>
                      {index > 0 
                        ? <ListItemText>
                          <a href={link} target='_blank' rel='noreferrer'>
                            {name}
                          </a>
                        </ListItemText> 
                        : <ListItemText primary={name} />
                        }
                      </ListItemButton>
            })}
          </List>
        </Box>
      </Stack>
    </Fhcontainer>
  );
}

export default Contact