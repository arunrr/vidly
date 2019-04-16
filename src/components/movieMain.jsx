import React, { Component } from 'react';

import _ from 'lodash';

import Table from './commons/table';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './commons/pagination';
import { pagination } from '../utils/pagination';

class MovieMain extends Component {
  state = {
    movies: [],
    genres: [],
    items: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    this.setState({ movies: getMovies(), genres: getGenres() });
  }

  handleLike = m => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(m);
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handleDelete = movie => {
    const movies = this.state.movies.filter(m => m._id !== movie._id);
    this.setState({ movies });
  };

  handleColumnSort = sortColumn => {
    this.setState({ sortColumn });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { movies, sortColumn, currentPage, items } = this.state;

    const movieList = movies.map(movie => movie);

    const sortedList = _.orderBy(
      movieList,
      [sortColumn.path],
      [sortColumn.order]
    );

    const moviePageList = pagination(sortedList, currentPage, items);
    const totalCount = movieList.length;

    return (
      <React.Fragment>
        <Table
          data={moviePageList}
          sortColumn={this.state.sortColumn}
          onLike={this.handleLike}
          onDelete={this.handleDelete}
          onSort={this.handleColumnSort}
        />

        <div className="container">
          <Pagination
            itemCount={totalCount}
            pageSize={items}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default MovieMain;
