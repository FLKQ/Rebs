import React from 'react';
import {Jumbotron as Jumbo, Container } from 'react-bootstrap';
import ocean from '../ocean.jpg';
import styled from 'styled-components';
import oceandv from '../ocean2.png'

const Styles = styled.div`
    .jumbo{
        background: url(${oceandv}) no-repeat fixed bottom;
        background-size: cover;
        color: #efefef;
        height: 400px;
        position:relative;
        z-index: -2;
    }

    .overlay{
        background-color: black;
        opacity: 0.6;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: -1;
    }

`

export default function Jumbotron2(){
    return( 
        <>
        <Styles>
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
    </Styles>


        </>
    )
}