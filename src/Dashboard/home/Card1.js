
import React from "react";
//css
// import "../App.css";

  function Card1(){
    return (
        <div>
        
                <table className="card1" style={{width:"100%"}}>
                <tr style={{backgroundColor:"beige"}}>
                        <td style={{fontWeight:"bold"}}>Ward Id:</td>
                        <td style={{fontStyle:"italic"}}>35</td>
                </tr>
                <tr>
                        <td style={{fontWeight:"bold"}}>Ward Name:</td>
                        <td>Mounika</td>
                </tr>
                <tr style={{backgroundColor:"beige"}}>
                        <td style={{fontWeight:"bold"}}>Class:</td>
                        <td>X</td>
                </tr>
                <tr>
                        <td style={{fontWeight:"bold"}}>Section:</td>
                        <td>Alpha</td>            
                </tr>
                <tr style={{backgroundColor:"beige"}}>                   
                        <td style={{fontWeight:"bold"}}>Contact Num:</td>
                        <td>+91 9292929229</td>                   
                </tr>
                <tr>                    
                        <td style={{fontWeight:"bold"}}>Address:</td>
                        <td>Hyderabad, Telangana</td>                    
                </tr>
                </table>   
        </div> 
    );
  }

  export default Card1;