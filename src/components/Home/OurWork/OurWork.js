import React from 'react';
import './OurWork.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import carousel1 from '../../../images/carousel-1.png';
import carousel2 from '../../../images/carousel-2.png';
import carousel3 from '../../../images/carousel-3.png';

const OurWork = () => {
    return (
     <section className="caroesel-aria">
      <h2 className="works-title">Here are some of<span className="service-color"> our works</span></h2>
       <div className="container">
       <OwlCarousel
      className="owl-theme"
      autoplay
      loop
      margin={10}
      nav
      dots
  >
      <div class="item">
       <img src={carousel1} alt=""/>
        </div>
      <div class="item">
      <img src={carousel2} alt=""/>
        </div>
      <div class="item">
      <img src={carousel3} alt=""/>
        </div>
        <div class="item">
       <img src={carousel1} alt=""/>
        </div>
      <div class="item">
      <img src={carousel2} alt=""/>
        </div>
      <div class="item">
      <img src={carousel3} alt=""/>
        </div>
      
  </OwlCarousel>
       </div>
     </section>
    );
};

export default OurWork;