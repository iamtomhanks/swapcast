// Interfaces
import { Action } from 'Interfaces/redux';

export interface UserState {
}

const initialState = {

};

const userReducer = (
  state = initialState,
  action: Action
) => {
  switch(action.type) {
    default: return state;
  }
};

export {
  userReducer,
};