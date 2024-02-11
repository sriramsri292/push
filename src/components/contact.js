import React from "react";
import Nav from './nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';
import Button from 'react-bootstrap/Button';

export default function Contact(){
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
      <h2 className='about-title'>Contact Details</h2>
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
        <img className='Ai' src='https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1707631620~exp=1707632220~hmac=6422bfe70424bf78da9f58cf6571fdf8c984eb8e5431cff8d969bea860fdae4e' alt='img'/>
        
        </Col>
       
      </Row>
    </Container>
       </div>





        </div>
    )
}