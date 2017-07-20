import React, { Component } from 'react';
import Shelf from './Shelf'

class ListShelves extends Component {

  render() {
    const { books, updateBookStatus, setBookUrl } = this.props

    return (
        <div className="list-books-content">
          <div>
            <Shelf
            shelfName='Currently Reading'
            shelfType='currentlyReading'
            books={books}
            updateBookStatus={(book, shelfType) => {
              updateBookStatus(book, shelfType)
            }}
            setBookUrl={(newUrl, book) => {setBookUrl(newUrl, book)
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
            />
        </div>
      </div>
    )
  }
}

export default ListShelves
