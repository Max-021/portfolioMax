import React from 'react'
// import Navbar from '../components/navbar/Navbar'
import Box from '@mui/material/Box'
import { Outlet } from 'react-router-dom'

import Auxiliary from '../hoc/Auxiliary'

// test
import NavBar from '../components/navbar/newNavBar'

const Layout = (props) => {
  return (
    <Auxiliary>
      {/* <Navbar/> */}
      <NavBar/>
      <Box component="main" className='main-container'>
        {/* {props.children} */}
        <Outlet/>
      </Box>
    </Auxiliary>
  )
}

export default Layout