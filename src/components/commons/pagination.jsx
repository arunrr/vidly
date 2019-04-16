import React from 'react';

import _ from 'lodash';
import PropTypes from 'proptypes';

const Pagination = ({ itemCount, pageSize, onPageChange, currentPage }) => {
  const page = Math.ceil(itemCount / pageSize);
  // If there is only one page
  if (page === 1) return null;

  const pages = _.range(1, page + 1);

  return (
    <nav>
      <ul className="pagination">
        {pages.map(p => (
          <li
            key={p}
            className={
              currentPage === p
                ? 'clickable page-item active'
                : 'clickable page-item'
            }
          >
            <a className="page-link" onClick={() => onPageChange(p)}>
              {p}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  itemCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;
