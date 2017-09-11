import React, { Component } from 'react';
import { HelloDesactivable } from '../containers/HelloDesactivable';
import { HorlogeDesactivable } from '../containers/HorlogeDesactivable';
import { FormConfigHorlogeDesactivable } from '../containers/FormConfigHorlogeDesactivable';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 1000,
    };
    this.handleChangeDelay = this.handleChangeDelay.bind(this);
  }

  handleChangeDelay(delay) {
    this.setState({
      delay,
    });
  }

  render() {
    return (
      <div>
        <HelloDesactivable name="Romain"/>
        <HorlogeDesactivable format="HH:mm:ss:S" delay={this.state.delay}/>
        <FormConfigHorlogeDesactivable onChangeDelay={this.handleChangeDelay}/>
      </div>
    );
  }
}

export default App;
