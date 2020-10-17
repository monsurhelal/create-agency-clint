import React from 'react';
import './Service.css';

const Service = (props) => {
   const {img,name,description} = props.service;
   const {service} = props;
    return (
        <div className="col-md-4">
            <div className="service-box">
                <img src={`data:image/png;base64,${service.image.img}`}  alt=""/>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;