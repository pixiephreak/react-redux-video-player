import React, { Component } from 'react';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {term:''};
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={e => this.handleInputChange(e.target.value)}
        />
      </div>
    )
  }

  handleInputChange(term){
    this.setState({term});
    this.props.onTermChange(term);
  }

}

export default SearchBar;
