import React, { Component } from 'react';

class TableHeader extends Component {
  // Function to sort the table columns
  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === 'asc' ? 'desc' : 'asc';
    } else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }

    this.props.onSort(sortColumn);
  };

  render() {
    const { sortColumn, columns } = this.props;

    // Returns ascending or decending arrow based on sortColumn
    const columnArrows = path => {
      if (path === sortColumn.path && sortColumn.order === 'asc')
        return <i className="fa fa-sort-asc" />;
      else return <i className="fa fa-sort-desc" />;
    };

    // Return movie table column headers
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              className={column.label ? 'clickable' : null}
              key={column.label || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {column.label && column.path === sortColumn.path
                ? columnArrows(column.path)
                : null}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
