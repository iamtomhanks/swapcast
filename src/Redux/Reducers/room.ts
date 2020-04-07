// Interfaces
import { Action } from 'Interfaces/redux';
import { Participant } from 'Interfaces/Participant';

export interface RoomState {
  participants: Participant[];
}

const initialState: RoomState = {
  participants: [
    {
      id: '1',
      username: 'Danny Twotime',
    },
    {
      id: '2',
      username: 'Danny Twotime',
    },
  ],
};

const roomReducer = (
  state = initialState,
  action: Action
) => {
  switch(action.type) {
    default: return state;
  }
};

export {
  roomReducer,
};