import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ImageSlider.css';
import image1 from '../assets/Image1.jpeg'
import image2 from '../assets/Image3.jpeg'
import image3 from '../assets/Image4.jpeg'
import image4 from '../assets/Image5.jpeg'
import image5 from '../assets/Image6.jpeg'

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={image1} alt="Slide 1" />
      </div>
      <div>
        <img src={image2} alt="Slide 2" />
      </div>
      <div>
        <img src={image3} alt="Slide 3" />
      </div>
      <div>
        <img src={image4} alt="Slide 4" />
      </div>
      <div>
        <img src={image5} alt="Slide 5" />
      </div>
    </Slider>
  );
};

export default ImageSlider;
