
import Button from 'react-bootstrap/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
const Header = () => {
    return (
        <Navbar className='fixed-top mb-5'  bg="myBg"  expand="lg">
        <Container>
          <Navbar.Brand className='fw-bold text-white' href="#"><img src="/logo.png"  alt="" /> LearnWithBondhu</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-white"
              
              navbarScroll
            >
              <Nav.Link><Link to="/home">Home</Link></Nav.Link>
              <Nav.Link><Link to="/foods">Courses</Link></Nav.Link>
              <Nav.Link><Link to="/services">Pricing</Link></Nav.Link>
              <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
              <Nav.Link><Link to="/about">About</Link></Nav.Link>
              
              
            </Nav>
            <Form className="d-flex">
              <FormControl
              
                type="search"
                placeholder="Search"
                className="me-2 w-75"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
              
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Header;