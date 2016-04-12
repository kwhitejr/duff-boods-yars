import React, { PropTypes } from 'react';
import ListItem from 'components/ListItem';
import styles from './List.css';

const List = ({ items, onRemove, onEdit }) => (
  <ul className={styles.list}>
    {items.map(item =>
      <ListItem
        key={item.id}
        item={item}
        onRemove={onRemove}
        onEdit={onEdit}
      />
    )}
  </ul>
);

List.defaultProps = {
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  onRemove: PropTypes.func,
  onEdit: PropTypes.func,
};

export default List;
