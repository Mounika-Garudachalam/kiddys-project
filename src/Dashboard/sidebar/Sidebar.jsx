import React from "react";
//css
// import '../App.css';
import { Link } from "react-router-dom";
import {MenuItem, Menu} from "react-pro-sidebar";
//font awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {faHouse} from "@fortawesome/free-solid-svg-icons";
import { faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faHouseLaptop } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { faClipboard } from "@fortawesome/free-regular-svg-icons";



function Sidebar(){
    return (
        <div className="Sidebar">
            <div className="SidebarList">
            {/* {SidebarData.map((val,key) => { */}
            
               <Menu>

                    <MenuItem className="side"  component={<Link to="/home"/>}>
                        <FontAwesomeIcon icon={faHouse} />
                        Home
                       {/* <Link to="/" /> */}
                    </MenuItem>

                    
                    {/* <li className="side">
                        <a href={"/feed"}>
                        <i id="icon">{faNewspaper}</i>
                        <span style={{textAlign:"left"}} id="title">Feed & Activity</span>
                        </a>
                    </li> */}
                    
                    <MenuItem className="side"  component={<Link to="/feed"/>}>
                    <FontAwesomeIcon icon={faNewspaper } />
                        Feed & Activity
                       {/* <Link to="/feed" /> */}
                    </MenuItem>
                    
                    <MenuItem className="side"  component={<Link to="/homeworks"/>}>
                    <FontAwesomeIcon icon={faHouseLaptop } />
                        Home Works
                       {/* <Link to="/homeworks" /> */}
                    </MenuItem>

                    <MenuItem className="side"  component={<Link to="/information"/>}>
                    <FontAwesomeIcon icon={faUser } />
                        Student Information
                       {/* <Link to="/studentinfo" /> */}
                    </MenuItem>
                    
                    
                    
                    <MenuItem className="side"  component={<Link to="/attendance"/>}>
                    <FontAwesomeIcon icon={faCalendarDays } />
                       Attendance
                       {/* <Link to="/attendance" /> */}
                    </MenuItem>

                    <MenuItem className="side"  component={<Link to="/exams"/>}>
                    <FontAwesomeIcon icon={faClipboard } />
                       Exams & Results
                       {/* <Link to="/exams" /> */}
                    </MenuItem>
                    
                    
                    <MenuItem className="side"  component={<Link to="/fee"/>}>
                    <FontAwesomeIcon icon={faIndianRupeeSign } />
                        Fee Structure
                       {/* <Link to="/fee" /> */}
                    </MenuItem>
                    
                    
                    <MenuItem className="side" component={<Link to="/about"/>}>
                    <FontAwesomeIcon icon={faCircleInfo } />
                        About Us
                       {/* <Link to="/about" /> */}
                    </MenuItem>
                    
                
                </Menu>
            
           
            </div>
            
        </div>
    );
}

export default Sidebar;