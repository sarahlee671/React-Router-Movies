import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import {Route} from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if(savedList.some(item => item.id === movie.id)) {
      return;
    } else {
      savedList.push(movie);
    }
    this.setState({ savedList });
  };

  render() {
    return (

      <div>
  
        <SavedList list={this.state.savedList} />
          
        <Route exact path="/" component={MovieList} />
          
        <Route path="/movies/:id" render={props =>
        <Movie addToSavedList={this.addToSavedList} {...props} />} />
      </div>
    );
  }
}
