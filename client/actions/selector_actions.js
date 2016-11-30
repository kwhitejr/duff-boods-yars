import { browserHistory } from 'react-router';

import workouts from '../../config/workouts';

function receiveWorkout(selectedWorkout) {
  return {
    type: 'RECEIVE_WORKOUT',
    selectedWorkout,
  }
}

function setSchedule(schedule) {
  return {
    type: 'SET_SCHEDULE',
    schedule,
  }
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
    const selectedWorkout = workouts.filter(x => x.id.join('') === workoutId);

    dispatch(receiveWorkout(selectedWorkout[0]));
    dispatch(setSchedule(schedule));

    browserHistory.push('/workout')
  }
}