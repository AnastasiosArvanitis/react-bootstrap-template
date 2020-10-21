import React from 'react';
import { 
    Container, Row, Col, 
    Jumbotron, 
    Navbar, Nav, NavDropdown 
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
    return(
        <>

            {/* <Navbar 
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
            
         as={Link} to="/" as={Link} to="/user-list"
</Navbar> */}

    <Navbar bg="dark" variant="dark">
    <Nav className="container-fluid">
        <Nav.Item >
        <Navbar.Brand>Demo App</Navbar.Brand>
        </Nav.Item>
        <Nav.Item className="ml-auto">
        <Nav.Link >User List</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link >Log Out</Nav.Link>
        </Nav.Item>

        {/* <Nav.Item>
        <Nav.Link>Hi fname lname!</Nav.Link>
        </Nav.Item> */}
    </Nav>
    </Navbar>

      <Container fluid={true}>
      <Row>
        <Col xs={12} sm={3} md={4} lg={5} xl={2}>
            <Jumbotron>1 of 2
            </Jumbotron>    
        </Col>
        <Col xs={12} sm={9} md={8} lg={7} xl={10}>
            <Jumbotron>1 of 2
            </Jumbotron> 
        </Col>
      </Row>
    </Container>
    </> 
    );
}

export default Home;