import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class OpenSearch extends Component {

  render() {
    return (
      <div className="open-search">
        //<a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
        <Link
          to='/create'
          className='add-book'>
          Add a book</Link>
      </div>
    )
  }
}

export default OpenSearch
