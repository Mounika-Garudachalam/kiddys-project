import React from "react";
//image
import image from "./images/image.jpeg";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

function Loginform(){
    return (
       
        <section style={{backgroundColor: "white", color:"blue", fontFamily: "Arial"}}>
        <div className="container-fluid" style={{padding:"3% 15%"}}>
            
            <nav className="navbar navbar-expand-lg navbar-light navbar-text">

           
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <a className="navbar-brand" href="">Kiddy's</a>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Contact</a>
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
                <form>

                    <p>Please Login to your account</p>
                    
                    <div className="form-outline mt-4 mb-4">
                        <div className="input-group">
                            <div className="input-group-prepend">
                                  <div className="input-group-text" style={{color:"blue"}}>@</div>
                            </div>
                        <input className="form-control" id="username" type="Username" placeholder="Username"/>
                        </div>
                    </div>
                    
                    <div className="form-outline mb-4">
                    <div className="input-group">
                        <div className="input-group-prepend">
                              <div className="input-group-text" style={{color: "blue"}}>@</div>
                        </div>
                        <input className="form-control" id="password" type="Password" placeholder="Password"/>
                        </div>
                    </div>
                    
                    <div className="text-center mb-4">
                        <button type="submit" className="btn btn-block btn-primary gradient-custom">LOG IN</button>
                    </div>
                    <div className="text-center mb-4">
                        <a className="text-muted mb-4" href="">Forgot Password?</a>
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