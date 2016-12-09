import { browserHistory } from 'react-router';

import { thirdEdition } from 'config/workouts';

export const  RECEIVE_WORKOUT = 'RECEIVE_WORKOUT',
              SET_SCHEDULE = 'SET_SCHEDULE';

function receiveWorkout(selectedWorkout) {
  return {
    type: 'RECEIVE_WORKOUT',
    selectedWorkout,
  };
}

function setSchedule(schedule) {
  return {
    type: 'SET_SCHEDULE',
    schedule,
  };
}

export function fetchWorkout() {
  return (dispatch, getState) => {
    const form = getState().form;
    const schedule = {
      phase:  form.selector.values.phase,
      week:   form.selector.values.week,
      day:    form.selector.values.day,
    };
    const workoutId = schedule.phase + schedule.day;
    // const workouts = fetch(`../../config/workouts`);
    const selectedWorkout = thirdEdition.filter(x => x.id.join('') === workoutId);

    dispatch(receiveWorkout(selectedWorkout[0]));
    dispatch(setSchedule(schedule));

    browserHistory.push('/workout');
  };
}
