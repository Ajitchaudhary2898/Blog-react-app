

// import home from "./pages/home/Home";
// import TopBar from "./topbar/TopBar";

import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import TopBar from "./topbar/TopBar";
import Contact from "./pages/contact/Contact";
import {BrowserRouter, Routes, Route , } from "react-router-dom"
import About from "./pages/about/About";


// function App(){
//   return <h1>Hello</h1>;
// }


function App() {
  const user = false;
  return (
    
    <>
    
    
      <BrowserRouter>
      <TopBar/>
      <Routes>
        
       
        <Route excact path = "/" index element = {<Home/>}></Route>

        <Route path = "/register" element = {user ? <Home/> :<Register/>}></Route>

        {/* <Route path = "/login" element = {user ?<Home/>: <Login/>}></Route>  */}

        <Route path = "/write" element = {<Write/> }></Route> 

        <Route path = "/settings" element = {user ?<Settings/>: <Register/>}></Route>

        <Route path = "/post/:postId" element = {<Single/>}></Route> 

        <Route path = "/contact" element = {<Contact/>}></Route> 

        <Route path = "/about" element = {<About/>}></Route> 
        
        
       </Routes>
      </BrowserRouter>
      
    </>
   );
}

export default App;