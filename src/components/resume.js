import React from 'react';
import Nav from './nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './resume.css';
import Button from 'react-bootstrap/Button';

export default function Resume(){

    const handleDownload = () => {
        window.open('/Resume .pdf', '_blank');
      };
    return(
        <div> 
            <div> 
                <Nav/>
            </div>
            <div> 
            <Container>
      <Row>
        <Col xs={6}>
             
           <h6 className='Rt'> As a dynamic Full Stack Developer, I sculpt seamless digital experiences with the MERN stack. My code is a fusion of innovation and precision, creating web solutions that captivate users . Proficient in<img width="30" height="30" src="https://img.icons8.com/emoji/48/man-technologyst.png" alt="man-technologyst"/></h6>
           <img width="60" height="60" src="https://img.icons8.com/fluency/48/html-5.png" alt="html-5"/>
           <img width="60" height="60" src="https://img.icons8.com/dusk/64/css3.png" alt="css3"/>
           <img width="60" height="60" src="https://img.icons8.com/color/48/javascript.png" alt="javascript"/>
           <img width="60" height="60" src="https://img.icons8.com/plasticine/100/react.png" alt="react"/>
           <img width="60" height="60" src="https://img.icons8.com/color/48/mongodb.png" alt="mongodb"/>
           <img width="60" height="60" src="https://img.icons8.com/external-those-icons-lineal-color-those-icons/24/external-MySQL-programming-and-development-those-icons-lineal-color-those-icons.png" alt="external-MySQL-programming-and-development-those-icons-lineal-color-those-icons"/>
           <img width="60" height="60" src="https://img.icons8.com/ios/50/postgreesql.png" alt="postgreesql"/>
           <img width="60" height="60" src="https://img.icons8.com/fluency/48/node-js.png" alt="node-js"/>
           <img width="60" height="60" src="https://img.icons8.com/fluency/48/c-programming.png" alt="c-programming"/>
           <img width="60" height="60" src="https://img.icons8.com/color/48/c-plus-plus-logo.png" alt="c-plus-plus-logo"/>

           <h6 className='Rtt'> To gain further insights, kindly download my resume for a more comprehensive overview</h6>

           <Button variant="warning"  className='Rb'onClick={handleDownload}> Click To Download </Button>
        </Col>
        <Col>
        
        <img className='Ri' src='https://img.freepik.com/free-vector/profile-data-concept-illustration_114360-3319.jpg?w=740&t=st=1706428525~exp=1706429125~hmac=6f43112d7f3513581dfa7a0edf40d57bb928a64d58611916ea0349287bb62331' alt='img'/>
        
      
        
        </Col>
      </Row>
    </Container>
            </div>
        </div>
    )
}
