import React from "react";
// font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
// css
import '../App.css'; 
// image
import logo from "./images/logo.jpg";


function Navbar(){
    return (
        <nav className="nav">
            
            <div className="logo">
                <img id="logo" alt="logo" src={logo}/>
            </div>
            <div className="name">
                <h2 id="name">Kiddy's</h2>
            </div>
            <div className="exit"> 
                <a id="exit" href="" ><FontAwesomeIcon icon={faArrowRightFromBracket} /></a>
            </div>
            
        </nav>
    );
}

export default Navbar;