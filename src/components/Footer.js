import React from 'react'
import {Container} from 'react-bootstrap'
import '../Footer.css'

 const Footer = () => (
     <div className="centerized">
        <Container fluid style={{background: '#2C2F33', color:'#fff'}}>
            <Container style={{display: 'flex' , justifyContent: 'center', padding: '10px'}}>
                <p>FLKQ</p>
            </Container>
        </Container>
        </div> 

)

export default Footer;