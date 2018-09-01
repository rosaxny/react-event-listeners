import React, { Component } from 'react';
import ClickButton from './components/ClickButton';
import HoverButton from './components/HoverButton';
import DoubleClickButton from './components/DoubleClickButton';
import GenericForm from './components/GenericForm';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '', reply: '' };
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    alert('what am i supposed to do with this?');
    this.setState({ value: '' });
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleClick(e) {
    if (!this.state.reply) {
      this.setState({ reply: this.state.reply.concat('hey!') });
    } else {
      this.setState({ reply: this.state.reply.concat(' hey!') });
    }
    
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
        <ClickButton onClick={this.handleClick} text="don't click me" reply={this.state.reply}/>
        <HoverButton onMouseOver={this.handleHover} text="stop hovering over me" />
        <DoubleClickButton onDoubleClick={this.handleDoubleClick} text="only click me once" />
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
