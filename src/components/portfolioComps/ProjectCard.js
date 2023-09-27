import React from 'react'

const ProjectCard = ({name,descr,urlImg, clicked}) => {

  return (
    // <div>
      <div onClick={clicked} className={`project-img ${urlImg}`}>
        <div className='project-description'>
          <h2>{name}</h2>
          <p>{descr.substring(0,38)}...</p>
        </div>
      </div>
    // </div>
  )
}

export default ProjectCard