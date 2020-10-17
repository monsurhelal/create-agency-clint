import React from 'react';
import BrandPic from './BrandPic/BrandPic';
import ClintsFeedback from './ClintsFeedback/ClintsFeedback';
import Footer from './Footer/Footer';
import HireUs from './HireUs/HireUs';
import Navber from './Navber/Navber';
import OurWork from './OurWork/OurWork';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <HireUs></HireUs>
            <BrandPic></BrandPic>
            <Services></Services>
            <OurWork></OurWork>
            <ClintsFeedback></ClintsFeedback>
            <Footer></Footer>
        </div>
    );
};

export default Home;