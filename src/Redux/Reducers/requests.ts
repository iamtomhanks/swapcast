// Interfaces
import { Action } from 'Interfaces/redux';
import { RequestStatus } from 'Interfaces/Requests';

export interface RequestsState {
  signIn: {
    status: RequestStatus;
  };
}

const initialState: RequestsState = {
  signIn: {
    status: RequestStatus.NOT_STARTED,
  },
};

const requestsReducer = (
  state = initialState,
  action: Action
) => {
  switch(action.type) {
    default: return state;
  }
};

export {
  requestsReducer,
};