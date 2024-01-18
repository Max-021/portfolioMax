import React from 'react'
import {motion} from 'framer-motion'

import {NavLink} from 'react-router-dom';

import links from '../../data/navData';


const NavBar = () => {


  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1, ease: 'easeIn'}}
      className='nav-container'
    >
          <nav className='nav-list'>
              {links.map((link,index) => (
                <NavLink key={index} to={link.url} className={({ isActive }) => (isActive ? 'nav-list-item active_navlink' : 'nav-list-item')} end>
                    {link.name}
                  </NavLink>
              ))}
          </nav>
    </motion.div>
  )
}

export default NavBar