import { expect } from 'chai';

import workoutReducer from '../../client/reducers/workout_reducer';

describe('workout_reducer', () => {

  it('handles SET_EXERCISE_DATA with new exercise', () => {
    const initialState = { 
      error: '',
      exercises: {},
      program: null, 
    };
    const action = {
      type: 'SET_EXERCISE_DATA',
      exerciseName: 'bench press',
      value: 150
    };
    const nextState = workoutReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: '',
      exercises: {
        'bench press': [150]
      },
      program: null,
    });
  });

  it('handles SET_EXERCISE_DATA with new set', () => {
    const initialState = { 
      error: '',
      exercises: {
        'bench press': [150]
      },
      program: null, 
    };
    const action = {
      type: 'SET_EXERCISE_DATA',
      exerciseName: 'bench press',
      value: 160
    };
    const nextState = workoutReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: '',
      exercises: {
        'bench press': [150, 160]
      },
      program: null,
    });
  });

  it('handles CLEAR_WORKOUT_STORE', () => {
    const initialState = { 
      error: '',
      exercises: {
        'bench press': [150, 160]
      },
      program: null, 
    };
    const action = {
      type: 'CLEAR_WORKOUT_STORE',
      exerciseName: 'bench press',
      value: 160
    };
    const nextState = workoutReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: '',
      exercises: {},
      program: null,
    });
  });

  it('handles DATA_ERROR', () => {
    const initialState = { 
      error: '',
      exercises: {},
      program: null, 
    };
    const action = {
      type: 'DATA_ERROR',
      payload: 'This is an error message.',
    };
    const nextState = workoutReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: 'This is an error message.',
      exercises: {},
      program: null,
    });
  });

  it('handles SET_PROGRAM_TYPE', () => {
    const initialState = { 
      error: '',
      exercises: {},
      program: null, 
    };
    const action = {
      type: 'SET_PROGRAM_TYPE',
      payload: 'third-edition',
    };
    const nextState = workoutReducer(initialState, action);

    expect(nextState).to.deep.equal({
      error: '',
      exercises: {},
      program: 'third-edition',
    });
  });

});