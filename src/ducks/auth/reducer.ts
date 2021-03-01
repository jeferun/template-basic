import { AuthInterface, UserTypes, UserActions } from './types';

const initialState: AuthInterface = {
  userData: {},
  isAuthenticated: false
};

function AuthReducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case UserTypes.LOGIN_SUCCESS: {
      const { userData, isAuthenticated } = action.payload;
      return {
        ...state,
        userData,
        isAuthenticated
      };
    }

    default:
      return state;
  }
}

export default AuthReducer;
