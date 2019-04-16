import React, { Component } from 'react';

import _ from 'lodash';

import Table from './commons/table';
import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';
import Pagination from './commons/pagination';
import { pagination } from '../utils/pagination';
import ListGroup from './commons/listGroup';

class MovieMain extends Component {
  state = {
    movies: [],
    genres: [],
    selectedGenre: null,
    items: 4,
    currentPage: 1,
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    const genres = [{ _id: 0, name: 'All Genres' }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
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

  handleSelectedGenre = genre => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const {
      movies,
      sortColumn,
      currentPage,
      items,
      genres,
      selectedGenre
    } = this.state;

    const filteredList =
      selectedGenre && selectedGenre._id !== 0
        ? movies.filter(movie => movie.genre._id === selectedGenre._id)
        : movies;

    const sortedList = _.orderBy(
      filteredList,
      [sortColumn.path],
      [sortColumn.order]
    );

    const moviePageList = pagination(sortedList, currentPage, items);
    const totalCount = filteredList.length;
    const count = movies.length;

    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            items={genres}
            onItemSelect={this.handleSelectedGenre}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <p>
            {count !== 0
              ? 'Total Movies Available ' + totalCount
              : 'There are no movies available in the list !!!'}
          </p>
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
        </div>
      </div>
    );
  }
}

export default MovieMain;
