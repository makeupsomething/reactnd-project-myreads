import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
* @description Button for opening the search page
*/
class OpenSearch extends Component {
  static propTypes = {
    clearBulkMoveBooks: PropTypes.func.isRequired,
  }

  /**
  * @description The render function
  * @returns { object } The UI
  */
  render() {
    const { clearBulkMoveBooks } = this.props;

    return (
      <div className="open-search">
        <Link
          to="/search"
          className="add-book"
          onClick={clearBulkMoveBooks}
        >
        Add a book
        </Link>
      </div>
    );
  }
}

export default OpenSearch;
