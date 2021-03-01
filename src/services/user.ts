import { userDataInitial, UserInterface } from '../ducks/auth';

export function validate({ name, password }: UserInterface): boolean {
  if (name === userDataInitial.name && password === userDataInitial.password) {
    return true;
  } else {
    return false;
  }
}
