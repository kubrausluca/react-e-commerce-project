import React from 'react';
import './Hero.css';
import Carousel from "react-bootstrap/Carousel";

import image4 from "../assets/img4.jpg";
import image5 from "../assets/img5.jpg";


function Hero() {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={image4}
          alt="first" style={{height: "100vh"}}
          />
          <Carousel.Caption>
            <h1 class="display-3 h-color">Heading One</h1>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
              quod aliquid inventore vero perspiciatis.</p>
            <a href="/products" class="btn btn-color slide-btn btn-lg">Shop Now</a>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={image5}
          alt="second" style={{height: "100vh"}}
          />
          <Carousel.Caption>
            <h1 class="display-3 h-color">Heading Two</h1>
            <p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, aperiam vel ullam deleniti reiciendis ratione
              quod aliquid inventore vero perspiciatis.</p>
            <a href="products" class="btn btn-color slide-btn btn-lg">Shop Now</a>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>
    </div>
  );
}

export default Hero;
