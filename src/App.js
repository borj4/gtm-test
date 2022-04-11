import React, { useState } from "react";
import TagManager from 'react-gtm-module/dist/TagManager';
import { Accordion } from './components/Accordion/Acordion';
import { Header } from './components/Header/Header';
import { Youtube } from './components/Video/Video';
import './App.css';

const tagManagerArgs = {
  gtmId: 'GTM-5VBPW49'
}
TagManager.initialize(tagManagerArgs);

const App =()=>  {

  const [cart, setCart] = useState([]);

  const itemsToBuy = (mode, element, index, products) => {
    // mode = true increase amount 1 step; mode = false decrease amount 1 step; 
    if (cart.some(e=>e.name===element.name)) { 
      cart.map((f,i,array)=>{
        if (f.name===element.name) {
          mode ?
          array[i].amount++ :
          array[i].amount-- ;
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
    <div className="App">
      <Header/>
      <Youtube/>
      <Accordion value={itemsToBuy}/>
    </div>
  );
  }

export default App;
