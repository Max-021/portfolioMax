import React from 'react'
import {motion} from 'framer-motion'

import {Link} from 'react-router-dom';

import links from '../../data/navData';


const NavBar = () => {


  return (
    <div className='nav-container'>
        <nav className='nav-list'>
            {links.map((link,index) => (
                <Link key={index} to={link.url} className='nav-list-item'>
                  {link.name}
                </Link>
            ))}
        </nav>
    </div>
  )
}

export default NavBar