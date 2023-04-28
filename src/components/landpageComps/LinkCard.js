import React from 'react'
import {Link} from 'react-router-dom'
import Tilt from 'react-parallax-tilt';

const LinkCard = ({name, url}) => {
  return (
    <Tilt 
      className='linkWrapper'
      tiltReverse={true}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareMaxOpacity={0.3}
      glareColor='#EEF0EB'
    >
      <Link to={url}>
          <div className='linkCard'>
              {name}
          </div>
      </Link>
    </Tilt>
  )
}

export default LinkCard