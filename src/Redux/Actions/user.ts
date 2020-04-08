// Modules
import axios from 'axios';
import { Dispatch } from 'redux';
import decode from 'jwt-decode';

// Interfaces
import { RequestStatus, AxiosResponse } from 'Interfaces/Requests';
import { SignInParams } from 'Interfaces/Server/routes';

// Store
// import store from 'Redux/Store';

// Constants
import {
  SIGNIN_STARTED,
  SIGNIN_ERROR,
  SIGNIN_SUCCESS,
  SIGNOUT,
} from 'Constants/action-types';

function signIn({ password, username }: SignInParams) {
  return (dispatch: Dispatch) => {
    dispatch({
      type: SIGNIN_STARTED,
      payload: {}
    });

    axios.post(`${process.env.REACT_APP_SERVER}/Signin`, {
      password,
      username,
    })
      .then(({ data }: AxiosResponse) => {
        const { status, error, payload, token } = data;

        if (status === RequestStatus.FAILURE) {
          dispatch({
            type: SIGNIN_ERROR,
            payload: null,
            error,
          });
        } else if (token !== undefined) {
          setToken(token);
          signinSuccess(dispatch, payload);
        }
      });
  };
}

function checkTokenLoadUser() {
  return (dispatch: Dispatch) => {
    const token = getToken();
    if(token !== undefined){
      // axios.post(`${process.env.REACT_APP_SERVER}/LoadUser`, {
      //   token:localStorage.getItem('id_token'),
      // })
      // .then((response) => {
      //   if (response.data.status == 'Not Authorized') {
      //     return;
      //   }
      //   else {
      //     loginSuccess(dispatch,response.data.token,response.data);
      //   }
      // })
    }
  };
}

function signout() {
  return (dispatch: Dispatch) => {
    removeToken();
    dispatch({
      type: SIGNOUT,
      payload: null,
    });
  };
}

function signinSuccess(dispatch:Dispatch, payload: unknown){
  dispatch({
    type: SIGNIN_SUCCESS,
    payload: { }
  });
}

function setToken(token: string){
  localStorage.setItem('id_token', token);
}

function removeToken(){
  localStorage.removeItem('id_token');
}

function getToken(): string|null {
  let token = localStorage.getItem('id_token');

  if (token === null) return null;

  try {
    token = decode(token);
    // valid token format
  } catch(error) {
    // invalid token format
  }
  return token;
}

export {
  signIn,
  signout,
  checkTokenLoadUser,
};