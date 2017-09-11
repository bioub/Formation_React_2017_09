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
    this.handleChangeFormat = this.handleChangeFormat.bind(this);
  }

  handleChangeDelay(delay) {
    this.setState({
      delay,
    });
  }

  handleChangeFormat(format) {
    this.setState({
      format,
    });
  }

  render() {
    return (
      <div>
        <HelloDesactivable name="Romain"/>
        <HorlogeDesactivable format={this.state.format} delay={this.state.delay}/>
        <FormConfigHorlogeDesactivable onChangeDelay={this.handleChangeDelay}
                                       onChangeFormat={this.handleChangeFormat}/>
      </div>
    );
  }
}

export default App;
