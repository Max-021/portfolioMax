import React, {useEffect, useState} from 'react'
import Box  from '@mui/material/Box'

import {configBox} from '../styles/muiConfig';


const Fhcontainer = (props) => {
  const [customHeight, setCustomHeight] = useState(0); 
  const responsiveSize = 900;

  const adjustResponsivePadding = () => {
    if(window.innerWidth < responsiveSize) {
      setCustomHeight(0)
    } else{
      const navHeight = document.querySelector('.nav-container').clientHeight;
      setCustomHeight(navHeight)
    }
  }

    useEffect(()=> {
    const initialNavHeight = document.querySelector('.nav-container').clientHeight;
    window.addEventListener('resize', adjustResponsivePadding);
      if(window.innerWidth < responsiveSize) {
        setCustomHeight(0)
      } else {
        setCustomHeight(initialNavHeight);        
      }
  }, [])

  return (
    <Box sx={configBox} className={props.clase} style={{paddingTop:`${customHeight}px`, minHeight: `calc(100vh - ${customHeight}px)`}}>
            {props.children}
    </Box>
    )
}

export default Fhcontainer