import React from 'react';
import './Hero.css';
import Carousel from "react-bootstrap/Carousel";

import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";


function Hero() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image1}
          alt="First Image" style={{height: "100vh"}}
          />
          <Carousel.Caption>
            <h1 class="display-3 h-color">Heading One</h1>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
              quod aliquid inventore vero perspiciatis.</p>
            <a href="#" class="btn btn-color slide-btn btn-lg">Shop Now</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image2}
          alt="First Image" style={{height: "100vh"}}
          />
          <Carousel.Caption>
            <h1 class="display-3 h-color">Heading Two</h1>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
              quod aliquid inventore vero perspiciatis.</p>
            <a href="#" class="btn btn-color slide-btn btn-lg">Shop Now</a>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Hero;
