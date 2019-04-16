import React, { Component } from 'react';

import _ from 'lodash';

import Table from './commons/table';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

class MovieMain extends Component {
  state = {
    movies: [],
    genres: [],
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

  render() {
    const { movies, sortColumn } = this.state;

    const movieList = movies.map(movie => movie);

    const sortedList = _.orderBy(
      movieList,
      [sortColumn.path],
      [sortColumn.order]
    );
    return (
      <Table
        data={sortedList}
        sortColumn={this.state.sortColumn}
        onLike={this.handleLike}
        onDelete={this.handleDelete}
        onSort={this.handleColumnSort}
      />
    );
  }
}

export default MovieMain;
