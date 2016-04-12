import React, { Component, PropTypes } from 'react';
import Input from 'components/Input';
import styles from './ListItem.css';

class ListItem extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    onRemove: PropTypes.func,
    onEdit: PropTypes.func,
  };

  constructor(props) {
    super();
    this._onTextClick = this._onTextClick.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onRemove = this._onRemove.bind(this);
    this._onBlur = this._onBlur.bind(this);
    this._onFocus = this._onFocus.bind(this);
    this.state = {
      editing: false,
      text: props.item.item || '',
    };
  }

  _onTextClick() {
    this.setState({ editing: true });
  }

  _onChange(event) {
    this.setState({ text: event.target.value });
  }

  _onRemove() {
    const { item, onRemove } = this.props;
    onRemove(item);
  }

  _onBlur() {
    const { item, onEdit } = this.props;
    const { text } = this.state;

    this.setState({ editing: false });

    if (item.item === text) {
      return;
    }
    onEdit({ ...item, item: text });
  }

  _onFocus(event) {
    event.target.select();
  }

  render() {
    const { onRemove } = this.props;
    const { editing } = this.state;

    let removeButton;
    if (onRemove) {
      removeButton = <button className={styles.remove} onClick={this._onRemove}>X</button>;
    }

    let text;
    if (editing) {
      text = (
        <Input
          className={styles.itemText}
          onBlur={this._onBlur}
          onChange={this._onChange}
          onFocus={this._onFocus}
          value={this.state.text}
          autoFocus
        />
      );
    } else {
      text = (
        <div className={styles.itemText} onClick={this._onTextClick}>
          { this.state.text }
        </div>
      );
    }

    return (
      <li className={styles.item}>
        {text} {removeButton}
      </li>
    );
  }
}

export default ListItem;
