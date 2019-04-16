import React from 'react';

const ListGroup = ({
  items,
  textProperty,
  keyProperty,
  onItemSelect,
  selectedItem
}) => {
  return (
    <ul className="list-group">
      {items.map(item => (
        <li
          key={item[keyProperty]}
          className={
            item === selectedItem
              ? 'clickable list-group-item active'
              : 'clickable list-group-item'
          }
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: 'name',
  keyProperty: '_id'
};

export default ListGroup;
