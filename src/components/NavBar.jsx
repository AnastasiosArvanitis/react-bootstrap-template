import React from 'react';
import { 
    Container, Row, Col, 
    Jumbotron, 
    Navbar, Nav, NavDropdown 
} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

const NavBar = () => {
    return (
    <Navbar bg="dark" variant="dark">
        <Nav className="container-fluid">
            <Nav.Item >
                <Navbar.Brand as={Link} to="/">Demo App</Navbar.Brand>
            </Nav.Item>
            <Nav.Item className="ml-auto">
                <Nav.Link as={Link} to="/User">User List</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link >Log Out</Nav.Link>
            </Nav.Item>
        </Nav>
    </Navbar>
    );
}

export default NavBar;

/* <Navbar 
                bg="primary" 
                variant="dark" 
                expand="md" 
                className="d-flex align-content-end"
                >
    
        
                <Navbar.Brand href="#home">
                    React bootstrap Template
                </Navbar.Brand>
    

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
                <Navbar.Collapse 
                    id="basic-navbar-nav" 
                    
                >
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            
          
</Navbar> */