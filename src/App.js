import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Catalog from './components/Catalog';
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
              <Route exact path='/catalog/:id' render={({ match }) => <Catalog match={match} />} />
              <Route exact path='/movies/:id' render={({ match, location }) => <MovieDetail match={match} location={location} />} />
          </div>
      </Router>
    );
  }
}
export default App;
