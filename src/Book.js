import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'

class Book extends Component {
  render() {
    const { title, authors, coverImg } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128,
            height: 188,
            backgroundImage: `url(${coverImg})`
            }}>
          </div>
          <ShelfChanger/>
        </div>
          <div className="title">{title}</div>
          <div className="authors">{authors}</div>
      </div>
    )
  }
}

export default Book
