import React from "react";
import "../styles/Header.css";
import Navbar from "./Navbar";
const Header:React.FC= ()=>{

  return(
    <div className="header">
      <h1 className="title">
        Movie Tracker
      </h1>
      <div>
        <Navbar/>
      </div>
      
      
    </div>
    
  );

};
export default Header;