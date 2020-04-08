// Interfaces
import { RoomState } from 'Redux/Reducers/room';
import { UserState } from 'Redux/Reducers/user';
import { RequestsState } from 'Redux/Reducers/requests';
import { ServerError } from 'Interfaces/Requests';

export interface Action {
  type: string;
  payload: {[key: string]: unknown};
  error?: ServerError|null;
}

// Store
export interface AppState {
  room: RoomState;
  user: UserState;
  requests: RequestsState;
}