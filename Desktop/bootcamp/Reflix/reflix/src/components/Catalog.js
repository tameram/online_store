
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Movie from './Movie';

class Catalog extends Component {

    constructor(){
        super()
        this.state ={
            textSearch : ''
        }
    }

    updateSearchText =(e)=>{
        this.setState({textSearch : e.target.value})
    }

    render() {
        let disappear = this.props.movies.find(m => (m.isRented === true &&  m.title.toLowerCase().includes(this.state.textSearch)))
        return (<div>
            <div className='searchbadget'>
                <input id="name-input" type="text" value={this.state.textSearch} onChange={this.updateSearchText} placeholder='Search' />
                <h4>badget : {this.props.badget} $</h4>
            </div>
            <div>
               
                {disappear ? <h4>Rented:</h4> : null}
                <div className='moviesContainer'>
                {this.props.movies.filter(m => (m.isRented === true && m.title.toLowerCase().includes(this.state.textSearch))).map(m => <Movie key={m.id} movie={m} changeRented={this.props.changeRented} />)}
                </div>
            </div>
            <div>
                <h4>Catalog:</h4>
                <div className='moviesContainer'>
                    {this.props.movies.filter(m => m.title.toLowerCase().includes(this.state.textSearch)).map(m => <Movie key={m.id} movie={m} changeRented={this.props.changeRented} />)}
                </div>
            </div>

        </div>)
    }
}
export default Catalog