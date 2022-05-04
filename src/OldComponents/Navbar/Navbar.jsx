import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const Navbar = () => {
 
    return (
    <div className="nav">
      <nav>
        <Link className="link" to='/'>Home chachi</Link>
        
        <Link className="link" to='/video'>Vídeo chachi</Link>
        
        <Link className="link" to='/cart'>Carrito chachi</Link>
        
      </nav>
    </div>
  )
}

export default Navbar;