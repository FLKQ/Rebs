import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';



const Jumbotron = () => (
    <Jumbo fluid className = "jumbo">
        <div className="overlay"></div>
        <Container>
            <h1>FLKQ</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat.</p>
        </Container>
    </Jumbo>

)

export default Jumbotron;