
/*
{
type: 'HORLOGE_MODIFY_DELAY,
delay: 2000
}
*/
import { HORLOGE_MODIFY_DELAY, HORLOGE_MODIFY_FORMAT } from '../constants/horloge';

export const horlogeModifyDelay = (delay) => ({
  type: HORLOGE_MODIFY_DELAY,
  delay
});

/*
{
type: 'HORLOGE_MODIFY_FORMAT,
format: 'HH:mm'
}
*/
export const horlogeModifyFormat = (format) => ({
  type: HORLOGE_MODIFY_FORMAT,
  format
});