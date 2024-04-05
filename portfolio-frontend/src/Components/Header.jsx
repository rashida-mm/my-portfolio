import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBCollapse,
  MDBIcon,
  MDBNavbarNav,
} from 'mdb-react-ui-kit';
import Modes from './Modes';
import './Mode.css';

function Header() {
  const [openNavNoTogglerSecond, setOpenNavNoTogglerSecond] = useState(false);

  return (
    <div className='container d-flex align-items-center justify-content-center'>
      <MDBNavbar expand='lg' className='navbar shadow-0 border border-2 mt-2 rounded-9 p-2'>
        <MDBContainer fluid>
          <MDBNavbarBrand className='me-5' href='/' style={{ fontFamily: 'Audiowide', backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(to right, #D017B8, #0000FF)' }}>
            rM
          </MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo02'
            aria-controls='navbarTogglerDemo02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNavNoTogglerSecond(!openNavNoTogglerSecond)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openNavNoTogglerSecond}>
            <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
                <MDBNavbarLink className='me-4' aria-current='page' href='/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='me-4' href='#about'>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='me-4' href='#skills'>
                  Skills
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink className='me-4' href='#projects'>
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
            <div className='me-4'>
              <Modes />
            </div>
            <a
              style={{ width: '150px', border: '2px solid #D017B8', backgroundColor: '#D017B8' }}
              className='btn shadow-0 text-center text-white rounded-9'
              href='https://www.linkedin.com/in/rashida-m-m-9oo277311/'
            >
              Connect
            </a>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
