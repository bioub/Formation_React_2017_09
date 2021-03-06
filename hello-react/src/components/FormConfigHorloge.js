import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FormConfigHorloge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 1000,
      format: 'HH:mm:ss',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (name === 'delay') {
      value = Number.parseInt(value, 0);
    }

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onChangeDelay(this.state.delay);
    this.props.onChangeFormat(this.state.format);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Format : <input name="format" value={this.state.format} onChange={this.handleChange}/>
        </label>
        <label>
          Délai : <input name="delay" value={this.state.delay} onChange={this.handleChange}/>
        </label>
        <button>Valider</button>
      </form>
    );
  }
}

FormConfigHorloge.propTypes = {
  onChangeDelay: PropTypes.func.isRequired,
  onChangeFormat: PropTypes.func.isRequired,
};