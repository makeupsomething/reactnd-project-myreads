import React, { Component } from 'react';
import Shelf from './Shelf';

class ListShelves extends Component {
  render() {
    const { books, updateBookStatus, setBookUrl, addBookToMove } = this.props;

    var shelfTypes = ['Currently Reading', 'Want To Read', 'Read'];

    return (
      <div className="list-books-content">
        <div>
          {shelfTypes.map(item => (<Shelf
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
