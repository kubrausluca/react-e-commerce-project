import React from 'react';
import './Hero.css';
import Carousel from "react-bootstrap/Carousel";

import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image3 from "../assets/img3.jpg";


function Hero() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1}
          alt="First Image" style={{height: "100vh"}}
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Lorem Ipsum</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image2}
          alt="First Image" style={{height: "100vh"}}
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Lorem Ipsum</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image3}
          alt="First Image" style={{height: "100vh"}}
          />
          <Carousel.Caption>
            <h3>First Slide Label</h3>
            <p>Lorem Ipsum</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
