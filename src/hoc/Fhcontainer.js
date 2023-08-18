import React, {useEffect, useState} from 'react'
import Box  from '@mui/material/Box'

import {configBox} from '../styles/muiConfig';


const Fhcontainer = (props) => {
  const [customHeight, setCustomHeight] = useState(0)

  useEffect(()=> {
    const navHeight = document.querySelector('.nav-container').clientHeight;
    setCustomHeight(navHeight);
  }, [])

  return (
    <Box sx={configBox} className={props.clase} style={{paddingTop:`${customHeight}px`, height: `calc(100vh - ${customHeight}px)`}}>
            {props.children}
    </Box>
    )
}

export default Fhcontainer