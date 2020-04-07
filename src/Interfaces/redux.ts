// Interfaces
import { RoomState } from 'Redux/Reducers/room';
import { UserState } from 'Redux/Reducers/user';
import { RequestsState } from 'Redux/Reducers/requests';

export interface Action {
  type: string;
  payload: unknown;
}

// Store
export interface AppState {
  room: RoomState;
  user: UserState;
  requests: RequestsState;
}