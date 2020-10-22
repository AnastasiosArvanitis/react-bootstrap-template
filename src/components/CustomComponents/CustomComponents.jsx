import React from 'react';
import { 
    Container, 
    Row, Col, 
    Jumbotron
} from 'react-bootstrap';

const CustomComponents = () => {
    return(
        <>
        <Container fluid={true} className='mt-5'>
        <Row>
            <Col xs={0} sm={1} md={2} lg={2} xl={3}>
            </Col>
            <Col xs={12} sm={10} md={8} lg={8} xl={6}>
                <Jumbotron className='bg-info'>
                    <p className='text-center display-4'>CustomComponents</p> 
                </Jumbotron>    
            </Col>
            <Col xs={0} sm={1} md={2} lg={2} xl={3}>
            </Col>
        </Row>
        </Container>
    </> 
    );
}

export default CustomComponents;