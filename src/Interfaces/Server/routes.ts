// Interfaces
import { FormSubmitVals } from 'Interfaces/Form';
import { ServerData } from 'Interfaces/Requests';
import { User } from './tables';

export interface SignInParams extends FormSubmitVals {
  username: string;
  password: string;
}

export interface SignInResponse extends ServerData {
  payload?: User;
}