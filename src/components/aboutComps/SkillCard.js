import React from 'react'

const SkillCard = ({name,porcentaje}) => {
  return (
    <div className='skillCard'>
      <label htmlFor={name}>{name}</label>
      <div id={name} className='skill-bar'>
        <div className='bar-value' style={{width: `${porcentaje}%`}}></div>
      </div>
    </div>
    )
}

export default SkillCard