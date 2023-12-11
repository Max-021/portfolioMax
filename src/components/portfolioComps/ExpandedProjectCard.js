import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import {BsBoxArrowUpRight} from 'react-icons/bs'

import testImg from '../../assets/images/portfolio/testImg.jpg'
import expandedIngerayProject from '../../assets/images/portfolio/expanded-ingeray-project.png'
import expandedMaximilianoProject from '../../assets/images/portfolio/expanded-maximiliano-project.png'
// revisar el componente card de react mui

const cardSx = {
  width:'100%',
  height: 'auto',
}
const linkCard = {
  textDecoration: 'none',
  color: 'black',
}
const cardConfig = {
  backgroundColor: 'transparent'
}

const ExpandedProjectCard = ({url,name,descr,cardImg,skillInfo}) => {

  let titleLink;
  if(url != "#") {
    
  }
  return (
    <Card sx={cardConfig} className="project-modal">
      <CardMedia 
        component={'img'}
        sx={cardSx}
        image={cardImg} 
      />
      <CardContent className='expanded-card-content'>
        <Typography variant='h5' gutterBottom>
          {url != '#' ?
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
          <strong>The skills I used developing this project:</strong>&nbsp;
          {skillInfo}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ExpandedProjectCard