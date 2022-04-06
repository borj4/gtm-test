import React, { useState } from "react";
import { products } from "../../utils/data";
import "./styles.css";

export function Accordion (props) {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  const handleOpen = () => {
    setShow(!show); // Toggle accordion
  };

  return (
    <div className="accContainer">
      <div id="accordian" className="accordian">
        <div id="accordian-header" className="accordian-header" onClick={handleOpen}>
          <div>¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <div className="accordian-body">
                {products.map((e,i)=>{return<button 
                                                    // onClick={()=>props.value.handleCart(e)}
                                                    className="accButton"
                                                    key={i}
                                                    id={'product'+{i}}>
                                                    {e.name}
                                            </button>
                })}
              </div>
            )}
          </div>
    </div>
  );
}