import React, { Component } from 'react';
import ClickButton from './components/ClickButton';
import HoverButton from './components/HoverButton';
import DoubleClickButton from './components/DoubleClickButton';
import GenericForm from './components/GenericForm';
import './App.css';
let counter = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      value: '', 
      reply: '',
      facts: '',
      sad: '' 
    };

    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleHover = this.handleHover.bind(this);
  }
  handleDoubleClick() {
   this.setState({ facts: 'that is more than once' });
  }
  handleSubmit(e) {
    e.preventDefault();
    alert('what am i supposed to do with this?');
    this.setState({ value: '' });
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleClick() {
    if (!this.state.reply) {
      this.setState({ reply: this.state.reply.concat('hey!') });
    } else {
      this.setState({ reply: this.state.reply.concat(' hey!') });
    }
  }

  handleHover() {
    if (!this.state.sad && !counter) {
      this.setState({ sad: ':('});
      counter++;
    } else if (this.state.sad && counter < 3) {
      let face = ':' + "'".repeat(counter) + '(';
      this.setState({ sad: face });
      counter++;
    } else if (this.state.sad && counter < 5) {
      let face = ','.repeat(counter/2) + ';_;' + ','.repeat(counter/2);
      this.setState({ sad: face });
      counter++;
    } else {
      this.setState({ sad: 'youre mean' });
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1>Testing 0, 1, 1...</h1>
        <ClickButton 
          onClick={this.handleClick} 
          text="don't click me" 
          reply={this.state.reply}
        />
        <HoverButton 
          onMouseOver={this.handleHover} 
          text="stop hovering over me"
          sad={this.state.sad} 
        />
        <DoubleClickButton 
          onDoubleClick={this.handleDoubleClick} 
          text="only click me once" 
          facts={this.state.facts}
        />
        <GenericForm 
          onSubmit={this.handleSubmit}
          value={this.state.value}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default App;
