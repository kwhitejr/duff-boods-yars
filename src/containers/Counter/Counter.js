import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { increment, decrement, incrementIfOdd, incrementAsync } from 'actions/counter';
import styles from './Counter.css';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.incrementIfOdd = this.incrementIfOdd.bind(this);
    this.incrementAsync = this.incrementAsync.bind(this);
  }

  decrement() {
    this.props.dispatch(decrement());
  }

  increment() {
    this.props.dispatch(increment());
  }

  incrementIfOdd() {
    this.props.dispatch(incrementIfOdd());
  }

  incrementAsync() {
    this.props.dispatch(incrementAsync(2000));
  }

  render() {
    const { counter } = this.props;
    return (
      <div className={styles.base}>
        <button className={styles.number} onClick={this.increment}>
          {counter}
        </button>
        <div>
          <button onClick={this.increment}> + </button>
          <button onClick={this.decrement}> - </button>
          <button onClick={this.incrementIfOdd}> odd </button>
          <button onClick={this.incrementAsync}> async </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(Counter);
