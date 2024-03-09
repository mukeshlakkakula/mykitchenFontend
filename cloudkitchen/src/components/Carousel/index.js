import React, { Component } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import "./index.css";
class DemoCarousel extends Component {
  render() {
    return (
      <div className="imageCoroselContainer">
        <Carousel
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          swipeable={false}
          stopOnHover={false}
          showThumbs={false}
          className="carousel"
        >
          <div>
            <img
              src="https://i.pinimg.com/564x/26/3a/6e/263a6eb044289b51933c6c2459041f10.jpg"
              alt="h1"
            />
            <p className="legend fs-5">Top Combo 1</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/b1/eb/ff/b1ebff69bdc46032093c480f7e97e115.jpg"
              alt="h1"
            />
            <p className="legend fs-5">Top Combo 2</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/cd/a2/b0/cda2b0fdd05701873fe8c9b1fad7039f.jpg"
              alt="h1"
            />
            <p className="legend fs-5">Top Combo 3</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/564x/e6/b1/9b/e6b19be8361437cd553075f0c24be1ca.jpg"
              alt="h1"
            />
            <p className="legend fs-5">Top Combo 4</p>
          </div>
          <div>
            <img
              src="https://i.pinimg.com/736x/92/ae/b6/92aeb62be697336de739eb4af6b8a263.jpg"
              alt="h1"
            />
            <p className="legend fs-5">Top Combo 5</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default DemoCarousel;
