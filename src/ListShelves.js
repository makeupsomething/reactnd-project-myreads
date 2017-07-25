import React, { Component } from 'react';
import Shelf from './Shelf'

class ListShelves extends Component {

  render() {
    const { books, updateBookStatus, setBookUrl, addBookToMove } = this.props

    var shelfTypes = {};
    shelfTypes["Currently Reading"] = "Currently Reading";
    shelfTypes["Want To Read"] = "wantToRead";
    shelfTypes["Read"] = "read";

    return (
        <div className="list-books-content">
          <div>
            <Shelf
            shelfName='Currently Reading'
            shelfType='Currently Reading'
            books={books}
            updateBookStatus={(book, shelfType) => {
              updateBookStatus(book, shelfType)
            }}
            setBookUrl={(newUrl, book) => {setBookUrl(newUrl, book)
            }}
            addBookToMove={(bookToMove, value) => {addBookToMove(bookToMove, value)
            }}
            />
            <Shelf
            shelfName='Want To Read'
            shelfType='wantToRead'
            books={books}
            updateBookStatus={(book, shelfType) => {
              updateBookStatus(book, shelfType)
            }}
            setBookUrl={(newUrl, book) => {setBookUrl(newUrl, book)
            }}
            addBookToMove={(bookToMove, value) => {addBookToMove(bookToMove, value)
            }}
            />
            <Shelf
            shelfName='Read'
            shelfType='read'
            books={books}
            updateBookStatus={(book, shelfType) => {
              updateBookStatus(book, shelfType)
            }}
            setBookUrl={(newUrl, book) => {setBookUrl(newUrl, book)
            }}
            addBookToMove={(bookToMove, value) => {addBookToMove(bookToMove, value)
            }}
            />
        </div>
      </div>
    )
  }
}

export default ListShelves
