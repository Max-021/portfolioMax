import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { cardConfig } from '../../styles/muiConfig';

import {BsBoxArrowUpRight} from 'react-icons/bs'

const cardSx = {
  width:'100%',
  height: 'auto',
}
const linkCard = {
  textDecoration: 'underline',
  color: 'black',
  transition: 'all 0.6s',
  "&:hover": {
    color: '#EEF0EB !important',
  }
}

const ExpandedProjectCard = ({url,name,descr,cardImg,skillInfo}) => {

  return (
    <Card sx={cardConfig} className="project-modal">
      <CardMedia 
        component={'img'}
        sx={cardSx}
        image={cardImg} 
      />
      <CardContent className='expanded-card-content'>
        <Typography variant='h5' gutterBottom>
          {url !== '#' ?
            <Link sx={linkCard} href={url} target='_blank' rel='noreferrer'>
              {name}
              <BsBoxArrowUpRight style={{fontSize: '35%',verticalAlign: 'text-top',margin:'5px 0 0 3px'}}/>
            </Link>
           :
            name
          }
        </Typography>
        <Typography variant='body1' paragraph gutterBottom>
          {descr}
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

export default ExpandedProjectCard