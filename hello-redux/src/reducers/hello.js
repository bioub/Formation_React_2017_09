

import { HELLO_MODIFY_PRENOM } from '../constants/hello';

export const hello = (state = {}, action) => {

  switch (action.type) {
    case HELLO_MODIFY_PRENOM:
      return {
        ...state,
        prenom: action.prenom,
      };
    default:
      return state;
  }
};