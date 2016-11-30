import update from 'immutability-helper';

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
  }
  return state;
}
