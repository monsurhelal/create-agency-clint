import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const UserReview = () => {
    return (
        <section>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar></Sidebar>

                </div>
                <div className="col-md-9">
                <form>
  <div class="form-group">
    <label for="exampleInputEmail1">your name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your name"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">company name</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="companey name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">description</label>
    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="description"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
            
        </section>
    );
};

export default UserReview;