import React from 'react'
import { Col, Row } from 'react-bootstrap'
import TitleImage from '../Assets/arrow.png'
import './Home.css';

function Skillls() {
  return (
    <div id='skills' className='container mt-5 p-2'>
   <Row>
    <Col>
    <h1 className='mt-2' style={{ fontFamily: 'Audiowide'}} >My <span style={{fontSize:'60px'}}> Skills</span></h1>
    </Col>
    <Col className="d-flex justify-content-center p-3">    
    <img className='img-fluid arr-head' width={'200px'} src={TitleImage} alt="" />
    </Col>
   </Row>
    <Row className='p-4 justify-content-center' >
    <Col sm={12} md={6} lg={2} ><img className='skill img-fluid my-3' src="https://cdn4.iconfinder.com/data/icons/flat-brand-logo-2/512/html5-512.png" alt="" style={{borderRadius:'50%'}} /></Col>
    <Col sm={12} md={6} lg={2}><img className='skill img-fluid my-3' src="https://cdn-icons-png.freepik.com/512/5968/5968242.png" alt="" /></Col>
    <Col sm={12} md={6} lg={2}><img className='skill img-fluid my-3' src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png" style={{borderRadius:'50%'}} alt="" /></Col>
    <Col sm={12} md={6} lg={2}><img className='skill img-fluid my-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" /></Col>
    <Col sm={12} md={6} lg={2}>
    <img className='skill img-fluid my-3' src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" alt="" />
    </Col>
    <Col sm={12} md={6} lg={2}>
    <img className='skill img-fluid my-3' src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="" />
    </Col>
    <Col sm={12} md={6} lg={2}>
    <img className='skill img-fluid my-3' src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-1174925.png?f=webp" alt="" />
    </Col>
    <Col sm={12} md={6} lg={2}>
    <img className='skill img-fluid my-3' src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="" />
    </Col>
    </Row>
    </div>
  )
}

export default Skillls