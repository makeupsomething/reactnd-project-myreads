import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
* @description Button for opening the search page
*/
class OpenSearch extends Component {
  /**
  * @description The render function
  * @returns { object } The UI
  */
  render() {
    return (
      <div className="open-search">
        <Link
          to="/search"
          className="add-book"
        >
        Add a book
        </Link>
      </div>
    );
  }
}

export default OpenSearch;
