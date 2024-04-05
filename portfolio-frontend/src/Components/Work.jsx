import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './Home.css';
import Card from 'react-bootstrap/Card';
import image1 from '../Assets/sundar.JPG'
import image2 from '../Assets/homeify.JPG'
import image3 from '../Assets/migrationology.JPG'
import image4 from '../Assets/luminar.JPG'
import image5 from '../Assets/film.JPG'
import image6 from '../Assets/med.JPG'
import image7 from '../Assets/flapp.PNG'
import image8 from '../Assets/clone.PNG'
import image9 from '../Assets/online bank.PNG'



function Work() {
  return (
    <div id='projects' className='container my-5 p-2' style={{backgroundImage:'url("https://static.vecteezy.com/system/resources/previews/020/911/347/non_2x/gradient-blur-background-free-png.png")',backgroundPosition:'center left',backgroundSize:'contain',backgroundRepeat:'no-repeat'}}>
    <h1 className='mt-2 mx-5 px-4 text-center text-md-end' style={{ fontFamily: 'Audiowide'}} >My Amazing<span style={{fontSize:'60px'}}> Works</span></h1>
   <Row style={{backgroundImage:'url("https://www.geexpro.com/_next/image?url=%2Fmedia%2Fblur.png&w=1080&q=75")',backgroundRepeat:'no-repeat',backgroundPosition:'right',backgroundSize:'400px'}} className='p-3'>
   <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://flapp-rashida-mm.netlify.app/">
      <Card.Img src={image7} />
      </a>
        <Card.Body>
         <h6>FlApp - Flight Booking App</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://rashida-mm-med-hub.netlify.app/">
      <Card.Img  src={image6} />
      </a>
        <Card.Body>
        <h6>Med Hub - Dr Appointment</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://online-bank-rashida-mm.netlify.app/">
      <Card.Img  src={image9} />
      </a>
        <Card.Body>
        <h6>Online Bank</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://rashida-mm.github.io/movie-fetch/">
      <Card.Img  src={image5} />
      </a>
        <Card.Body >
        <h6>Film Hunt</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://rashida-mm.github.io/sundarpichai-portfolio/">
      <Card.Img src={image1} />
      </a>
        <Card.Body>
         <h6>Sundar Pichai Portfolio</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://rashida-mm.github.io/furniture-homeify/">
      <Card.Img  src={image2} />
      </a>
        <Card.Body >
        <h6>Homeify </h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://rashida-mm.github.io/travelblog/">
      <Card.Img  src={image3} />
      </a>
        <Card.Body >
        <h6>Migrationology - Travel Blog</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://rashida-mm.github.io/luminar-clone/">
      <Card.Img  src={image4} />
      </a>
        <Card.Body >
        <h6>Luminar Clone</h6>
        </Card.Body>
      </Card>
    </Col>
    <Col xs={12} sm={12} md={4} className='my-4'>
    <Card className='work-card'>
      <a href="https://abdundant-rashida.netlify.app/">
      <Card.Img  src={image8} />
      </a>
        <Card.Body>
        <h6>Abdundant Health Clone</h6>
        </Card.Body>
      </Card>
    </Col>
   
    
   </Row>
    </div>
  )
}

export default Work