import React, { Component } from 'react';

class ShelfChanger extends Component {
  render() {
    const { book, handleChange } = this.props

    return (
      <div className="book-shelf-changer">
        <form>
          <select value={book.shelf} onChange={handleChange}>
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
