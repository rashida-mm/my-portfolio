import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Home.css';
import TitleImage from '../Assets/Thumbnail.jpg'
function About() {
  return (
    <div className='abt container p-4' id='about'>
            <h1 className='text-center' style={{ fontFamily: 'Audiowide'}} >About <span style={{fontSize:'60px'}}> me</span></h1>
      <Row className='w-100 pt-3'>
        <Col xs={12} sm={12} md={5} className='d-flex m-auto'>
          <img className='dev img-fluid' src={TitleImage} alt="" />
        <img className='bubble img-fluid' src="https://www.freeiconspng.com/uploads/bubbles-png-0.png" alt="" />
        </Col>
        <Col xs={12} sm={12} md={6}>
        <p className='text-end '><i style={{fontSize:'50px'}} class="fa-solid fa-arrow-right-long text-info"></i></p>
        <p className='mx-auto p-2 text-center text-md-start '>Dedicated software developer with a proven ability to
thrive in the midst of chaos and confusion. An effective
team player who embraces change and consistently
seeks innovative solutions. Possesses strong analytical
skills, organizational abilities, and a natural talent for
creative problem-solving. Known for building strong
relationships quickly and driving hard towards project
success</p>
        <a style={{ width: '150px'}}
              className='btn btn-info mx-auto d-block shadow-0 text-center text-white rounded-9'
              href='https://www.linkedin.com/in/rashida-m-m-9oo277311/'
            >
              Connect
            </a>
        </Col>
      </Row>
    </div>
  )
}

export default About