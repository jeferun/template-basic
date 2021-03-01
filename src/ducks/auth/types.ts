/* eslint-disable no-unused-vars */
export interface AuthInterface {
  userData: object;
  isAuthenticated: boolean;
}

export interface UserInterface {
  name: string;
  password: string;
}

export enum UserTypes {
  LOGIN_SUCCESS = 'USERS_LOGIN_SUCCESS',
  LOGIN_FAILURE = 'USERS_LOGIN_FAILURE',
}

// temporal
export interface authInterface {
  userData: object,
  isAuthenticated: boolean
}

export const userDataInitial = {
  id: 1,
  name: 'admi',
  password: '1234',
  email: 'admin@gmail.com',
  phoneNumber: 12345678
};

export const initialUser = {
  name: '',
  password: ''
};
//

interface LoginSuccess {
  type: UserTypes.LOGIN_SUCCESS;
  payload: authInterface;
}

interface LoginFailure {
  type: UserTypes.LOGIN_FAILURE;
  payload: authInterface;

}

export type UserActions = LoginSuccess | LoginFailure;
