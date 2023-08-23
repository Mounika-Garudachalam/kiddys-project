import React from "react";
//css
import './App.css';
//navbar
import Navbar from "./navbar/Navbar.jsx";
//sidebar
import Sidebar from "./sidebar/Sidebar.jsx";
//content
import Content from "./content/Content.jsx";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;

