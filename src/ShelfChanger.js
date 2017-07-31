import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  static propTypes = {
    books: PropTypes.array,
    book: PropTypes.object.isRequired,
    handleChange: PropTypes.func.isRequired,
  }

  render() {
    const { books, book, handleChange } = this.props;
    let thisSelfStatus;

    if (books && books.length > 0) {
      const tempBook = books.filter(b => (book.id === b.id));
      if (tempBook.length > 0) {
        thisSelfStatus = tempBook[0].shelf;
      } else {
        thisSelfStatus = 'none';
      }
    } else {
      thisSelfStatus = book.shelf;
    }

    return (
      <div className="book-shelf-changer">
        <form>
          <select value={thisSelfStatus} onChange={handleChange}>
            <option value="none" disabled>Move to...</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="none">None</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ShelfChanger;
