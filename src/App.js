import React from "react";
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import TagManager from 'react-gtm-module/dist/TagManager';
import { Accordion } from './OldComponents/Accordion/Acordion';
import { Header } from './OldComponents/Header/Header';
import { Youtube } from './OldComponents/Video/Video';
import { Cart } from './OldComponents/Cart/Cart';
import './App.css';

const App = () =>  {



  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Switch >
          {/* <Route exact path="/" component={Accordion}/>
          <Route path="/video" component={Youtube}/>
          <Route path="/cart" component={Cart}/> */}
        </Switch >
      </BrowserRouter>
    </div>
  );
};

export default App;
