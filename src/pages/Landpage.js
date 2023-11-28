import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import Tilt from 'react-parallax-tilt';

import { secondColor } from '../styles/muiConfig';


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
const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0.5;
    // const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "forward", duration: 3.5, bounce: 0 },
        opacity: { delay, duration: 0.5 }
      }
    };
  }
};

const rectW = 2000
const responsiveH = 2500;

const LandpageV2 = () => {
  const [rectH, setRectH] = useState(1000)
  const responsiveSize = 900;

  const adjustResponsiveRect = () => {
    if(window.innerWidth < responsiveSize) {
      setRectH(responsiveH)
    } else{
      setRectH(1000)
    }
  }

    useEffect(()=> {
    window.addEventListener('resize', adjustResponsiveRect);
      if(window.innerWidth < responsiveSize) {
        setRectH(responsiveH)
      } else {
        setRectH(1000)
      }
  }, [])

  return (
    <div className='landpage-section-test'>
      <div className='landpage-screen'>
        <motion.svg
          className="landpage-icon"
          width={1000}
          height={1000}
          viewBox="0 0 2050 1000"
          initial="hidden"
          animate="visible"
          >
            <motion.rect
              className="landpage-rect"
              width={rectW}
              height={rectH}
              x="10"
              y="0"
              rx="20"
              stroke={secondColor}
              variants={draw}
              custom={3}
            />
        </motion.svg>
      {/* </div> */}
        <div className='lanpage-title'>
          <h1>Hi,I'm Max</h1>
          <div>
            <p className='subtitle'>Software developer</p>
            <motion.div 
              initial={{translateX: -470}}
              animate={{translateX: 0}}
              // transition={{duration:3, ease: 'easeIn',delay:3.8}}
              transition={{duration:2.8, ease: 'easeOut',delay:3.5,type: "tween"}}
              className='subtitle-bkg'>
            </motion.div>
          </div>
        </div>
      </div>
      <div className='landpage-nav'>
        {routes.map((route,index) => {
          return <Tilt key={index}
            tiltReverse={true}
            tiltMaxAngleX={20}
            tiltAxis='y'
            >
              <Link key={index} to={route.url}>{route.name}</Link>
            </Tilt>
        })}
      </div>
    </div>
  )
}

export default LandpageV2