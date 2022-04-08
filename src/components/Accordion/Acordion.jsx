import React, { useState } from "react";
import { products } from "../../utils/data";
import "./styles.css";

export function Accordion (props) {
  // State to show/hide accordion
  const [show, setShow] = useState(false);
  
  const handleOpen = () => {
    setShow(!show);
  };
  
  const [cart, setCart] = useState([]);
  const itemsToBuy = (element, index) => {
    // si el elemento clicado existe en el carrito...
    // let oneMore = cart;
    console.log(`evaluar ${cart.some(e=>e.name===element.name)}`);

    if (cart.some(e=>e.name===element.name)) {
    
      cart.map((f,i,array)=>{
        if (f.name===element.name) {
          array[i].amount++;
          setCart([...array]);
        }
        return [];
      })
    }
    else {
      const newProduct = products[index];
      newProduct.amount = 1;
      setCart([...cart, newProduct]);
    }
  };


  return (
    <div id="contenedor-accordian" className="accContainer">
      <div id="accordian" className="accordian">
        <div id="accordian-header" className="accordian-header" onClick={handleOpen}>
          <div id="">¿Qué quieres comer hoy?</div>
          <div className="sign">{show ? '-' : '+'}</div>
          </div>
            {show && (
              <div className="accordian-body">
                {products.map((e,i)=>{return  <button 
                                                      onClick={()=>{itemsToBuy(e,i)}}
                                                      className="accButton"
                                                      key={i}
                                                      id={`product-${i}`}>
                                                      {e.name}
                                                    </button>
                })}
              </div>
            )}
          </div>
    </div>
  );
}