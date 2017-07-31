import React from 'react';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import SearchBooks from './SearchBooks';
import OpenSearch from './OpenSearch';
import BulkShelfChanger from './BulkShelfChanger';
import ListShelves from './ListShelves';
import ListResults from './ListResults';
import BookDetails from './BookDetails';
import './App.css';

/**
* @description The main app
*/
class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: [],
    bookUrl: '/null',
    book: '',
    booksToMove: [],
  }

  /**
  * @description Perfoms an action when the Component mounts
  * @returns {void}
  */
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  /**
  * @description Sets the URL to view the individual book details
  * @param {string} book - The book object
  * @returns {void}
  */
  setBookUrl(book) {
    const newUrl = `/${book.id}`;
    this.setState({ bookUrl: newUrl });
    this.setState({ book: book });
  }

  /**
  * @description Clears the list of found books
  * @returns {void}
  */
  clearFoundBooks() {
    this.setState({ foundBooks: [] });
  }

  /**
  * @description Clears the list of found books
  * @param {string} book - The book object
  * @param {string} newShelf - The name of the shelf the book will move to
  * @returns {void}
  */
  updateBookStatus(book, newShelf) {
    BooksAPI.update(book, newShelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  /**
  * @description Clears the list of found books
  * @param {string} query - What we are searching for
  * @returns {void}
  */
  searchForBooks(query) {
    if (query.length > 0) {
      BooksAPI.search(query, 10).then((foundBooks) => {
        this.setState({ foundBooks });
      });
    }
  }

  /**
  * @description Adds/Removes a book from a list of books we want to bulk move
  * @param {string} bookToMove - The book to add/remove to the list
  * @param {string} value - The book is already in the list or notw
  * @returns {void}
  */
  addBookToMove(bookToMove, value) {
    let newArray = this.state.booksToMove.slice();
    if (value === true) {
      newArray.push(bookToMove);
    } else {
      newArray = newArray.filter(item => item !== bookToMove);
    }
    this.setState({ booksToMove: newArray });
  }

  /**
  * @description Bulk moves a list of books to another shelf
  * @param {string} newShelf - The name of the shelf the books will move to
  * @returns {void}
  */
  bulkUpdateBookStatus(newShelf) {
    let i;
    for (i = 0; i < this.state.booksToMove.length; i += 1) {
      const tempBook = this.state.booksToMove[i];
      if (tempBook.shelf !== newShelf) {
        BooksAPI.update(tempBook, newShelf);
      }
    }
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
    this.setState({ booksToMove: [] });
  }

  /**
  * @description The render function
  * @returns { object } The UI
  */
  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <h1>MyReads</h1>
              <ListShelves
                books={this.state.books}
                updateBookStatus={(book, shelfType) => {
                  this.updateBookStatus(book, shelfType);
                }}
                setBookUrl={(book) => {
                  this.setBookUrl(book);
                }}
                addBookToMove={(bookToMove, value) => {
                  this.addBookToMove(bookToMove, value);
                }}
              />
            </div>
          )}
        />
        <OpenSearch />
        <BulkShelfChanger
          bulkUpdateBookStatus={(newShelf) => {
            this.bulkUpdateBookStatus(newShelf);
          }}
        />
        <Route
          path="/search"
          render={() => (
            <div>
              <SearchBooks
                searchForBook={(query) => {
                  this.searchForBooks(query);
                }}
                clearList={() => {
                  this.clearFoundBooks();
                }}
              />
              {this.state.foundBooks.length ?
                <ListResults
                  books={this.state.books}
                  searchResults={this.state.foundBooks}
                  updateBookStatus={(book, shelfType) => {
                    this.updateBookStatus(book, shelfType);
                  }}
                  setBookUrl={(newUrl, book) => {
                    this.setBookUrl(newUrl, book);
                  }}
                  addBookToMove={(bookToMove, value) => {
                    this.addBookToMove(bookToMove, value);
                  }}
                /> : <p>No results found!</p>
              }
            </div>
          )}
        />
        <Route
          path={this.state.bookUrl}
          render={() => (
            <BookDetails
              book={this.state.book}
              onUpdateShelf={(book, shelfType) => {
                this.updateBookStatus(book, shelfType);
              }}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
