import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Movie extends Component {

    rentMovie = () =>{
        this.props.rentMovie(this.props.movieInfo.id)
    }

  render() {
    const {movieInfo} = this.props
    return (
      <div className='movie'>
          {this.props.rented?
          <i className="fas fa-minus" onClick={this.rentMovie}></i>:
          <i className="fas fa-plus" onClick={this.rentMovie}></i>
          }
          <Link to={{ pathname: '/movies/' + movieInfo.id, movieInfo: movieInfo }}>
          <img src={movieInfo.img} alt=""/>
          </Link>
      </div>
    );
  }
}
export default Movie;