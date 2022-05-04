import React from "react";
import {Route, Routes} from 'react-router-dom'
// import TagManager from 'react-gtm-module/dist/TagManager';
import Accordion from './OldComponents/Accordion';
import Header from './OldComponents/Header';
import Youtube from './OldComponents/Video';
import Cart from './OldComponents/Cart';
import './App.css';

const App = () =>  {

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route exact path="/" element={<Accordion/>} />
          <Route path="/video" element={<Youtube/>}/>
          <Route path="/cart" element={<Cart/>}/>
      </Routes>

    </div>
  );
};

export default App;
