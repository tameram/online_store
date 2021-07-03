
import React, { Component } from 'react';
import { Router } from 'react-router-dom';

class Landing extends Component {
    render() {
        return (
            
                <span className='user' onClick='' style={{ backgroundColor: this.props.user.color }}>
                    {this.props.user.Name}
                </span>
            
        )
    }
}
export default Landing