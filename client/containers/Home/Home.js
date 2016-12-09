import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import styles from './Home.css';

import { postNewProgram, getCurrentProgram } from 'actions/workout_actions';

class Home extends Component {
  render() {
    return (<div>
      <Helmet title="Home" />
      <h1>Duff Boods Home</h1>
      <button onClick={this.props.postNewProgram.bind('thirdEdition')}>New Game</button>
      <button onClick={this.props.getCurrentProgram}>Continue</button>
    </div>);
  }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  postNewProgram: (programType) => dispatch(postNewProgram(programType)),
  getCurrentProgram: () => dispatch(getCurrentProgram()),
});

Home.propTypes = {
  postNewProgram: PropTypes.func.isRequired,
  getCurrentProgram: PropTypes.func.isRequired,
};

export default connect(
  // mapStateToProps,
  mapDispatchToProps,
)(Home);
