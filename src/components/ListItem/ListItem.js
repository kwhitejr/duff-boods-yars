import React, { PropTypes } from 'react';
import styles from './ListItem.css';

const ListItem = ({ item, onRemove }) => {
  let removeButton;
  if (onRemove) {
    removeButton = <button onClick={() => onRemove(item)}>X</button>;
  }

  return (
    <li className={styles.item}>
      {item.item} {removeButton}
    </li>
  );
};

ListItem.defaultProps = {
};

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  onRemove: PropTypes.func,
};

export default ListItem;
