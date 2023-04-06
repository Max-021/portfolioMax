import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'

import Auxiliary from '../hoc/Auxiliary'

// falta hacer que el navbar no aparezca en el home

const Layout = (props) => {
  return (
    <Auxiliary>
      <Navbar/>
      <Box component="main" className='main-container'>
        {/* {props.children} */}
        <Outlet/>
      </Box>
    </Auxiliary>
  )
}

export default Layout