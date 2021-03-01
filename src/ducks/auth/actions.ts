import { validate } from '../../services/user';
import { UserInterface, UserTypes, userDataInitial } from './types';

export const login = (user: UserInterface) => {
  if (validate(user)) {
    // history.push(rutaHome);
    return ({
      type: UserTypes.LOGIN_SUCCESS,
      payload: {
        userData: userDataInitial,
        isAuthenticated: true
      }
    });
  } else {
    return ({
      type: UserTypes.LOGIN_FAILURE,
      payload: {
        userData: {},
        isAuthenticated: false
      }
    });
  }
};
