import React, { Component } from 'react';
import ClickButton from './components/ClickButton';
import HoverButton from './components/HoverButton';
import DoubleClickButton from './components/DoubleClickButton';
import './App.css';

class App extends Component {
  handleClick() {
    console.log('hey');
  }
  handleHover() {
    console.log(':(');
  }
  handleDoubleClick() {
    console.log('that is more than once');
  }
  render() {
    return (
      <div className="App">
        <ClickButton onClick={this.handleClick} text="don't click me" />
        <HoverButton onMouseOver={this.handleHover} text="stop hovering over me" />
        <DoubleClickButton onDoubleClick={this.handleDoubleClick} text="only click me once" />
      </div>
    );
  }
}

export default App;
