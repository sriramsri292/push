import React from 'react';
import './home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from './nav';



export default function Home (){
    return(
        <div> 
            <div> 
       <Nav/>
            </div>

            <div className='Hb'> 
            <Container>
      <Row>
        <Col xs={6}>
             <h1 className='Ht'> I am a Software Developer
              <img width="100" height="100" src="https://img.icons8.com/clouds/100/so-so.png" alt="so-so"/> </h1>
           <h6 className='Htt'> As Sriram, a dedicated Software Developer, I push technology boundaries to craft exceptional digital experiences<img width="30" height="30" src="https://img.icons8.com/emoji/48/man-technologyst.png" alt="man-technologyst"/></h6>
        
        
        </Col>
        <Col>
        
        <img className='Hi' src='https://img.freepik.com/free-vector/boy-browsing-internet-laptop_1308-118652.jpg?w=740&t=st=1706425872~exp=1706426472~hmac=4b31716f6824fa99e42ebf3e7b83adb198872c0330ad7812f8e1e53adafe6214' alt='img'/>
        
        
        
        </Col>
      </Row>
    </Container>
            </div>
        </div>
    )
}