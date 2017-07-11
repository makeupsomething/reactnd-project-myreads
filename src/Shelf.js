import React, { Component } from 'react';
import Book from './Book'
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

  updateBookStatus(book, shelfName) {
     console.log('update book status..' + book.title + '...' + shelfName)
     //BooksAPI.update(book, shelfName)
   }

  render() {
    const { shelfName, shelfType } = this.props
    let thisSelfStatus
    console.log(this.state.books.length);
    if (shelfName) {
      thisSelfStatus = this.state.books.filter((book) => (shelfType === book.shelf))
    } else {
      thisSelfStatus = this.state.books
    }

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className='book-list'>
              {thisSelfStatus.map((book) => (
                <li key={book.id} className='contact-list-item'>
                  <Book
                  book={book}
                  onUpdateShelf={this.updateBookStatus(book, shelfName)}
                  />
                </li>
              ))}
            </ol>
        </div>
       </div>
    )
  }
}

export default Shelf
