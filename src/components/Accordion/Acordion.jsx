import React, { useState } from "react";
import "./styles.css";

export function Accordion (props) {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  
  const {products, itemsToBuy} = props.value;

  const handleOpen = () => {
    setShow(!show);
  };
  

  return (
    <div id="contenedor-accordian" className="accContainer">
      <div id="accordian" className="accordian">
        <div id="accordian-header" className="accordian-header" onClick={handleOpen}>
          <div id="">¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <ul className="accordian-body">
                {products.map((e,i)=>{return  <li 
                                                onClick={()=>{itemsToBuy(e,i,products)}}
                                                className="accButton"
                                                key={i}
                                                id={`product-${i}`}>
                                                <div>{e.name}</div>
                                              </li>
                })}
              </ul>
            )}
          </div>
    </div>
  );
}