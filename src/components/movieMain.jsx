import React, { Component } from 'react';

import Table from './commons/table';

class MovieMain extends Component {
  state = {
    sortColumn: { path: 'title', order: 'asc' }
  };

  handleColumnSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    return (
      <Table
        sortColumn={this.state.sortColumn}
        onSort={this.handleColumnSort}
      />
    );
  }
}

export default MovieMain;
