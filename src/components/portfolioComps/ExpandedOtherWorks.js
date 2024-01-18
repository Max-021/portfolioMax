import React from 'react'
import parse from 'html-react-parser';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { cardConfig } from '../../styles/muiConfig';

import {BsBoxArrowUpRight} from 'react-icons/bs'

const descrSx = {
  fontSize: '120%',
}

const ExpandedOtherWorks = ({name,descr, skillInfo}) => {
  return (
    <Card sx={cardConfig} className="project-modal">
      <CardContent className='expanded-card-content'>
        <Typography variant='h4' gutterBottom>
            {name}
        </Typography>
        <Typography sx={descrSx} paragraph gutterBottom>
          {descr}
        </Typography>

        {/* Other works */}

        <Typography variant='body1' paragraph>
          - chiappalonepeluqueria.com.ar was a webpage that I developed earlier for a hair salon, it was one of my first works.
        </Typography>
        <Typography variant='body1' paragraph>
        - I worked with&nbsp;
        <Link className='expanded-card-link' href='http://www.meditech.com.ar/' target='_blank' rel='noreferrer'>
          Meditech
          <BsBoxArrowUpRight style={{fontSize: '35%',verticalAlign: 'text-top',margin:'5px 0 0 3px'}}/>
        </Link>&nbsp;
        in the development of aditional features for their programs on the front end side.
        </Typography>
        
        <Typography variant='body2' paragraph>
          <strong>Skills I used {name !== 'Other works' ? "developing this project" : ''}:</strong>&nbsp;
          <p className='expanded-card-skills'>
            {skillInfo}
          </p>
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ExpandedOtherWorks