import React, { useState } from 'react';
import TagManager from 'react-gtm-module/dist/TagManager';
import './App.css';
import { Accordion } from './components/Accordion/Acordion';
import { Header } from './components/Header/Header';
import { Youtube } from './components/Video/Video';

const App =()=>  {
  const [cart, setCard] = useState([]);
  // const [viewCart, setViewCart] = useState(true);

  const tagManagerArgs = {
    gtmId: 'GTM-W4LSZWJ'
  }
  
  TagManager.initialize(tagManagerArgs)

  const handleCart = (product) => {
    setCard([...cart, product])
  }


  return (
    <div className="App">
      <Header/>
      <Youtube/>
      <Accordion value={handleCart}/>
    </div>
  );
  }

export default App;
