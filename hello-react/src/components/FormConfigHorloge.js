import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class FormConfigHorloge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 1000,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      delay: Number.parseInt(event.target.value, 0),
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onChangeDelay(this.state.delay);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Délai : <input value={this.state.delay} onChange={this.handleChange}/>
        </label>
        <button>Valider</button>
      </form>
    );
  }
}

FormConfigHorloge.propTypes = {
  onChangeDelay: PropTypes.func.isRequired,
};