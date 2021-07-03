
import React, { Component } from 'react';
import { Link, Router } from 'react-router-dom';

class Movie extends Component {

    changeRented = () =>{
        this.props.changeRented(this.props.movie.id);
    }

    goToMoveDetails = () =>{
        console.log(this.props.movie.id);
    }
    render() {
        let linkTo = '/movies/'+this.props.movie.id
        return (
            <span>
                <div className='moviecard'>
                    <h6>{this.props.movie.title}</h6>
                    <Link to={linkTo} ><img src={this.props.movie.img}></img></Link>
                    <button onClick={this.changeRented}>
                        {this.props.movie.isRented ? '-' : '+'}
                    </button>
                </div>
            </span>
        )
    }
}
export default Movie