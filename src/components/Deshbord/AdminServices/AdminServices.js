import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AdminServices = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>

                </div>
                <div className="col-md-9">
                    <h2>admin service page</h2>
                </div>
            </div>
            
        </section>
    );
};

export default AdminServices;