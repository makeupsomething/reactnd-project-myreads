import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class OpenSearch extends Component {

  render() {
    return (
      <div className="open-search">
        <Link
          to='/search'
          className='add-book'>
          Add a book</Link>
      </div>
    )
  }
}

export default OpenSearch
