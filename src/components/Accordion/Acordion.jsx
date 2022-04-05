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
      <div id="accordian" className="accordian">
        <div id="accordian-header" className="accordian-header" onClick={handleOpen}>
          <div>¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <div className="accordian-body">
                <button id="tortilla" className="accButton">Tortilla de patata</button>
                <button id="ensalada" className="accButton">Ensalada con cosas</button>
                <button id="paella" className="accButton">Paella de verduras</button>
              </div>
            )}
          </div>
    </div>
  );
}