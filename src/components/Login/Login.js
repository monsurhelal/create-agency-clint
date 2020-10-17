import React, { useContext } from 'react';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import logo from '../../images/logos/logo.png';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);


const handleSubmit = () =>{

}

const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    let location = useLocation();
  
    const { from } = location.state || { from : { pathname: "/" }}
    const handleClick = () => {

    

        const provider = new firebase.auth.GoogleAuthProvider();
    
        firebase.auth().signInWithPopup(provider).then(function(result) {
           
            var token = result.credential.accessToken;
        
            var user = result.user;
            setLoggedInUser(user);
            history.replace(from);
            console.log(user,user.displayName)
          
          }).catch(function(error) {
        
            
            var errorMessage = error.message;
          console.log(errorMessage)
            
          
            
          });
    
    }
    
    return (
        <div className="login-aria">
             <img src={logo} alt=""/>
            <form onSubmit={handleSubmit}>
            <div className="login-box">
            <h3>login with</h3>
            <p><i class="fab fa-google"></i><input type="button" onClick={handleClick} value="continue with google"/></p>
            <p>donts have account?<a href=""> create a account</a></p>

            </div>
            </form>
        </div>
    );
};

export default Login;