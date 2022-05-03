import React from "react";
import { Link } from "react-router-dom";
import "./styles.css"

const Navbar = () => {
 
    return (
    <div className="Nav">
      <p>esto es el nav</p>
      <nav>
        <Link to='/' >Home chachi</Link>
        <br/>
        {/* <Link to='/video'>Vídeo chachi</Link> */}
        <br/>
        {/* <Link to='/cart'>Carrito chachi</Link> */}
        <br/>
      </nav>
    </div>
  )
}

export default Navbar;