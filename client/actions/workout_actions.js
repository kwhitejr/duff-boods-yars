import axios from 'axios';
import { push } from 'react-router-redux';
// import cookie from 'react-cookie';

export const CLEAR_WORKOUT_STORE = 'CLEAR_WORKOUT_STORE';
export const SET_EXERCISE_DATA = 'SET_EXERCISE_DATA';
export const DATA_ERROR = 'DATA_ERROR';
export const SET_PROGRAM_TYPE = 'SET_PROGRAM_TYPE';

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
      payload: errorMessage,
    });
  }
}

function setExerciseData(exerciseName, value) {
  return {
    type: 'SET_EXERCISE_DATA',
    exerciseName,
    value,
  };
}

export function gatherFormData(exerciseName) {
  return (dispatch, getState) => {
    const form = getState().form;
    const value = form.workout.values[exerciseName];
    dispatch(setExerciseData(exerciseName, value));
  };
}

export function postNewWorkout({ userId, workoutKey, workoutData }) {
  return (dispatch) => {
    axios.post(`${API_URL}/data/workout`, { userId, workoutKey, workoutData })
      .then(response => {
        dispatch({ type: CLEAR_WORKOUT_STORE });
        dispatch(push('/'));
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, DATA_ERROR);
      });
  };
}

export function postNewProgram(userId, programType) {
  return (dispatch) => {
    axios.post(`${API_URL}/data/program`, { userId, programType })
      .then(response => {
        dispatch({ type: SET_PROGRAM_TYPE, payload: response.data.program }); // put program info into workout store
        // step: must load next workout for current program
        dispatch(push('/workout'));
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, DATA_ERROR);
      });
  };
}

export function getCurrentProgram(userId) {
  return (dispatch) => {
    axios.get(`${API_URL}/data/program?user_id=${userId}`)
      .then(response => {
        dispatch({ type: SET_PROGRAM_TYPE, payload: response.data.program }); // put program info into workout store
        dispatch(push('/workout'));
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, DATA_ERROR);
      });
  };
}
