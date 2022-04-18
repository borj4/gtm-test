import React, { useState } from "react";
import TagManager from 'react-gtm-module/dist/TagManager';
import { Accordion } from './components/Accordion/Acordion';
import { Header } from './components/Header/Header';
import { Youtube } from './components/Video/Video';
import './App.css';
import { products } from "./utils/data";


const tagManagerArgs = {
  gtmId: 'GTM-5VBPW49'
}
TagManager.initialize(tagManagerArgs);

const App =()=>  {
  const [cart, setCart] = useState([]);

  const itemsToBuy = (element, index, products) => {

    if (cart.some(e=>e.name===element.name)) { 
      cart.map((e,i,a)=>{
        if (e.name===element.name) {
          a[i].amount++;
          setCart([...a]);
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

  const showHowMany = (input) => {
      if (products.some(e=>e.name===input.name)){
        return <p>{input.amount}</p>
      }
  }


  const misterPropper = {
    // functions
    itemsToBuy,
    showHowMany,
    // state
    cart,
    // data
    products,
  }

  return (
    <div className="App">
      <Header/>
      <Youtube/>
      <Accordion value={misterPropper}/>
    </div>
  );
}

export default App;
