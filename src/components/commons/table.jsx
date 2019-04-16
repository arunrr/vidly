import React, { Component } from 'react';

import TableHeader from './tableHeader';

class Table extends Component {
  // Column labels and info used in the table
  columns = [
    {
      path: 'title',
      label: 'Title'
    },
    {
      path: 'genre.name',
      label: 'Genre'
    },
    {
      path: 'dailyRentalRate',
      label: 'Rating'
    },
    {
      path: 'numberInStock',
      label: 'Stock'
    },
    {
      key: 'like'
    },
    {
      key: 'delete'
    }
  ];

  render() {
    const { sortColumn, onSort } = this.props;
    // Returns table
    return (
      <table className="table">
        <TableHeader
          sortColumn={sortColumn}
          onSort={onSort}
          columns={this.columns}
        />
      </table>
    );
  }
}

export default Table;
