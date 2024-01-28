import React from 'react';
import Nav from './nav';
import './project.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function Project(){
  const handle1 = () => {
    
    window.open('https://github.com/sriramsri292/final1.git', '_blank');
  };
  const handle11 = () => {
    
    window.open('https://github.com/sriramsri292/back.git', '_blank');
  };
  const handle2 = () => {
    
    window.open('https://github.com/sriramsri292/Ecommesere-Final-front.git', '_blank');
  };
  const handle22 = () => {
    
    window.open('https://github.com/sriramsri292/Eback-final.git', '_blank');
  };
  const handle4 = () => {
    
    window.open('https://github.com/sriramsri292/chatFront.git', '_blank');
  };
  const handle44 = () => {
    
    window.open('https://github.com/sriramsri292/chatLogin.git', '_blank');
  };
  const handle3 = () => {
    
    window.open('https://github.com/sriramsri292/Tool.git', '_blank');
  };
  const handle33 = () => {
    
    window.open('https://github.com/sriramsri292/toolApi.git', '_blank');
  };
  const handleIconClick1 = () => {
    
    window.open('https://sparkly-salamander-888ffa.netlify.app/', '_blank');
  };
  const handleIconClick2 = () => {
    
    window.open('https://cozy-seahorse-5ddf16.netlify.app/', '_blank');
  };
  const handleIconClick3 = () => {
    
    window.open('https://tool-smoky-ten.vercel.app/', '_blank');
  };
  const handleIconClick4 = () => {
    
    window.open('https://celebrated-lollipop-d7139b.netlify.app/', '_blank');
  };
    return(
        <div> 
            <div> 
                <Nav/>
            </div>
        <div> 
            <h6 className='Pa'>Engineered a cutting-edge full-stack solution, showcasing mastery in creating responsive UIs, robust server-side logic, and efficient databases for an impactful and seamless digital experience </h6>
        </div>
<div> 
<Container className='Pc'>
      <Row>
        <Col>
        <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="\social media.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Social Media Application
          </Typography>
          <img className='Pi' onClick={handle1}
      style={{ cursor: 'pointer' }} width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img className='Pi' onClick={handle11}
      style={{ cursor: 'pointer' }} width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img className='Pi' onClick={handleIconClick1}
      style={{ cursor: 'pointer' }}  width="50" height="50" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-deployment-no-code-flaticons-flat-flat-icons-2.png" alt="external-deployment-no-code-flaticons-flat-flat-icons-2"/>
        </CardContent>
      </CardActionArea>
    </Card>
        
        
        </Col>
        <Col>
        <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="\commerse.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          E-commerce website
          </Typography>
          <img className='Pi' onClick={handle2}
      style={{ cursor: 'pointer' }} width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img className='Pi' onClick={handle22}
      style={{ cursor: 'pointer' }} width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img  className='Pi' onClick={handleIconClick2}
      style={{ cursor: 'pointer' }}  width="50" height="50" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-deployment-no-code-flaticons-flat-flat-icons-2.png" alt="external-deployment-no-code-flaticons-flat-flat-icons-2"/>
        </CardContent>
      </CardActionArea>
    </Card>
        
        </Col>
      </Row>
 </Container>
 <Container className='Pcc'>
    
      <Row>
        <Col>
        <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="\Toll.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Toll Calc
          </Typography>
          <img className='Pi' onClick={handle3}
      style={{ cursor: 'pointer' }} width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img className='Pi' onClick={handle33}
      style={{ cursor: 'pointer' }}  width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img className='Pi' onClick={handleIconClick3}
      style={{ cursor: 'pointer' }}  width="50" height="50" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-deployment-no-code-flaticons-flat-flat-icons-2.png" alt="external-deployment-no-code-flaticons-flat-flat-icons-2"/>
        </CardContent>
      </CardActionArea>
    </Card>
        </Col>
        <Col>
        <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="\Chat.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Astro Chat
          </Typography>
          <img className='Pi' onClick={handle4}
      style={{ cursor: 'pointer' }}   width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img className='Pi'  onClick={handle44}
      style={{ cursor: 'pointer' }}  width="50" height="50"  src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-Git-social-media-those-icons-lineal-color-those-icons.png" alt="external-Git-social-media-those-icons-lineal-color-those-icons"/>
          <img className='Pi' onClick={handleIconClick4}
      style={{ cursor: 'pointer' }}  width="50" height="50" src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-deployment-no-code-flaticons-flat-flat-icons-2.png" alt="external-deployment-no-code-flaticons-flat-flat-icons-2"/>
        </CardContent>
      </CardActionArea>
    </Card>
        </Col>
      </Row>
      </Container>
   
</div>



        </div>
    )
}
