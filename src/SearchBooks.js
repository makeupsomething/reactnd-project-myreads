import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
* @description Component for searching for books
* @returns {void}
*/
class SearchBooks extends Component {
  static propTypes = {
    searchForBook: PropTypes.func.isRequired,
    clearList: PropTypes.func.isRequired,
    clearBulkMoveBooks: PropTypes.func.isRequired,
  }

  state = {
    query: '',
  }

  /**
  * @description Updates the search query based on what the user has typed into the search bar
  * @param {string} query - The book object
  * @returns {void}
  */
  updateQuery = (query) => {
    this.setState({ query: query.trim() });
    this.props.searchForBook(query);
  }

  /**
  * @description Clears the query and the list of found books
  * @returns {void}
  */
  clearQuery = () => {
    this.setState({ query: '' });
    this.props.clearList();
    this.props.clearBulkMoveBooks();
  }

  /**
  * @description The render function
  * @returns { object } The UI
  */
  render() {
    const { query } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <div className="close-search">
            <Link
              to="/"
              className="close-search"
              onClick={this.clearQuery}
            >
            Close
            </Link>
          </div>
          <div className="search-books-input-wrapper">
            <input
              className="search-books"
              type="text"
              placeholder="Search Books"
              value={query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBooks;
