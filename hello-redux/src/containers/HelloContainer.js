import { desactivable } from '../hocs/desactivable';
import { Hello } from '../components/Hello';
import { helloSelector } from '../selectors/index';
import { connect } from 'react-redux';
import { helloModifyPrenom } from '../actions/hello';

const mapStateToProps = (state) => ({
  prenom: helloSelector(state).prenom,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => dispatch(helloModifyPrenom(event.target.value))
});

export const HelloContainer = connect(mapStateToProps, mapDispatchToProps)(desactivable(Hello));