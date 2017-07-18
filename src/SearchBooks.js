import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchBooks extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    console.log('searching for ' + this.state.query)
    let foundBooks = this.props.searchForBook(query)
    console.log(foundBooks)
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {

    const { query } = this.state
    //const { searchForBook } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="close-search">
            <Link
              to='/'
              className='close-search'>
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
