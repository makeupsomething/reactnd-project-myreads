import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  state = {
    book: Object
  }

  componentDidMount() {
    this.setState({ book: this.props.book })
    console.log('setting book' + this.props.book.title)
    console.log(this.state.book.title);

  }

  updateBookStatus(shelfName) {
    console.log('update book status..' + shelfName + '..book name..' + this.state.book.title)
    BooksAPI.update(this.state.book, shelfName)
  }

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
          <Route path='/' render={({ history }) => (
            <ShelfChanger
              onUpdateShelf={(book) => {
                  this.updateBookStatus(book)
                  history.push('/')
                }}
              />
            )}/>
        </div>
          <div className="title">{book.title}</div>
          <div className="authors">{book.authors}</div>
      </div>
    )
  }
}

export default Book
