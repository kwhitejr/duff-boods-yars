import React, { Component } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { reset } from 'redux-form';

import WorkoutWizard from 'components/WorkoutWizard';
import SelectorWizard from 'components/SelectorWizard';

import { gatherFormData, postWorkout } from 'actions/workout_actions';
import { fetchWorkout } from 'actions/selector_actions';

class WorkoutContainer extends Component {

  renderComponent() {
    if (!this.props.selectedWorkout) {
      return (
        <SelectorWizard {...this.props} />
      );
    } else {
      return (
        <WorkoutWizard {...this.props} />
      );
    }
  }

  render() {
    return (<div>
      <Helmet title="Workout" />
      {this.renderComponent()}
    </div>);
  }
}

const mapStateToProps = (state) => ({
  selectedWorkout:  state.selector.selectedWorkout,
  week:             state.selector.week, // need to create this
  userId:           state.workout.program.user_id,
  programId:        state.workout.program._id,
  workoutData:      state.workout.exercises,
});

const mapDispatchToProps = (dispatch) => ({
  gatherFormData:     (exerciseName) => dispatch(gatherFormData(exerciseName)),
  postWorkout:     (userId, programId, workoutKey, workoutData) => dispatch(postWorkout(userId, programId, workoutKey, workoutData)),
  reset:              () => dispatch(reset('workout')),
  fetchWorkout:       () => dispatch(fetchWorkout()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WorkoutContainer);
