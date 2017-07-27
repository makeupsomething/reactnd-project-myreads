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

class BooksApp extends React.Component {
  state = {
    books: [],
    foundBooks: [],
    bookUrl: '/null',
    book: '',
    booksToMove: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
    this.setState({ foundBooks: [] });
  }

  setBookUrl(newUrl, book) {
    newUrl = '/' + newUrl;
    this.setState({ bookUrl: newUrl });
    this.setState({ book: book });
  }

  updateBookStatus(book, newShelf) {
    BooksAPI.update(book, newShelf);
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
  }

  searchForBooks(query) {
    if (query.length > 0) {
      BooksAPI.search(query, 10).then((foundBooks) => {
        this.setState({ foundBooks });
      });
    }
  }

  addBookToMove(bookToMove, value) {
    var newArray = this.state.booksToMove.slice();
    if (value === true) {
      newArray.push(bookToMove);
    } else {
      newArray = newArray.filter(item => item !== bookToMove);
    }
    this.setState({ booksToMove: newArray });
  }

  bulkUpdateBookStatus(newShelf) {
    for (var i = 0; i < this.state.booksToMove.length; i++) {
      var tempBook = this.state.booksToMove[i];
      if (tempBook.shelf !== newShelf) {
        BooksAPI.update(tempBook, newShelf);
      }
    }
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    });
    this.setState({ booksToMove: [] });
  }

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
                setBookUrl={(newUrl, book) => {
                  this.setBookUrl(newUrl, book);
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
              />
              {this.state.foundBooks.length ?
                <ListResults
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
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
