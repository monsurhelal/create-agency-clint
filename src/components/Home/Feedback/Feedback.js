import React from 'react';
import './Feedback.css';

const Feedback = ({feedback}) => {
    return (
        <section>
           <div className="content-box-aria">
            <div className="clints-name">
                <div className="clints-img">
                    <img src={feedback.img} alt=""/>
                </div>
                <div className="clints-workat">
                <h3>{feedback.name}</h3>
                    <p>{feedback.workat}</p>
                </div>

            </div>
            <div className="clints-description">
    <p>{feedback.description}</p>
            </div>


           </div>
        </section>
    );
};

export default Feedback;