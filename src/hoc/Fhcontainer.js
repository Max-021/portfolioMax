import React from 'react'
import Box  from '@mui/material/Box'

import {configBox} from '../styles/muiConfig';


const Fhcontainer = (props) => {
  return (
    <Box sx={configBox} className={props.clase} >
            {props.children}
    </Box>
    )
}

export default Fhcontainer