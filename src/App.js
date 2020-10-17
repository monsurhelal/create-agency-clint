import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddService from './components/Deshbord/AddService/AddService';
import AdminServices from './components/Deshbord/AdminServices/AdminServices';
import Deshbord from './components/Deshbord/Deshbord/Deshbord';
import MakeAdmin from './components/Deshbord/MakeAdmin/MakeAdmin';
import OrderPage from './components/Deshbord/OrderPage/OrderPage';
import UserReview from './components/Deshbord/UserReview/UserReview';
import UserServices from './components/Deshbord/UserServices/UserServices';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PriveteRoute/PrivateRoute';

export const UserContext  = createContext();

function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  return (
  
      <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router>
      <Switch>
    <Route path="/home">
    <Home></Home>
    </Route>
    <Route path="/login">
   <Login></Login>
    </Route>
    <PrivateRoute path="/deshbord">
   <Deshbord></Deshbord>
    </PrivateRoute>
    <Route path="/user/order">
    <OrderPage></OrderPage>
    </Route>
    <Route path="/user/services">
    <UserServices></UserServices>
    </Route>
    <Route path="/user/review">
    <UserReview></UserReview>
    </Route>
    <Route path="/admin/service">
    <AdminServices></AdminServices>
    </Route>
    <Route path="/admin/addservice">
    <AddService></AddService>
    </Route>
    <Route path="/admin/makeadmin">
    <MakeAdmin></MakeAdmin>
    </Route>
    <Route exact path="/">
    <Home></Home>
    </Route>

      </Switch>


      </Router>
      </UserContext.Provider>
      
   
  );
}

export default App;
