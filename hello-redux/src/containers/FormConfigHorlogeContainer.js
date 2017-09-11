import { connect } from 'react-redux';
import { desactivable } from '../hocs/desactivable';
import { FormConfigHorloge } from '../components/FormConfigHorloge';
import { horlogeSelector } from '../selectors/index';

const mapStateToProps = (state) => ({
  format: horlogeSelector(state).format,
  delay: horlogeSelector(state).delay,
});

export const FormConfigHorlogeContainer = connect(mapStateToProps)(desactivable(FormConfigHorloge));
