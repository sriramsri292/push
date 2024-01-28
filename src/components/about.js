import React from 'react';
import Nav from './nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';
import Button from 'react-bootstrap/Button';
export default function About(){
    const handle1 = () => {
    
        window.open('https://github.com/sriramsri292', '_blank');
      };
      const handle2 = () => {
    
        window.open('https://www.linkedin.com/in/sri-ram-sriram/', '_blank');
      };
    return(
        <div> 
            
         <div> 
            <Nav/>
            
            </div>   
       <div>
       <Container className='Aa'>
      <Row>
        <Col  >

        <div className='about-container'>
      <h2 className='about-title'>About Me</h2>
      <div className='about-info'>
        <div className='info-item'>
          <h4 className='info-label'>Name:</h4>
          <span className='info-value'>Sriram</span>
        </div>
        <div className='info-item'>
          <h4 className='info-label'>Age:</h4>
          <span className='info-value'>23</span>
        </div>
        <div className='info-item'>
          <h4 className='info-label'>Address:</h4>
          <span className='info-value'>Dharapuram, Tamil Nadu</span>
        </div>
        
        <div className='info-item'>
          <h4 className='info-label'>Ph.No:</h4>
          <span className='info-value'>9629104734</span>
        </div>
        <div className='info-item'>
          <h4 className='info-label'>E-mail:</h4>
          <span className='info-value'>sriram27435@gmail.com</span>
        </div>
        <div className='info-item'>
          <h4 className='info-label'>GitProfile:</h4>
          <span className='info-value'>   <Button variant="outline-secondary" onClick={handle1}>Click to Go</Button>{' '}</span>
        </div>
        <div className='info-item'>
          <h4 className='info-label'>Linkdin Profile:</h4>
          <span className='info-value'>   <Button variant="outline-secondary" onClick={handle2}>Click to Go</Button>{' '}</span>
        </div>
      </div>
    </div>
        
        
        </Col>
       
        <Col>
        <img className='Ai' src='https://img.freepik.com/free-vector/young-boy-holding-empty-frame_1308-35680.jpg?w=360&t=st=1706440170~exp=1706440770~hmac=656c7026dd66bc89d643cc850369549ce0932b83a6ef17dee92b0006f450251d' alt='img'/>
        
        </Col>
       
      </Row>
    </Container>
       </div>





        </div>
    )
}
