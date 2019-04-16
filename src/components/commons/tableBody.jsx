import React, { Component } from 'react';

import _ from 'lodash';

class TableBody extends Component {
  cellRender = (item, column) => {
    if (column.content) return column.content(item);

    return _.get(item, column.path);
  };

  columnKey = (item, column) => item._id + (column.label || column.key);

  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map(item => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={this.columnKey(item, column)}>
                {this.cellRender(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
