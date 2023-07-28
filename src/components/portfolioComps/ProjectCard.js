import React from 'react'

const ProjectCard = ({name,descr,urlImg, clicked}) => {

  return (
    <div className={`project-card`} onClick={clicked}>
      <div className={urlImg}>
        <div className='project-description'>
          <h2>{name}</h2>
          <p>{descr.substring(0,30)}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard