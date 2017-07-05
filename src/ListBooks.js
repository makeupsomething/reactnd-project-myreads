import React, { Component } from 'react';

class ListBooks extends Component {
  render() {
    const { books } = this.props

    return (
      <div className='list-contacts'>
        <ol className='contact-list'>
          {books.map((book) => (
            <li key={book.id} className='contact-list-item'>
              <div className='contact-avatar' style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})`}}/>
              <div className='contact-details'>
                <p>{book.title}</p>
                <p>{book.authors}</p>
                <p>{book.shelf}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default ListBooks
