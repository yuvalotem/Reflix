import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class User extends Component {
  render() {
    return (
      <Link to={'/catalog/' + this.props.id}>
        <div className='User' style={{
          backgroundImage: "url(" + this.props.img + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}>
        </div>
          {this.props.name}
      </Link>
    );
  }
}
export default User;