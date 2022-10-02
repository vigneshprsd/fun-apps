import React, { useContext } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Context } from "../store";

const Header = () => {
  const [state, dispatch] = useContext(Context);

  const { userDetails } = state.userDetails;
  return (
    <header>
      <Navbar bg="black" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>FUN❤️APPS</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link>Love Percentage Calculator</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/lovequotes">
                <Nav.Link>Love Quotes</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/funwithfriends">
                <Nav.Link>Prank your friends</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
          <Nav>
            {userDetails ? (
              <div onClick={()=>{ window.location.reload(false);}}>
                <Nav.Link>Logout</Nav.Link>
              </div>
            ) : (
              <><LinkContainer to="/login">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
                <Nav.Link>Register</Nav.Link>
              </LinkContainer></>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
