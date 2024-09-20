//srs navbar.js
import React from "react";
import "./Navbar.css"; //import external css


function Navbar(){
    return(
        <nav className="navbar">
            <ul className="navbar-list">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
            </ul>
        </nav>
    );
}
export default Navbar;