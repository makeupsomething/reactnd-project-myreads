import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class SearchBooks extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.props.searchForBook(query)
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {

    const { query } = this.state

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="close-search">
            <Link
              to='/'
              className='close-search'
              onClick={this.clearQuery}>
              Close</Link>
          </div>
          <div className="search-books-input-wrapper">
            <input
              className='search-books'
              type='text'
              placeholder='Search Books'
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid"></ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks
