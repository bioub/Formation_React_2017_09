import React, { Component } from 'react';
import { HelloContainer } from '../containers/HelloContainer';
import { HorlogeContainer } from '../containers/HorlogeContainer';
import { FormConfigHorlogeContainer } from '../containers/FormConfigHorlogeContainer';

class App extends Component {
  render() {
    return (
      <div>
        <HelloContainer/>
        <HorlogeContainer/>
        <FormConfigHorlogeContainer/>
      </div>
    );
  }
}

export default App;
