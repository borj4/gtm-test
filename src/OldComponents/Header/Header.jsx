import React from "react";
import Navbar from "../Navbar"
import "./styles.css";

function Header () {
    return (
        <div className="header">
            <h1>Mi web supermegachachi</h1>
            <Navbar/>
            <div className="cart"></div>
        </div>
    );
}
export default Header