import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const UserServices = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>

                </div>
                <div className="col-md-9">
                    <h2>service list page</h2>
                </div>
            </div>
            
        </section>
    );
};

export default UserServices;