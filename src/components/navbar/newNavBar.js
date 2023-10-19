import React from 'react'
import {motion} from 'framer-motion'

import {Link} from 'react-router-dom';

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
                <Link key={index} to={link.url} className='nav-list-item'>
                    {link.name}
                  </Link>
              ))}
          </nav>
    </motion.div>
  )
}

export default NavBar