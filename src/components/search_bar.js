import React, {Component}  from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        {/* <input onChange={event => this.setState({ term: event.target.value })} /> */}
        <input onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  // create new method
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

export default SearchBar;