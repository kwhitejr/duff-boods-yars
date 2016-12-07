import axios from 'axios';
import { push } from 'react-router-redux';
// import cookie from 'react-cookie';

export const CLEAR_WORKOUT_STORE = 'CLEAR_WORKOUT_STORE';
export const SET_EXERCISE_DATA = 'SET_EXERCISE_DATA';

const API_URL = 'http://localhost:3000/api';

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

export function postWorkoutData({ data }) {
  return (dispatch) => {
    axios.post(`${API_URL}/workout`, { data })
      .then(response => {
        // cookie.save('token', response.data.token, { path: '/' });
        // cookie.save('user', response.data.user, { path: '/' });
        dispatch({ type: CLEAR_WORKOUT_STORE });
        dispatch(push('/'));
      })
      .catch((error) => {
        errorHandler(dispatch, error.response, AUTH_ERROR);
      });
  };
}