export enum RequestStatus {
  NOT_STARTED = 'not_started',
  STARTED = 'started',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

export interface ServerData {
  status: RequestStatus;
  error?: ServerError;
  token?: string;
  payload?: unknown;
}

export interface ServerError {
  errorCode: string;
  errorMsg: string;
  errorObj: unknown;
}

export interface AxiosResponse {
  data: ServerData;
}
