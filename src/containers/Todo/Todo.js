import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { addItem, removeItem, editItem, completeItem, clearCompleted } from 'actions/todo';
import styles from './Todo.css';
import Input from 'components/Input';
import List from 'components/List';

class Todo extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
  };

  constructor() {
    super();
    this._onInputChange = this._onInputChange.bind(this);
    this._onInputEnter = this._onInputEnter.bind(this);
    this._onRemoveItem = this._onRemoveItem.bind(this);
    this._onEditItem = this._onEditItem.bind(this);
    this._onCompleteItem = this._onCompleteItem.bind(this);
    this._onClearCompleted = this._onClearCompleted.bind(this);
    this.state = {
      inputValue: '',
    };
  }

  _onInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  _onInputEnter(event) {
    const item = event.target.value.trim();

    if (event.which === 13 && item) {
      this.props.dispatch(addItem(item));
      this.setState({ inputValue: '' });
    }
  }

  _onRemoveItem(item) {
    this.props.dispatch(removeItem(item));
  }

  _onEditItem(item) {
    this.props.dispatch(editItem(item));
  }

  _onCompleteItem(item) {
    this.props.dispatch(completeItem(item));
  }

  _onClearCompleted() {
    this.props.dispatch(clearCompleted());
  }

  render() {
    const { todo: { items } } = this.props;

    let count = items.length || null;
    if (count) {
      count = `${count} ${count > 1 ? 'items' : 'item'}`;
    }

    const completedCount = items.reduce((count, item) => {
      return item.completed ? count + 1 : count
    }, 0);

    return (
      <div className={styles.base}>
        <div className={styles.inputContainer}>
          <Input
            className={styles.input}
            placeholder="Enter new item"
            onChange={this._onInputChange}
            onKeyDown={this._onInputEnter}
            value={this.state.inputValue}
          />
        </div>
        <List
          items={items}
          onRemove={this._onRemoveItem}
          onEdit={this._onEditItem}
          onComplete={this._onCompleteItem}
        />
        <footer>
          <p>{count}</p>
          {
            completedCount
              ? <button onClick={this._onClearCompleted}>Clear Completed</button>
              : ''
          }
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todo: state.todo,
  };
}

export default connect(mapStateToProps)(Todo);
