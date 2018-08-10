import React, { Component } from 'react';
import logo from './logo.svg';
import Dog, { seven } from './components/Dog';
import './App.css';

class App extends Component {
  constructor() {
    // 1 - Super (Required)
    super();

    // 2 - State
    this.state = {
      input: '',
      list: []
    };

    // 3 - Binding Statements (old)
    this.handleChange = this.handleChange.bind(this);
  }

  // NEW WAY (Do this)
  // handleChange = e => {
  //   this.setState({ furColor: e.target.value });
  // };

  // OLD WAY
  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  handleClick = () => {
    let list = this.state.list.slice();
    list.push(this.state.input);
    this.setState({ list });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <input
          onChange={event => this.handleChange(event)}
          placeholder="Type stuff here..."
        />
        <br />
        New todo item: {this.state.input}
        <br />
        <button onClick={() => this.handleClick()}> Submit </button>
      </div>
    );
  }
}

export default App;
