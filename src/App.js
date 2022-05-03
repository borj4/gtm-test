import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import TagManager from 'react-gtm-module/dist/TagManager';
import Accordion from './OldComponents/Accordion';
import Header from './OldComponents/Header';
import Youtube from './OldComponents/Video';
import  Cart  from './OldComponents/Cart';
import './App.css';

const App = () =>  {



  return (
    <div className="App">
      <Header />
      <h1>¿Qué está pasando?</h1>
      <Cart/>
      {/* <BrowserRouter>
        <Switch >
          <Route exact path="/" component={Accordion}/>
          <Route path="/video" component={Youtube}/>
          <Route path="/cart" component={Cart}/>
        </Switch >
      </BrowserRouter> */}
    </div>
  );
};

export default App;
