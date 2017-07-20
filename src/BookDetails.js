import React, { Component } from 'react';
import ShelfChanger from './ShelfChanger'
import { Route } from 'react-router-dom'

class BookDetails extends Component {
  constructor(props) {
      super(props);
      this.state = {
          value: 'none'
      }

      this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
      this.setState({
          value: event.target.value
      });
      if (this.props.onUpdateShelf) {
          this.props.onUpdateShelf(this.props.book, event.target.value)
      }
  }

  render() {
    const { book } = this.props
    var imageUrl
    if(book.hasOwnProperty("imageLinks")){
      imageUrl = book.imageLinks.thumbnail
    } else {
      imageUrl = 'icons/no-cover.png'
    }

    if(book.shelf === null) {
      book.shelf = 'none'
    }

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128,
            height: 188,
            backgroundImage: `url(${imageUrl})`
            }}>
          </div>
            <ShelfChanger
            book={book}
            handleChange={this.handleChange}
            />
        </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
      </div>
    )
  }
}

export default BookDetails
