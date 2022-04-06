import React, { useState } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Acordion';
import { Header } from './components/Header/Header';
import { Youtube } from './components/Video/Video';

const App =()=>  {
  const [cart, setCard] = useState([]);
  const [viewCart, setViewCart] = useState(true);

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
