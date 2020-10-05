import React, { Component } from 'react';
import User from './User';

class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: 'Yuval', color: '#2ecc71', id: 1 },
                { name: 'Dana', color: '#e67e22', id: 2 },
                { name: 'Ido', color: '#3498db', id: 3 },
                { name: 'Shani', color: '#e74c3c', id: 4 },
            ]
        }
    }
    render() {
        return (
            <div className='landing'>
                {this.state.users.map(u => <User key={u.id} name={u.name} color={u.color} />)}
            </div>
        );
    }
}
export default LandingPage;
