import React from 'react';
import './BrandPic.css';
import brand1 from '../../../images/logos/slack.png';
import brand2 from '../../../images/logos/google.png';
import brand3 from '../../../images/logos/uber.png';
import brand4 from '../../../images/logos/netflix.png';
import brand5 from '../../../images/logos/airbnb.png';

const BrandPic = () => {
    return (
        <div className="container img-box">
            <img className="brand_img" src={brand1} alt=""/>
            <img className="brand_img" src={brand2} alt=""/>
            <img className="brand_img" src={brand3} alt=""/>
            <img className="brand_img" src={brand4} alt=""/>
            <img className="brand_img" src={brand5} alt=""/>
            
        </div>
    );
};

export default BrandPic;