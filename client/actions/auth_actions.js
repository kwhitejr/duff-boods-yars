import axios from 'axios';
import { browserHistory } from 'react-router';
import { push } from 'react-router-redux';
import cookie from 'react-cookie';

const AUTH_USER = 'AUTH_USER',  
      UNAUTH_USER = 'UNAUTH_USER',
      AUTH_ERROR = 'AUTH_ERROR',
      FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST',
      RESET_PASSWORD_REQUEST = 'RESET_PASSWORD_REQUEST',
      PROTECTED_TEST = 'PROTECTED_TEST';

const API_URL = 'http://localhost:3000/api';

export function errorHandler(dispatch, error, type) {
  let errorMessage = '';

  if (error.data.error) {
    errorMessage = error.data.error;
  } else if (error.data) {
    errorMessage = error.data;
  } else {
    errorMessage = error;
  }

  if (error.status === 401) {
    dispatch({
      type: type,
      payload: 'You are not authorized to do this. Please login and try again.',
    });
    logoutUser();
  } else {
    dispatch({
      type: type,
      payload: errorMessage
    });
  }
}

export function loginUser({ email, password }) {
  return (dispatch) => {
    axios.post(`${API_URL}/auth/login`, { email, password })
      .then(response => {
        cookie.save('token', response.data.token, { path: '/' });
        cookie.save('user', response.data.user, { path: '/' });
        dispatch({ type: AUTH_USER });
        dispatch(push('/'));
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}

export function registerUser({ email, firstName, lastName, password }) {
  return (dispatch) => {
    axios.post(`${API_URL}/auth/register`, { email, firstName, lastName, password })
      .then(response => {
        console.log('inside response', response);
        cookie.save('token', response.data.token, { path: '/' });
        cookie.save('user', response.data.user, { path: '/' });
        console.log('about to dispatch AUTH_USER');
        dispatch({ type: AUTH_USER });
        dispatch(push('/'));
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}

export function logoutUser() {
  return function (dispatch) {
    dispatch({ type: UNAUTH_USER });
    cookie.remove('token', { path: '/' });
    cookie.remove('user', { path: '/' });

    dispatch(push('/'));
  };
}

export function protectedTest() {
  return function(dispatch) {
    axios.get(`${API_URL}/protected`, {
      headers: { Authorization: cookie.load('token') },
    })
      .then(response => {
        dispatch({
          type: PROTECTED_TEST,
          payload: response.data.content
        });
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR)
      });
  }
}