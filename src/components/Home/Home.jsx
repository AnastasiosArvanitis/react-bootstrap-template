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



const Home = () => {
    return(
        <>

            

      <Container fluid={true}>
      <Row>
        <Col xs={12} sm={3} md={4} lg={5} xl={2}>
            <Jumbotron>1 of 2 HOME
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