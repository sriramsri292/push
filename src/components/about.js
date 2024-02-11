import React from 'react';
import Nav from './nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './about.css';

export default function About(){
    
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
      <div> 
      <h6 className='Rt'>
  <span>Hello, I'm Sriram <img width="25" height="25" src="https://img.icons8.com/emoji/48/man-technologyst.png" alt="man-technologyst"/></span>, a B.E. Computer Science graduate 🚀 with a strong 7.9 CGPA. Specializing in the MERN stack, I'm a trained and certified Full Stack Developer 💻. With 47 mini projects and 4 full-stack projects in my toolkit, I bring hands-on expertise and a problem-solving mindset to every task. Excited to contribute my skills to innovative web development projects!
</h6>

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
