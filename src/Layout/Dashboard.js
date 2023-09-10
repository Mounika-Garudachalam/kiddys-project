import React from "react";
import { Outlet } from "react-router-dom";
//navbar
import Navbar from "../Dashboard/navbar/Navbar.jsx";
//sidebar
import Sidebar from "../Dashboard/sidebar/Sidebar.jsx";
import Loginform from "../Login/Loginform.jsx";

export default function Dashboard() {
    return (
        
        <React.Fragment>
        <div className="Dashboard">
            <Navbar />
            <Outlet />
            <Sidebar />
        </div>
        </React.Fragment>
        
    );
}
















// import React from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Redirect,
// } from "react-router-dom";
// //css
// import './App.css';
// //navbar
// import Navbar from "./navbar/Navbar.jsx";
// //sidebar
// import Sidebar from "./sidebar/Sidebar.jsx";
// //content
// import Home from "./home/Home.jsx";

// import Exams from "./exams/Exams";

// function Dashboard() {
//   return (
//     <div className='App'>
//       <BrowserRouter>
//       <Navbar />
//       <Sidebar /> 
      
//        <Routes>
//         <Route exact path="/" Component={Home} />
//         <Route path="/exams" Component={Exams} />
//       </Routes>
//       {/* <Redirect to="/" />  */}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default Dashboard;

