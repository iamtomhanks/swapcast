// Interfaces
import { Action } from 'Interfaces/redux';
import { User } from 'Interfaces/Server/tables';

// Constants
import { SIGNIN_SUCCESS } from 'Constants/action-types';

export interface UserState {
  user: User|null;
}

const initialState = {
  user: null,
};

const userReducer = (
  state = initialState,
  action: Action
) => {
  switch(action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
      };
    default: return state;
  }
};

export {
  userReducer,
};