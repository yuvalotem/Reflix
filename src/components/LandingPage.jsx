import React, { Component } from 'react';
import User from './User';

class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: 'Yuval', color: '#2ecc71', id: 1, img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/64623a33850498.56ba69ac2a6f7.png', rentedMovies:[], budget: 10},
                { name: 'Adi', color: '#e67e22', id: 2, img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png' , rentedMovies:[], budget: 10 },
                { name: 'Ido', color: '#3498db', id: 3, img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png' , rentedMovies:[], budget: 10 },
                { name: 'Shani', color: '#e74c3c', id: 4, img: 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png' , rentedMovies:[], budget: 10 },
            ]
        }
    }

    componentDidMount =() => {
        this.state.users.forEach(u =>{
            if(!localStorage[u.id]){
                const stringUser = JSON.stringify(u)
                localStorage.setItem(u.id, stringUser);
            }
        })
    }

    render() {
        return (
            <div className='landing'>
                {this.state.users.map(u => <User key={u.id} id={u.id} name={u.name} color={u.color} img={u.img} />)}
            </div>
        );
    }
}
export default LandingPage;
