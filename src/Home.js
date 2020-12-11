import React from 'react';
import { Col, Container, CardGroup, Row, Card, Button, Jumbotron } from 'react-bootstrap';
import Slider from './components/Slider';
import Jumbotron2 from './components/Jumbotron2';
import ocean from './ocean.jpg'
import './home.css'; 
import oceandv from './ocean2.png'


export const Home = () => (

    <>
        <Slider/>
        <div className="bg">
        <div className="container">                           
                <Row>
                    <Col>
                        <Card className="card-w">
                            <Card.Img variant="top" src={oceandv} />
                                <Card.Body>
                                    <Card.Title>FLKQ</Card.Title>
                            <           Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card-w">
                            <Card.Img variant="top" src={oceandv} />
                                <Card.Body>
                                    <Card.Title>FLKQ</Card.Title>
                            <           Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="card-w">
                            <Card.Img variant="top" src={oceandv} />
                                <Card.Body>
                                    <Card.Title>FLKQ</Card.Title>
                            <           Card.Text>
                                This is a wider card with supporting text below as a natural lead-in to
                                additional content. This content is a little bit longer.
                                        </Card.Text>
                                        <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            
            </div>
            </div>

            <Jumbotron2/>

            <Container style={{marginBottom: '30px'}}>
                <Row>
                        <Col md={7}>
                        <img src={oceandv} height={400} width={620}/>                       
                        </Col>

                        <Col md={5}>
                            <h2>FLKQ</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                        laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </Col>

                </Row>

            </Container>
    
    </>
)