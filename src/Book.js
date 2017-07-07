import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const { book } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128,
            height: 188,
            backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}>
          </div>
          <ShelfChanger
          bookName={book}/>
        </div>
          <div className="title">{book.title}</div>
          <div className="authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
