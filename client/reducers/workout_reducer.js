import update from 'immutability-helper';

const SET_EXERCISE_DATA = 'SET_EXERCISE_DATA';
const CLEAR_WORKOUT_STORE = 'CLEAR_WORKOUT_STORE';
const DATA_ERROR = 'DATA_ERROR';
const SET_PROGRAM_TYPE = 'SET_PROGRAM_TYPE';

const INITIAL_STATE = {
  error: '',
  exercises: {},
  program: null,
};

function setExerciseData(state, exerciseName, value) {
  if (!state.exercises[exerciseName]) {
    return { ...state,  
      exercises: {
        ...state.exercises,
        [exerciseName]: [value]
      }
    };
  } else {
    return update(state, {
      exercises: {
        [exerciseName]: { $push: [value] },
      }
    });
  }
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_EXERCISE_DATA:
      return setExerciseData(state, action.exerciseName, action.value);
    case CLEAR_WORKOUT_STORE:
      return { ...state, exercises: {} };
    case DATA_ERROR:
      return { ...state, error: action.payload };
    case SET_PROGRAM_TYPE:
      return { ...state, program: action.payload };
  }
  return state;
}
