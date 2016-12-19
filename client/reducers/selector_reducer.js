const INITIAL_STATE = {
  error: '',
  selectedWorkout: null,
  schedule: {
    phase: null,
    week: null,
    day: null,
  },
};

function receiveWorkout(state, selectedWorkout) {
  const newObj = {
    selectedWorkout: selectedWorkout,
  };
  return Object.assign({}, state, newObj);
}

function setSchedule(state, schedule) {
  const newObj = {
    schedule: schedule,
  };
  return Object.assign({}, state, newObj);
}

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'RECEIVE_WORKOUT':
      return receiveWorkout(state, action.selectedWorkout);
    case 'SET_SCHEDULE':
      return setSchedule(state, action.schedule);
  }
  return state;
}
