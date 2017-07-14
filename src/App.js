import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import OpenSearch from './OpenSearch'
import Shelf from './Shelf'
import ListResults from './ListResults'
import './App.css'
import * as BooksAPI from './BooksAPI'
window.BooksAPI = BooksAPI

class BooksApp extends React.Component {

  state = {
    books: [],
    foundBooks: []
  }

  componentDidMount() {
    console.log('mounting' )
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    console.log('got books' + this.state.books.length)
  }

  updateBookStatus(book, newShelf) {
     console.log('update book status..' + book.title + '...' + newShelf)
     BooksAPI.update(book, newShelf)
     BooksAPI.getAll().then((books) => {
       this.setState({ books })
     })
   }

   searchForBooks(query) {
     if(query.length > 0) {
       BooksAPI.search(query, 10).then((foundBooks) => {
         this.setState({ foundBooks })
       })
       console.log(this.state.foundBooks);
     }
   }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
              <div className="list-books-content">
                <div>
                  <Shelf
                  shelfName='Currently Reading'
                  shelfType='currentlyReading'
                  books={this.state.books}
                  updateBookStatus={(book, shelfType) => {
                    this.updateBookStatus(book, shelfType)
                  }}
                  />
                  <Shelf
                  shelfName='Want To Read'
                  shelfType='wantToRead'
                  books={this.state.books}
                  updateBookStatus={(book, shelfType) => {
                    this.updateBookStatus(book, shelfType)
                  }}
                  />
                  <Shelf
                  shelfName='Read'
                  shelfType='read'
                  books={this.state.books}
                  updateBookStatus={(book, shelfType) => {
                    this.updateBookStatus(book, shelfType)
                  }}
                  />
              </div>
            </div>
          </div>
        )}/>
        <OpenSearch/>
        <Route path='/add' render={() => (
          <div>
            <SearchBooks
            searchForBook={(query) => {
              this.searchForBooks(query)
            }}
            />
            {this.state.foundBooks.length ?
            <ListResults
            searchResults={this.state.foundBooks}
            updateBookStatus={(book, shelfType) => {
              this.updateBookStatus(book, shelfType)
            }}
            />
            : <p>No results found!</p>
            }
          </div>
        )}/>
      </div>
      )
    }
  }

export default BooksApp
