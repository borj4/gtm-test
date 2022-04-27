import React from "react";
import Navbar from "../Cart/Cart"
import "./styles.css";

export function Header () {
    return (
        <div className="header">
            <h1>Mi web supermegachachi</h1>
            <Navbar/>
            <div className="cart"></div>
        </div>
    );
}