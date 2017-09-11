import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';

export class Horloge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      now: format(new Date(), props.format),
    };
  }

  componentWillMount() {
    this.start();
  }

  componentWillUpdate() {
    clearInterval(this._interval);
    this.start();
  }

  componentWillUnmount() {
    clearInterval(this._interval);
  }

  start() {
    this._interval = setInterval(() => {
      this.setState({
        now: format(new Date(), this.props.format),
      });
    }, this.props.delay);
  }

  render() {
    return <div>{this.state.now}</div>;
  }
}

Horloge.propTypes = {
  format: PropTypes.string,
  delay: PropTypes.number,
};

Horloge.defaultProps = {
  format: 'HH:mm:ss',
  delay: 1000,
};