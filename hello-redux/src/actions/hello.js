import { HELLO_MODIFY_PRENOM } from '../constants/hello';

export const helloModifyPrenom = (prenom) => ({
  type: HELLO_MODIFY_PRENOM,
  prenom,
});
