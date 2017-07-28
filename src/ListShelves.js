import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

class ListShelves extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateBookStatus: PropTypes.func.isRequired,
    setBookUrl: PropTypes.func.isRequired,
    addBookToMove: PropTypes.func.isRequired,
  }

  render() {

    const { books, updateBookStatus, setBookUrl, addBookToMove } = this.props;

    const shelfTypes = ['Currently Reading', 'Want To Read', 'Read'];

    return (
      <div className="list-books-content">
        <div>
          {shelfTypes.map(item => (<Shelf
            key={item}
            shelfName={item}
            books={books}
            updateBookStatus={(book, shelfType) => { updateBookStatus(book, shelfType); }}
            setBookUrl={(newUrl, book) => { setBookUrl(newUrl, book); }}
            addBookToMove={(bookToMove, value) => { addBookToMove(bookToMove, value); }}
          />))}
        </div>
      </div>
    );
  }
}

export default ListShelves;
