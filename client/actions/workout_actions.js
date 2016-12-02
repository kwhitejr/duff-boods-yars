export const SET_EXERCISE_DATA = 'SET_EXERCISE_DATA';

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
    dispatch(setExerciseData(exerciseName, value))
  };
}

// this function should take accumulated exercise set data (an array of numbers) and commit it to the database. Does not affect redux store, so no companion reducer required.
export function storeExerciseData(exerciseName) {
  
  
}