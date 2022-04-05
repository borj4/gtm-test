import React, { Component } from 'react';
import './App.css';
import { Accordion } from './components/Accordion/Acordion';
import { Header } from './components/Header/Header';
import { Youtube } from './components/Video/Video';
class App extends Component {

  render() {
    return (
      <div className="App">
        <Header/>

        <Youtube/> :

        <Accordion/>
      </div>
    );
  }
}

export default App;
