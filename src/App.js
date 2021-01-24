import React, { Component } from 'react';
import './App.css';
import Calculator from './Components/Calculator';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>CALCULATOR..!!</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
