import React from 'react';
import TagManager from 'react-gtm-module/dist/TagManager';
import './App.css';
import { Accordion } from './components/Accordion/Acordion';
import { Header } from './components/Header/Header';
import { Youtube } from './components/Video/Video';

const tagManagerArgs = {
  gtmId: 'GTM-5VBPW49'
}

TagManager.initialize(tagManagerArgs);

const App =()=>  {

  return (
    <div className="App">
      <Header/>
      <Youtube/>
      <Accordion/>
    </div>
  );
  }

export default App;
