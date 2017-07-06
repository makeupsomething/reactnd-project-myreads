import React, { Component } from 'react';
import ListBooks from './ListBooks'
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
    const { shelfName } = this.props
    
    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ListBooks
            books={this.state.books}
            />
        </div>
       </div>
    )
  }
}

export default Shelf
