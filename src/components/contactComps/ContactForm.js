import React, { useState, useRef } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';
import Box  from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import {motion} from 'framer-motion'
import { formBox,container, formChildren } from '../../styles/muiConfig'
import emailjs from '@emailjs/browser'
import { duration } from '@mui/material';
import axios from 'axios';

// VALIDAR LOS DATOS DEL FORMULARIO ANTES DE ENVIARLO

const ContactForm = () => {

  const captchaRef = useRef(null)
  const [msgInfo, setMsgInfo] = useState({
    name: "",
    mail: "",
    message: ""
  })
  const verifyToken = async (token) => {
    try {
      let response = await axios.post("http://localhost:2000/post",{
        secret: process.env.REACT_APP_SECRET_KEY,
        token,
      }, console.log(token));
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
  const submitData = async (e) => {
    e.preventDefault();
    const mailInfo = {
      request_name: msgInfo.name,
      request_mail: msgInfo.mail,
      request_message: msgInfo.message,
    }
    //esta parte es del captcha
    let token = captchaRef.current.getValue();

    if(token) {
      let valid_token = await verifyToken(token);
      if(valid_token.success) {
        //si sale bien
        console.log("success!")

        emailjs.send('service_p2tg3aa','template_abz7cai',mailInfo,'hnVafmaBIaDOWltE9')
          .then(response => {
            setMsgInfo({
              name: '',
              mail: '',
              message:'',
            })
            // captchaRef.current.reset();
          })
          .catch(error => {
            console.log(error)
          })
      }else{
        console.log("invalid token")
      }
    }else{
      console.log("Robot!")
    }
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
          <ReCAPTCHA 
            sitekey={process.env.REACT_APP_SITE_KEY}
            ref={captchaRef}
          />
        </motion.div>
        <motion.div variants={formChildren}>
          <Button type='submit'>Send</Button>
        </motion.div>
      </motion.div>
    </Box>
  )
}

export default ContactForm