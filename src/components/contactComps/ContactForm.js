import React, { useState } from 'react'
import Box  from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { formBox } from '../../styles/muiConfig'
import emailjs from '@emailjs/browser'

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
      <TextField required label="Name"    value={msgInfo.name}    onChange={handleChange} name='name' id="name-input" margin='dense' />
      <TextField required label="Email"   value={msgInfo.mail}    onChange={handleChange} name='mail' id="email-input" margin='dense' type="email"/>
      <TextField required label="Message" value={msgInfo.message} onChange={handleChange} name='message' id="msg-input" margin='dense' multiline minRows={4} maxRows={8}/>
      <Button type='submit'>Send</Button>
    </Box>
  )
}

export default ContactForm