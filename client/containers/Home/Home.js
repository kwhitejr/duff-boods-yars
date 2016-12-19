import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import cookie from 'react-cookie';

import styles from './Home.css';

import { postProgram, getCurrentProgram } from 'actions/workout_actions';

const user = cookie.load('user');

class Home extends Component {
  constructor(props) {
    super(props);
    this.handleNewGame = this.handleNewGame.bind(this);
    this.handleContinue = this.handleContinue.bind(this);
  }

  handleNewGame() {
    this.props.postNewProgram(user._id, 'thirdEdition');
  }

  handleContinue() {
    this.props.getCurrentProgram(user._id);
  }

  render() {
    return (<div>
      <Helmet title="Home" />
      <h1>Duff Boods Home</h1>
      <button onClick={this.handleNewGame}>New Game</button>
      <button onClick={this.handleContinue}>Continue</button>
    </div>);
  }
};

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  postProgram: (userId, programType) => dispatch(postProgram(userId, programType)),
  getCurrentProgram: (userId) => dispatch(getCurrentProgram(userId)),
});

Home.propTypes = {
  postProgram: PropTypes.func.isRequired,
  getCurrentProgram: PropTypes.func.isRequired,
};

export default connect(
  null,
  mapDispatchToProps,
)(Home);
