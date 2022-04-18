import React, { useState } from "react";
import TagManager from 'react-gtm-module/dist/TagManager';
import { Accordion } from './components/Accordion/Acordion';
import { Header } from './components/Header/Header';
import { Youtube } from './components/Video/Video';
import './App.css';
import { products } from "./utils/data";

const App =()=>  {

  const [preCart, setPreCart] = useState([]);
  const [cart, setCart] = useState();


  const itemsToBuy = (mode, element, index, products) => {
    // mode = true increase amount 1 step; mode = false decrease amount 1 step; 
    if (preCart.some(e=>e.name===element.name)) { 
      
      preCart.map((f,i,array)=>{
        if (f.name===element.name) {
          mode ?
          array[i].amount++ :
          array[i].amount--;
          
          if (array[i].amount < 1) {array[i].amount = 0};

          setPreCart([...array]);
        }
        return [];
      })
    }
    else {
      const newProduct = products[index];
      newProduct.amount = 1;
      setPreCart([...preCart, newProduct]);
    }
  };

  const mrPropper = {
    preCart,
    itemsToBuy,
    cart,
    setCart 
  }

  return (
    <div className="App">
      <Header />
      <Youtube />
      <Accordion value={mrPropper} />
      <div></div>
    </div>
  );
}

export default App;
