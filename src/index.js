import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import {  BrowserRouter,  Route, Routes } from 'react-router-dom';


import Dashboard from './Layout/Dashboard';

import Home from './Dashboard/home/Home';
import Exams from './Dashboard/exams/Exams';
import App from './App';
import Loginform from './Login/Loginform';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
	<BrowserRouter>
     {/* <App /> */}
      {/* <Route path='/Login' element={<App />}>
					<Route path='Login' element={<Loginform />} />
				</Route> */}
	<Routes>
   
      <Route path='/' element={<App />}>
	
        <Route path='/Dashboard' element={<Dashboard />} > 
      
          <Route path="/Dashboard/home" element={<Home />}/> 
          <Route path="/Dashboard/exams" element={<Exams />}/>
      
        </Route>
        </Route>
	</Routes>
	</BrowserRouter>
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default root;
