import React, { Component } from 'react';
import Book from './Book'

class ListBooks extends Component {
  render() {
    const { books } = this.props

    return (
      <div className='list-contacts'>
        <ol className='contact-list'>
          {books.map((book) => (
            <li key={book.id} className='contact-list-item'>
              <Book
              title={book.title}
              authors={book.authors}
              coverImg={book.imageLinks.smallThumbnail}
              />
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListBooks
