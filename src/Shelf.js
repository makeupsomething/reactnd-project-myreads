import React, { Component } from 'react';
import ListBooks from './ListBooks'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {
  state = {
    books: []
  }

  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
 }

  render() {
    const { shelfName, shelfType } = this.props

    let thisSelfStatus
    if (shelfName) {
      const match = new RegExp(escapeRegExp(shelfType), 'i')
      thisSelfStatus = this.state.books.filter((book) => (shelfType === book.shelf))
    } else {
      thisSelfStatus = this.state.books
    }

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ListBooks
            books={thisSelfStatus}
            />
        </div>
       </div>
    )
  }
}

export default Shelf
