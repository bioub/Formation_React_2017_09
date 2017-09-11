import React from 'react';
import PropTypes from 'prop-types';

export const Hello = (props) => {
  return (<div>
    <form>Prénom : <input name="prenom" value={props.prenom} onChange={props.handleChange}/></form>
    <p>Hello {props.prenom}</p>
  </div>);
};

Hello.propTypes = {
  prenom: PropTypes.string
};
