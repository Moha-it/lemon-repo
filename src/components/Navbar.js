import Close from "../assets/close.png";
import Hamburger from "../assets/hamburger.png";
import {useState} from "react";
import Navigation from "./Navigation";
export default function Navbar(){
    const [navbarOpen, setNavbarOpen]= useState(false);
    function handleClick(){
        setNavbarOpen(!navbarOpen);
    }
return(
   <nav>
         <nav className="burger">
               <img
                   src={require("../assets/logo.png")}
                   alt="nav logo"
                   className="nav-logo">
               </img>
               <button className="burger-icon" onClick={handleClick}> 
                     <img src={navbarOpen? Close : Hamburger} alt="Navigation Bar" />
               </button>
         </nav>
         <Navigation device="desktop"  />
         {navbarOpen ? <Navigation device="mobile" /> : ""}
   </nav>
);
}