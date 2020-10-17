import React from 'react';
import image from '../../../images/logos/Frame.png';
import './HireUs.css';

const HireUs = () => {
    return (
        <section className="hireus">
            <div className="container">
                <div className="row">
                    <div className="col-md-5 content-aria">

                    <h2>Let's Grow your <br/> brand To The <br/> Next Level</h2>
                    <p>Lorem ipsum dolor sit amet consectetur <br/> adipisicing elit. Facere iste quam impedit, <br/> quas excepturi at.</p>
                    <a href="#" className="hire-us-btn">Hire us</a>

                    </div>
                    <div className="col-md-7 img-fluid">

                        <img className="img-fluid" src={image} alt=""/>
                    </div>
                </div>
            </div>
           
        </section>
    );
};

export default HireUs;