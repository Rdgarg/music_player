import React, { Component } from 'react';
import ContentBar from './contentbar/contentbar';
import Menubar from './Menubar/menubar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menubar id="menuinapp" />
        <ContentBar id="contentinapp" />
      </div>
    );
  }
}

export default App;
