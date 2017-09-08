import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns'

export class Horloge extends Component {
    constructor(props) {
        super();
        this.state = {
            now: format(new Date(), props.format),
        };

        // this.props

        setInterval(() => {
            this.setState({
                now: format(new Date(), props.format),
            });
        }, 100);
    }

    render() {
        return <div>{this.state.now}</div>
    }
}

Horloge.propTypes = {
    format: PropTypes.string
};

Horloge.defaultProps = {
    format: 'HH:mm:ss'
};