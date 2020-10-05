import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class MovieDetail extends Component {
    render() {
        const { movieInfo } = this.props.location
        if(!movieInfo){
            return <Redirect to='/catalog' />
        }
        return (
            <div className='movieDetail'>
                <h3>{movieInfo.title} {movieInfo.year}</h3>
                <img src={movieInfo.img} />
                <p>{movieInfo.descrShort}</p>
            </div>
        );
    }
}
export default MovieDetail;