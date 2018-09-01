import React, { Component } from 'react';
import ClickButton from './components/ClickButton';
import HoverButton from './components/HoverButton';
import './App.css';

class App extends Component {
  handleClick() {
    console.log('hey');
  }
  handleHover() {
    console.log(':(');
  }
  render() {
    return (
      <div className="App">
        <ClickButton onClick={this.handleClick} text="don't click me" />
        <HoverButton onMouseOver={this.handleHover} text="stop hovering over me" />
      </div>
    );
  }
}

export default App;
