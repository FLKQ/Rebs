import React from "react"; 
import { Carousel } from "react-bootstrap";
import ocean from '../ocean.jpg'
import oceandv from '../ocean2.png'


export default function Slider()  {
    return (


    <>   
        <Carousel>
            <Carousel.Item>
                <img className="d-block w-100"
                     src = {oceandv}
                     alt = "Ocean Slide"               
                />
                <Carousel.Caption>
                    <h3>FLKQ TRYING HIS BEST</h3>
                    <p>Do do nostrud est aliqua.</p>
                    
                    </Carousel.Caption>                
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                     src = {oceandv}
                     alt = "Ocean Slide"               
                />
                <Carousel.Caption>
                    <h3>FLKQ TRYING HIS BEST</h3>
                    <p>Do do nostrud est aliqua.</p>
                    
                    </Carousel.Caption>                
            </Carousel.Item>
            <Carousel.Item>
                <img className="d-block w-100"
                     src = {oceandv}
                     alt = "Ocean Slide"               
                />
                <Carousel.Caption>
                    <h3>FLKQ TRYING HIS BEST</h3>
                    <p>Do do nostrud est aliqua.</p>
                    
                    </Carousel.Caption>                
            </Carousel.Item>
        </Carousel>
    </>
  )}