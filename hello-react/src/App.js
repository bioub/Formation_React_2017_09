import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Hello } from './Hello';
import { Horloge } from './Horloge';

class App extends Component {
  render() {
    return (
        <div>
          <Hello />
          <Horloge format="HH:mm:ss:S"/>
        </div>
    );
  }
}

export default App;
