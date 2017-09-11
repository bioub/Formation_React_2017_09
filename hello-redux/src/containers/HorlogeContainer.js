
import { connect } from 'react-redux';
import { desactivable } from '../hocs/desactivable';
import { Horloge } from '../components/Horloge';
import { horlogeSelector } from '../selectors/index';

const mapStateToProps = (state) => ({
  format: horlogeSelector(state).format,
  delay: horlogeSelector(state).delay,
});

export const HorlogeContainer = connect(mapStateToProps)(desactivable(Horloge));