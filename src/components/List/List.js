import React, { PropTypes } from 'react';
import styles from './List.css';

const List = ({ items, onRemove }) => {
  const ListItems = items.map((item) => {
    let removeButton;
    if (onRemove) {
      removeButton = <button onClick={() => onRemove(item)}>X</button>;
    }
    return (
      <li className={styles.item} key={item.id}>
        {item.item} {removeButton}
      </li>
    );
  });

  return (
    <ul className={styles.list}>
      {ListItems}
    </ul>
  );
};

List.defaultProps = {
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
};

export default List;
