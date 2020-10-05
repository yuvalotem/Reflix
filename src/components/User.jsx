import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  render() {
    return (
        <Link to='/catalog'>
            <div className='User' style={{backgroundColor: this.props.color}}>
                {this.props.name}
            </div>
      </Link>
    );
  }
}
export default User;