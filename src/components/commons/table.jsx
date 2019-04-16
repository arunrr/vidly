import React, { Component } from 'react';

import TableHeader from './tableHeader';
import TableBody from './tableBody';
import Like from './like';

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
      key: 'like',
      content: movie => <Like movie={movie} onLike={this.props.onLike} />
    },
    {
      key: 'delete',
      content: movie => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie)}
        >
          Delete
        </button>
      )
    }
  ];

  render() {
    const { data, sortColumn, onSort } = this.props;
    // Returns table
    return (
      <table className="table">
        <TableHeader
          sortColumn={sortColumn}
          onSort={onSort}
          columns={this.columns}
        />
        <TableBody data={data} columns={this.columns} />
      </table>
    );
  }
}

export default Table;
