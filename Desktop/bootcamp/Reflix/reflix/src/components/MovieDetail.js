import React, { Component } from 'react';
import Landing from './Landing';
import { Link } from 'react-router-dom';

class MovieDetail extends Component {

    render() {
        let movie = this.props.movies.find(m => m.id == this.props.match.params.id)
        return (
            <div className='details'>
                <h3>{movie.title} ({movie.year})</h3>
                <img src= {movie.img}></img>
                <p>{movie.descrShort}</p>
            </div>
        )
    }
}
export default MovieDetail