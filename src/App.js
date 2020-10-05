import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Catalog from './components/Catalog';
import Movie from './components/Movie';
import MovieDetail from './components/MovieDetail ';

class App extends Component {
  render() {
    return (
      <Router>
          <div className="App">
            <p id='links'>
            <Link to='/'> Home </Link>
            <Link to='/catalog'> Catalog </Link>
            </p>
              <Route exact path='/' render={() => <LandingPage />} />
              <Route exact path='/catalog' render={() => <Catalog />} />
              <Route exact path='/movies/:id' render={({ match, location }) => <MovieDetail match={match} location={location} />} />
          </div>
      </Router>
    );
  }
}
export default App;
