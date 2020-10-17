import React, { useEffect, useState } from 'react';
import './Services.css';
import Service from '../Service/Service';

const Services = () => {

// const service = [
//     {id:1,
//      img:"service1.png",
//      title:"web and mobile design",
//      description:"Web design encompasses many different skills and disciplines in the production and maintenance of websites. The different areas of web design include web graphic design; interface design;"
//     },
//     {id:2,
//     img:"service2.png",
//     title:"graphic design",
//     description:"Graphic design is the process of visual communication and problem-solving through the use of typography, photography, iconography and illustration. The field is considered a subset of visual communication and communication design"
//     },
//     {id:3,
//     img:"service3.png",
//     title:"web development",
//     description:"Web development is the work involved in developing a Web site for the Internet (World Wide Web) or an intranet (a private network).[1] Web development can range from developing a simple single static page of plain text to complex Web-based Internet applications "
//     }
// ]
const [service,setService] = useState([]);

useEffect(() => {
  fetch('https://still-falls-69912.herokuapp.com/service')
  .then(res => res.json())
  .then(data => setService(data) )


},[])

    return (
        <section>
            <h2 className="service-title">provide awesome <span className="service-color">services</span></h2>

            <div className="container">
                <div className="row">

                    {
                        service.map(service => <Service service={service}></Service>)
                    }
                </div>
            </div>

        </section>
    );
};

export default Services;