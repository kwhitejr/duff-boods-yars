import { expect } from 'chai';

import selectorReducer from '../../client/reducers/selector_reducer';

describe('selector_reducer', () => {
  
  const initialState = {
    error: '',
    selectedWorkout: null,
    schedule: {
      phase: null,
      week: null,
      day: null,
    },
  };

  it('handles RECEIVE_WORKOUT', () => {
    const state = initialState;
    const action = {
      type: 'RECEIVE_WORKOUT',
      workout: {
        someWorkout: 'things'
      }
    };
    const nextState = selectorReducer(state, action);

    expect(nextState).to.deep.equal({
      error: '',
      selectedWorkout: {
        someWorkout: 'things'
      },
      schedule: {
        phase: null,
        week: null,
        day: null,
      },
    });
  });

  it('handles SET_SCHEDULE', () => {
    const state = initialState;
    const action = {
      type: 'SET_SCHEDULE',
      schedule: {
        phase: '2',
        week: '3',
        day: '2',
      }
    };
    const nextState = selectorReducer(state, action);

    expect(nextState).to.deep.equal({
      error: '',
      selectedWorkout: null,
      schedule: {
        phase: '2',
        week: '3',
        day: '2',
      },
    });
  });

});