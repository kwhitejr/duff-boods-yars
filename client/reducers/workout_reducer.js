import update from 'immutability-helper';

const CLEAR_WORKOUT_STORE = 'CLEAR_WORKOUT_STORE';

function setExerciseData(state, exerciseName, value) {
  if (!state[exerciseName]) {
    return Object.assign({}, state, { [exerciseName]: [value] });
  } else {
    return update(state, {
      [exerciseName]: { $push: [value] }
    });
  }
}

export default function (state = {}, action) {
  switch (action.type) {
    case 'SET_EXERCISE_DATA':
      return setExerciseData(state, action.exerciseName, action.value);
    case 'CLEAR_WORKOUT_STORE':
      return { ...state, workout: null };
  }
  return state;
}
