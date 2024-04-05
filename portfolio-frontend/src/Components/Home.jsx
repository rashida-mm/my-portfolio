import React from 'react';
import {Col, Row} from 'react-bootstrap'
import TitleImage from '../Assets/carrying-laptop-coding_332004-664-removebg-preview (1).png'
import './Home.css';
import Resume from '../Assets/Resume Rashida.pdf'

function Home() {
  
  return (
    <div className='home container pt-5 mt-5'>
      <Row className='w-100'>
      <Col xs={12} sm={12} md={4}  className='pt-3 m-auto text-center text-md-start'>
      <h2 className='animated-text typing-animation'>Full Stack Developer</h2>      
      <h1 style={{ fontFamily: 'Audiowide',fontSize:'60px'}} >Rashida Majeed</h1>
      <div className='d-flex'>
      <p style={{borderLeft:'1px solid grey',padding:'5px'}}>I'm a Full Stack Developer and i can provide clean code and perfect design</p>
      <a style={{height:'57px'}} className='btn fs-6 btn-primary rounded-9' href={Resume} download={Resume}><i class="fa-solid fa-download fs-5"></i>CV</a>
      </div>
      </Col>
      <Col xs={12} sm={12} md={6}>
      <img className='animated-image' width={'100%'} src={TitleImage} alt="" />
      </Col>
      </Row>
      </div>
  );
}

export default Home;
