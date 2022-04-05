import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./styles.css";

export function Accordion () {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  return (
    <div className="app">
      <div className="accordian">
        <div className="accordian-header" onClick={handleOpen}>
          <div>¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <div className="accordian-body">
                <button className="accButton">Tortilla de patata</button>
                <button className="accButton">Ensalada con cosas</button>
                <button className="accButton">Paella de verduras</button>
              </div>
            )}
          </div>
    </div>
  );
}