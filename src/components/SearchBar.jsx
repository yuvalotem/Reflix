import React, {Component} from 'react';

class SearchBar extends Component {
  render() {
    return (
      <span className='searchBar'>
          <input placeholder={'Search'} onChange={this.props.handleChange}/>
      </span>
    );
  }
}
export default SearchBar;