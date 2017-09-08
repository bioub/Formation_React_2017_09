import React from 'react';
import PropTypes from 'prop-types';

export const Hello = (props) => {
    return <p>Hello {props.name}</p>
};

Hello.propTypes = {
    name: PropTypes.string
};

Hello.defaultProps = {
    name: 'John'
};