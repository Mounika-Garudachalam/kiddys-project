import React from "react";
// import '../App.css';
import {  useNavigate, Link} from "react-router-dom";

// import { Component } from "react";

import {useState} from "react";
//image
import image from "./images/image.jpeg";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

//toastify
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Navbar  from "../Dashboard/navbar/Navbar";
// import Home from "../Dashboard/home/Home";
// import App from '../App';

import Dashboard from "../Layout/Dashboard";




function Loginform() {
    const [user_id,useridupdate] = useState('');
    const [user_password,userpasswordupdate] = useState('');
    
// const navigate=useNavigate();
    
    const ProceedLogin=(e) => {
       
        e.preventDefault();
        // navigate('{<index/>}');
        if(validate()){
            
        //implement functionality
            
            // navigate("..", { relative: "path" });
            // return <navigate to="/Dashboard" replace />;
            
        //    navigate('/Dashboard' ,{replace:true});
        window.location.replace('/Dashboard'); 
    

    };
}
    // <!------------validation----------------->
    const validate=()=>{
        let result;
        if(user_id === '' || user_id === null){
        result = false;
           alert('please enter user_id');
        //     const showToastMessage = () => {
        //    toast.warning('please enter user_id',{
        //     position:toast.POSITION.TOP_CENTER
        //    });
        }
        
        if(user_password === '' || user_password === null){
        result = false;
            alert('please enter user_password');
            // toast.warning('please enter user_password');
        }
        
        if(user_id==="admin" && user_password==="123"){
        result = true;
          
        
            // alert('successfull');
        }
        else {
            alert('Invalid username and password')
        }
        
     return result;
    }
    
        
    return (
       
        <section className="Login" style={{backgroundColor: "white", color:"blue", fontFamily: "Arial", position:"relative"}}>
        <div className="container-fluid" style={{padding:"3% 15%"}}>
            
            <nav className="navbar navbar-expand-lg navbar-light navbar-text">

           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <a className="navbar-brand"/* href=""*/>Kiddy's</a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" /*href=""*/>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" /*href=""*/>Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>

        <div className="flex justify-content-center align-items-center h-100">
            <div className="flex-col">
                <img className="img-fluid" alt="schoolimage" src={image}/>
            </div>
            <div className="flex-col">
                <h1>Kiddy's & Root's Global Schools</h1>
                <form onSubmit={ProceedLogin} >
                {/* onSubmit={ProceedLogin} */}
                {/* action="../Dashboard/navbar/Navbar" */}
                    <p>Please Login to your account</p>
                    
                    <div className="form-outline mt-4 mb-4">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                  <div className="input-group-text" style={{color:"blue"}}>@</div>
                            </div>
                        <input className="form-control" name="user_id" onChange={e=>useridupdate(e.target.value)} id="username" type="Username" placeholder="Username"/>
                        </div>
                    </div>
                    
                    <div className="form-outline mb-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                              <div className="input-group-text" style={{color: "blue"}}>@</div>
                        </div>
                        <input className="form-control" name="user_password" onChange={e=>userpasswordupdate(e.target.value)} id="password" type="Password"  placeholder="Password"/>
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <button component={<Link to="/"/>} type="Submit"  className="btn btn-block btn-primary gradient-custom">LOG IN</button>
                    </div>
                    <div className="text-center mb-4">
                        <a className="text-muted mb-4">Forgot Password?</a>
                    </div>
                     <div className="d-flex align-items-center justify-content-center">
                        <p className="mb-0 me-2">Don't have an account?</p>
                        <button type="button" className="btn btn-outline-primary">Create New</button>
                    </div>
                    
                </form>
            </div>
        </div>
        
        <div className="mt-5">
        <footer id="footer">
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook}/>
            <FontAwesomeIcon icon={faInstagram}/>
            <FontAwesomeIcon icon={faEnvelope} />
            <p>© Copyright Kiddy's</p>
        </footer>
        </div>
        </div>
        </section>
   
    );
 }



 export default Loginform;