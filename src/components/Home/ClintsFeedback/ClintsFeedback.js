import React from 'react';
import './ClintsFeedback.css';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';
import Feedback from '../Feedback/Feedback';

const clints = [
    {id:1,
     img:customer1,
     name:"Nash patrik",
     workat:"CEO Manpol",
     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iusto debitis tenetur, quia suscipit sequi natus qui explicabo facere deleniti."
    },
    {id:2,
    img:customer2,
    name:"mirial barron",
    workat:"CEO Manpol",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iusto debitis tenetur, quia suscipit sequi natus qui explicabo facere deleniti."
    },
    {id:3,
    img:customer3,
    workat:"CEO Manpol",
    name:"bria malone",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem iusto debitis tenetur, quia suscipit sequi natus qui explicabo facere deleniti."
    }
]


const ClintsFeedback = () => {
    return (
        <section>
            
            <h2 className="feedback-title">Here are some of<span className="service-color"> our works</span></h2>

            <div className="container">
                <div className="row">


                            {       
                            clints.map(feedback => <Feedback feedback={feedback}></Feedback> )
                            
                            }

                </div>
            </div>
        </section>
    );
};

export default ClintsFeedback;