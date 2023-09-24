import React from "react";


import Loginform from "./Login/Loginform.jsx";
import Dashboard from "./Layout/Dashboard.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './Dashboard/home/Home';
import Exams from './Dashboard/exams/Exams';
import Information from "./Dashboard/information/Information.jsx";

export default function Login() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Loginform />} />
                    <Route exact path="/Dashboard" element={<Dashboard />} />
                    <Route path="/home" element={<Home />}/> 
                    <Route path="/exams" element={<Exams />}/>
                    <Route path="/information" element={<Information />}/>
                </Routes>
            </BrowserRouter>
        </>
    );
}
















