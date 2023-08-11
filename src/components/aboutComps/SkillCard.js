import Typography from '@mui/material/Typography'
import React from 'react'

const SkillCard = ({skillGroupName, skills, activeGroupCallback, active}) => {

  return (
    <>
    <Typography sx={{color: 'white', alignSelf:'center',}}>{skillGroupName}</Typography>
    <div
      className={`skill-group-card ${active ? 'active-shadow' : ''}`}
      onMouseEnter={() => {
        activeGroupCallback(skillGroupName)
      }}>
      {Array.from(skills).map(([key,value],index) => {
        return <div key={index} className='skill-detail-card'>
            {value}
            <Typography className='skill-name' sx={{display: 'inline-block',paddingLeft:'4px',verticalAlign: '35%',  fontWeight: 'bold'}}>
              {key}
            </Typography>
          </div>;
      })}
    </div>
    </>
    )
}

export default SkillCard