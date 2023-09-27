import React, { useState } from 'react'
import Box  from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import {motion} from 'framer-motion'
import { formBox,container, formChildren } from '../../styles/muiConfig'
import emailjs from '@emailjs/browser'
import { duration } from '@mui/material';

// VALIDAR LOS DATOS DEL FORMULARIO ANTES DE ENVIARLO

const ContactForm = () => {

  const [msgInfo, setMsgInfo] = useState({
    name: "",
    mail: "",
    message: ""
  })
  const submitData = (e) => {
    e.preventDefault();
    const mailInfo = {
      request_name: msgInfo.name,
      request_mail: msgInfo.mail,
      request_message: msgInfo.message,
    }
    emailjs.send('service_7bgpx1f','template_6fcb4z4',mailInfo,'objvruOQEA3DNzdjE')
      .then(response => {
        setMsgInfo({
          name: '',
          mail: '',
          message:'',
        })
      })
      .catch(error => {
        console.log(error)
      })
  }
  const handleChange = (e) => {
    setMsgInfo({
      ...msgInfo,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Box component='form' onSubmit={submitData}  sx={formBox}>
      <motion.div
      style={{display: 'flex', flexDirection: 'column', padding:0}}
        variants={container}
        initial='hidden'
        animate='show'
      >
        <motion.div variants={formChildren}>
          <TextField required label="Name"    style={{width:'100%'}} value={msgInfo.name}    onChange={handleChange} name='name' id="name-input" margin='dense' />
        </motion.div>
        <motion.div variants={formChildren}>
          <TextField required label="Email"   style={{width:'100%'}} value={msgInfo.mail}    onChange={handleChange} name='mail' id="email-input" margin='dense' type="email"/>
        </motion.div>
        <motion.div variants={formChildren}>
          <TextField required label="Message" style={{width:'100%'}} value={msgInfo.message} onChange={handleChange} name='message' id="msg-input" margin='dense' multiline minRows={4} maxRows={8}/>
        </motion.div>
        <motion.div variants={formChildren}>
          <Button type='submit'>Send</Button>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default ContactForm