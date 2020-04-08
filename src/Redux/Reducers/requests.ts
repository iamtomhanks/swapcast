// Interfaces
import { Action } from 'Interfaces/redux';
import { RequestStatus, ServerError } from 'Interfaces/Requests';

// Constants
import {
  SIGNIN_STARTED,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
} from 'Constants/action-types';

export interface RequestsState {
  signIn: {
    status: RequestStatus;
    error: ServerError|null;
  };
}

const initialState: RequestsState = {
  signIn: {
    status: RequestStatus.NOT_STARTED,
    error: null,
  },
};

const requestsReducer = (
  state = initialState,
  action: Action
) => {
  switch(action.type) {
    case SIGNIN_STARTED:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          status: RequestStatus.STARTED
        }
      };
    case SIGNIN_ERROR:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          status: RequestStatus.FAILURE,
          error: action.error,
        }
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signIn: {
          ...state.signIn,
          status: RequestStatus.SUCCESS
        }
      };
    default: return state;
  }
};

export {
  requestsReducer,
};