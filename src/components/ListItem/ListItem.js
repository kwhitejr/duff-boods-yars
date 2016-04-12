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
    this._onChange = this._onChange.bind(this);
    this._onRemove = this._onRemove.bind(this);
    this.state = {
      text: props.item.item || '',
    };
  }

  _onChange(event) {
    this.setState({ text: event.target.value });
  }

  _onRemove() {
    const { item, onRemove } = this.props;
    onRemove(item);
  }



  render() {
    const { item, onRemove, onEdit } = this.props;

    let removeButton;
    if (onRemove) {
      removeButton = <button className={styles.remove} onClick={this._onRemove}>X</button>;
    }

    let text;
    if (onEdit) {
      text = (
        <Input
          className={styles.editable}
          onChange={this._onChange}
          value={this.state.text}
        />
      );
    } else {
      text = this.state.text;
    }

    return (
      <li className={styles.item}>
        {text} {removeButton}
      </li>
    );
  }
}

export default ListItem;
