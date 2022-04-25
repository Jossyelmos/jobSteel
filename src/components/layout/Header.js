import React from 'react';
import {Navbar, Container, Nav, Form, Button } from 'react-bootstrap';
import Logo from '../../images/Hub-logo.png';
import PropTypes from 'prop-types'

const Header = ({ title }) => {

  return (
    <Navbar className='bg-peach' expand="lg" style={{ marginBottom: '0' }}>
    <Container>
      <Navbar.Brand style={{ marginRight: '3rem' }}>
        <h1>
          <img className='logo' src={Logo} alt="" /> Jobsteel
        </h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto justify-content-center">
        <Nav.Link href="/">Find Jobs</Nav.Link>
        <Nav.Link href="/joblist">Browse Jobs</Nav.Link>
        <Nav.Link href="#link">Employers</Nav.Link>
        <Nav.Link href="#link">Candidates</Nav.Link>
        <Nav.Link href="#link">Blogs</Nav.Link>
        <Nav.Link href="#link">Pages</Nav.Link>
      </Nav>
        <Form className="d-flex">
          <Nav.Link href="#link">Job Posts</Nav.Link>
          <Button variant="outline-primary">Sign in</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

Navbar.defaultProps = {
    title: 'JobSteel',
}

Navbar.prpoTypes = {
  tite: PropTypes.string.isRequired
}

export default Header;