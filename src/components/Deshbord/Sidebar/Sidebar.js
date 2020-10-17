import React from 'react';
import './sidebar.css';
import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="side-menu">
            <img src={logo} alt=""/>
           <ul className="side-menu-container">
               <li>
                   <Link to="/user/order"> <span>order</span> </Link>
                </li>
                <li>
                   <Link to="/user/services"> <span>service list</span> </Link>
                </li>
                <li>
                   <Link to="/user/review"> <span>review</span> </Link>
                </li>
                <li>
                   <Link to="/admin/service"> <span>service list</span> </Link>
                </li>
                <li>
                   <Link to="/admin/addservice"> <span>add service</span> </Link>
                </li>
                <li>
                   <Link to="/admin/makeadmin"> <span>make admin</span> </Link>
                </li>
           </ul>
        </div>
    );
};

export default Sidebar;