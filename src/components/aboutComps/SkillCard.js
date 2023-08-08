import Typography from '@mui/material/Typography'
import React from 'react'

const SkillCard = ({skillGroupName, skills}) => {
  return (
    <>
    <Typography sx={{color: 'white', alignSelf:'center',}}>{skillGroupName}</Typography>
    <div className='skill-group-card'>
      {Array.from(skills).map(([key,value],index) => {
        console.log(value)
        console.log(key)
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