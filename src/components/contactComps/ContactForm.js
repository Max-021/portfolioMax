import React, { useState } from 'react'
import Box  from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import { formBox } from '../../styles/muiConfig'


//aca construir el formulario usando los componentes que aparecen en INPUT en la documentacion de React MUI
//tambien definir las diferencias entre FormControl y FormGroup para saber donde van cada una
//resolver si necesito una dependencia para el envio de mails una vez VALIDADO el formulario

/* COMPONENTES A USAR

  TEXTFIELD  BOX  

*/

const ContactForm = () => {

  const [msgInfo, setMsgInfo] = useState({
    name: "",
    mail: "",
    message: ""
  })
  const submitData = (e) => {
    e.preventDefault();
    console.log(msgInfo);//borrar esto ni bien pueda
    alert('CODEAR: envío del mensaje por mail y la seguridad del envío!!!!!! en contactForm.js')
  }
  const handleChange = (e) => {
    setMsgInfo({
      ...msgInfo,
      [e.target.name]: e.target.value
    })
  }
  return (
    <Box component='form' onSubmit={submitData}  sx={formBox}>
      <TextField required label="Name"    onChange={handleChange} name='name' id="name-input" margin='dense' />
      <TextField required label="Email"   onChange={handleChange} name='mail' id="email-input" margin='dense' type="email"/>
      <TextField required label="Message" onChange={handleChange} name='message' id="msg-input" margin='dense' multiline minRows={4} maxRows={8}/>
      <Button type='submit'>Send</Button>
    </Box>
  )
}

export default ContactForm