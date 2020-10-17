import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const MakeAdmin = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>

                </div>
                <div className="col-md-9">
                    <h2>Make Admin</h2>
                <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
            
        </section>
    );
};

export default MakeAdmin;