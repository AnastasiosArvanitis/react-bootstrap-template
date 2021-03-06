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

import './NavBar.scss';

import NavBarContent from '../../content/NavBarContent.js';

const NavBar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        
        <Navbar.Brand 
                    as={Link} 
                    to="/"
                >
                    React Bootstrap Template
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="responsive-navbar-nav">
                
        <Nav className="ml-auto">
            { NavBarContent.map( (item) => {
                return(
                    <Nav.Item key={item.link+1}>
                        <Nav.Link as={Link} to={item.link}> 
                            {item.linkTitle} 
                        </Nav.Link>
                    </Nav.Item>)
                })
            }  
        </Nav>

        </Navbar.Collapse>
    </Navbar>
    );
}

export default NavBar;

