import React, { PropTypes } from 'react';

const WorkoutHead = ({ selectedWorkout, exerciseIndex, setIndex }) => {
  return (<div>
    <h1>Phase {selectedWorkout.id[0]}, Day {selectedWorkout.id[1]} {selectedWorkout.title}</h1>
    <h3>{selectedWorkout.exercises[exerciseIndex].name}</h3>
    <ul>
      {selectedWorkout.exercises[exerciseIndex].sets.map((set, i) =>
        (<li key={i}>{set}</li>)
      )}
    </ul>
  </div>);
};

WorkoutHead.propTypes = {
  selectedWorkout: PropTypes.shape({
    id: PropTypes.arrayOf(PropTypes.number).isRequired,
    title: PropTypes.string.isRequired,
    exercises: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        sets: PropTypes.array.isRequired,
        track: PropTypes.string.isRequired,
      }).isRequired
    ),
  }).isRequired,
  // schedule: PropTypes.shape({
  //   phase:    PropTypes.string.isRequired,
  //   week:     PropTypes.string.isRequired,
  //   day:      PropTypes.string.isRequired,
  // }).isRequired
};

export default WorkoutHead;
