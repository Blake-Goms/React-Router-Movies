import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    // savedList.push(movie);
    // if (savedList.map(savedMovie => savedMovie.id === movie.id).length < 1) {
    //   savedList.push(movie);
    //   this.setState({ savedList });
    // }
    //this below saves movies and won't let another copy of movie to be saved
    if(!savedList.map(savedMovie => savedMovie.id).includes(movie.id)) {
      savedList.push(movie); 
      this.setState({savedList})
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList}/>
        {/* <Route exact path="/movies/:id" component={Movie}/> */}
        <Route exact path="/movies/:id" render={props => {
        return <Movie {...props} addToSavedList={this.addToSavedList}/> }} /> 
            
      </div>
    );
  }
}
