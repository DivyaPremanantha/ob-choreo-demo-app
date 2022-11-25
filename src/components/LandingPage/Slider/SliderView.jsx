import React from 'react'
import '../../../css/LandingPage.css'
import {Carousel} from "react-bootstrap";
import Slider1 from "../../../images/SliderNew1.jpg"
import Slider2 from "../../../images/sliderNew2.jpg"
import Slider3 from "../../../images/SliderNew3.jpg"

export const SliderView = () => {

  return(
    <div className = "container-md p-0 slider-container">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src={Slider1}
            alt="First slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src={Slider2}
            alt="Second slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src={Slider3}
            alt="Third slide"
          />
          <Carousel.Caption>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <a href="http://www.freepik.com">Designed by vectorjuice / Freepik</a>

    </div>
  )
}