import React,{useState} from 'react';
import './Navbar.css';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBInputGroup,
    MDBBadge
  } from 'mdb-react-ui-kit';

  import {FcSearch} from 'react-icons/fc';

const Navbar = () => {
    const [showBasic, setShowBasic] = useState(false);
  return (
    <div>
         <MDBNavbar   expand='lg' className='navbar-wrapper'   bgColor='dark'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'>Brand</MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
        <MDBInputGroup tag="form" className='d-flex w-50 mb-0'>
            <input className='form-control' placeholder="Type query" aria-label="Search" type='Search' />
            <MDBBtn className='px-2 py-0' > <FcSearch  size={24} /></MDBBtn>
          </MDBInputGroup>
          <MDBNavbarNav  className='mr-auto mb-2 mb-lg-0 d-flex justify-content-around '>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link'>
                  More
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Another action</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink>Something else here</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBBtn  color='info' className='me-2' type='button'>
             Login
        </MDBBtn>
            </MDBNavbarItem>

            
            <MDBNavbarItem>
            <MDBNavbarLink href='#'>
              <MDBBadge pill color='danger'>!</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </MDBNavbarLink>
          </MDBNavbarItem>
          </MDBNavbarNav>

         
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
    </div>
  )
}

export default Navbar;