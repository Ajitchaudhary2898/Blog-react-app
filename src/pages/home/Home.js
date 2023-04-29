import React from "react";
import Header from "../../header/Header";
import Posts from "../../posts/Posts";
import Sidebar from "../../sidebar/Sidebar";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <>
     <Header/>
    <div className="home">
      <Link to ="/login">LOGIN</Link>
      <Posts/>
      <Sidebar/>

    </div>
    </>
    
  );
}
