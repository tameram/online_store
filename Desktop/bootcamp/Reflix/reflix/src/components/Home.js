
import React, { Component } from 'react';
import Landing from './Landing';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
        <div className='mainUsersDiv'>
                {this.props.Users.map(u => <Link to="/catalog"><Landing user = {u}/></Link>)}
        </div>
        )
    }
}
export default Home