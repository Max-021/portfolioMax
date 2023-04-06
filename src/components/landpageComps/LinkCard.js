import React from 'react'
import {Link} from 'react-router-dom'

const LinkCard = ({name, url}) => {
  return (
    <Link to={url}>
        <div className='linkCard'>
            {name}
        </div>
    </Link>
  )
}

export default LinkCard