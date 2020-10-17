import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer">
           <div className="container">
               <div className="row">
                   <div className="col-md-5">
                       <h2>Let's us handle your <br/> project ,professionally</h2>
                       
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aliquam unde accusantium et beatae minus quae culpa at quasi fuga, veniam ad error nobis excepturi!</p>
                   </div>
                   <div className="col-md-1"></div>
                   <div className="col-md-6">

                        <form className="send-form">
                        <input type="text"/>
                        <input type="text"/>
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <input type="submit" className="send-btn" value="send"/>


                        </form>

                   </div>
               </div>
           </div>
        </footer>
    );
};

export default Footer;