import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {

  return (
    <header>
      <Navbar bg="black" variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>FUN❤️APPS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/lovecalc'>
                <Nav.Link>
                  Love Percentage Calculator 
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/lovequotes'>
                <Nav.Link>
                  Love Quotes 
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
