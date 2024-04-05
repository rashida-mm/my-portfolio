import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
          <MDBFooter className='text-center text-lg-start text-muted'>
      <section className='footer'>
        <MDBContainer className='text-center text-md-start pt-1'>
          <MDBRow className='mt-3 '>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold' style={{fontFamily:'Audiowide',}}>
                <MDBIcon icon="robot" className="me-3"  />
                Rashida Majeed
              </h6>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='ms-auto'>
            <p>
                <a href='/' className='text-reset'>
                  Home
                </a>
              </p>            
              </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='ms-auto'>
            <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='ms-auto'>
            <p>
                <a href='#!' className='text-reset'>
Skills                </a>
              </p>            </MDBCol>
            <MDBCol md="3" lg="2" xl="2" className='ms-auto'>
            <p>
                <a href='#!' className='text-reset'>
                  Contact
                </a>
              </p>            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          Rashida Majeed. All rights reserved
        </a>
      </div>
    </MDBFooter>

    </div>
  )
}

export default Footer