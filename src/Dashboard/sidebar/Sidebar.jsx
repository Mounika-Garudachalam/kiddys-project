import React from "react";
//css
import '../App.css';
//sidebardata for data fetching
import { SidebarData } from "./SidebarData";
  


function Sidebar(){
    return (
        <div className="Sidebar">
            <div className="SidebarList">
            {SidebarData.map((val,key) => {
                return (
                    <li className="side">
                        <div id="icon">{val.icon}</div>
                        <div style={{textAlign:"left"}} id="title">{val.title}</div>
                    </li>
                );
            })}
            </div>
            
        </div>
    );
}

export default Sidebar;