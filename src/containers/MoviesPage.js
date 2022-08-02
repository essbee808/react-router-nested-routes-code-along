// .src/containers/MoviesPage.js
import React from 'react';
import { Route } from 'react-router-dom';
import MoviesList from '../components/MoviesList';
import MovieShow from '../components/MovieShow';

// add 'match' to the arguments so we can access the path info 
// in 'routerProps' that is passed from App.js

const MoviesPage = ({ match, movies }) => (
  <div>
    <MoviesList movies={movies} />
    {/* Add 'Route' component that will render 'MovieShow' when movie is selected */}
    <Route 
      path={match.url}
      render={() => <h3>Choose a movie from the list above</h3>}/>
    <Route path={`${match.url}/:movieId`} render={(routerProps) => <MovieShow {...routerProps} movies={movies}/> } />
  
  </div>
)

export default MoviesPage
