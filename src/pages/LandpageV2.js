import React from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt';
import AnimatedBkg from '../components/landpageComps/AnimatedBkg'


const routes = [
  {
    name: 'About',
    url: '/about'
  },
  {
    name: 'Work',
    url: '/work'
  },
  {
    name: 'Contact',
    url: '/contact'
  },
]

const LandpageV2 = () => {
  return (
    <div className='landpage-section-test'>
      <div className='lanpage-title'>
        <h1>Hi,I'm Max</h1>
        <div>
          <p className='subtitle'>Software developer</p>
          <motion.div 
            initial={{translateX: -160}}
            animate={{translateX: 0}}
            transition={{duration:3, ease: 'easeIn'}}
            className='subtitle-bkg'>
          </motion.div>
        </div>
      </div>
      <div className='landpage-nav'>
        {routes.map((route,index) => {
          return <Tilt key={index}
            tiltReverse={true}
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            >
              <Link key={index} to={route.url}>{route.name}</Link>
            </Tilt>
        })}
      </div>
    </div>
  )
}

export default LandpageV2