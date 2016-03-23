import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { increment, decrement, incrementIfOdd, incrementAsync } from 'actions/counter';

class Counter extends Component {
  static propTypes = {
    counter: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this._decrement = this._decrement.bind(this);
    this._increment = this._increment.bind(this);
    this._incrementIfOdd = this._incrementIfOdd.bind(this);
    this._incrementAsync = this._incrementAsync.bind(this);
  }

  _decrement() {
    this.props.dispatch(decrement());
  }

  _increment() {
    this.props.dispatch(increment());
  }

  _incrementIfOdd() {
    this.props.dispatch(incrementIfOdd());
  }

  _incrementAsync() {
    this.props.dispatch(incrementAsync(2000));
  }

  render() {
    const { counter } = this.props;
    return (
      <div>
        <div>
          <Link to="/">Back</Link>
        </div>
        <div>
          {counter}
        </div>
        <div>
          <button onClick={this._increment}> + </button>
          <button onClick={this._decrement}> - </button>
          <button onClick={this._incrementIfOdd}> odd </button>
          <button onClick={this._incrementAsync}> async </button>
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
