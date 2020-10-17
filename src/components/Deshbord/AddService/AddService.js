import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AddService.css';

const AddService = () => {
    const [info,setInfo] = useState({});
    const [file,setFile] = useState();
    console.log(info);

    const handleblur = (e) => {

        const newInfo = {...info};
        newInfo[e.target.name] = e.target.value;

        setInfo(newInfo)
    }
    const handlefile = (e) => {
        const newfile = e.target.files[0];
        setFile(newfile)
    }
    const handleSubmit = () => {

        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('description', info.description);
      
        fetch('http://localhost:5000/addservice', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })


    }
    return (
        <section>
            <div className="row mydata">
                <div className="col-md-3">
                    <Sidebar></Sidebar>

                </div>
                <div className="col-md-9">
                <form onSubmit={handleSubmit}>
  <div class="form-group">
    <label for="exampleInputEmail1">service name</label>
    <input onBlur={handleblur} type="text" class="form-control" name="name"  placeholder="service name"/>
   
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">description</label>
    <textarea onBlur={handleblur} type="text" name="description" class="form-control" id="exampleInputPassword1" placeholder="enter description about this service"></textarea>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">upload a file</label>
    <input type="file" onChange={handlefile} class="form-control" name="file"  id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
                </div>
            </div>
            
        </section>
    );
};

export default AddService;