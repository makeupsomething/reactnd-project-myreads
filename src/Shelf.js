import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class Shelf extends Component {

  render() {
    const { shelfName, shelfType, books, updateBookStatus, setBookUrl, addBookToMove } = this.props
    let thisSelfStatus
    if (shelfName && books.length > 0) {
      thisSelfStatus = books.filter((book) => (shelfType === book.shelf))
    } else {
      thisSelfStatus = books
    }

    return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{shelfName}</h2>
          <div className="bookshelf-books">
            <ol className='books-grid'>
              {thisSelfStatus.map((book) => (
                <li key={book.id} className='contact-list-item'>
                  <Book
                  book={book}
                  onUpdateShelf={(book, shelfType) => {
                    updateBookStatus(book, shelfType)
                  }}
                  setBookUrl={(newUrl, book) => {setBookUrl(newUrl, book)
                  }}
                  addBookToMove={(bookToMove) => {addBookToMove(bookToMove)
                  }}
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
