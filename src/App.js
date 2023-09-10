import React from "react";


import Loginform from "./Login/Loginform.jsx";
import { Outlet, Routes, Route } from "react-router-dom";
import Dashboard from "./Layout/Dashboard.js";

export default function Login() {
    return (
        <React.Fragment>
          
            <Loginform />
             
            <Outlet />
        </React.Fragment>
    );
}
















