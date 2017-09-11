

import { HORLOGE_MODIFY_DELAY, HORLOGE_MODIFY_FORMAT } from '../constants/horloge';

export const horloge = (state = {}, action) => {

  switch (action.type) {
    case HORLOGE_MODIFY_FORMAT:
      return {
        ...state,
        format: action.format,
      };
    case HORLOGE_MODIFY_DELAY:
      return {
        ...state,
        delay: action.delay,
      };
    default:
      return state;
  }
};