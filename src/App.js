import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import OpenSearch from './OpenSearch'
import ListShelves from './ListShelves'
import ListResults from './ListResults'
import './App.css'
class BooksApp extends React.Component {

  state = {
    books: [],
    foundBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
    this.setState({foundBooks: [] })
  }

  updateBookStatus(book, newShelf) {
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
            <ListShelves
            books={this.state.books}
            updateBookStatus={(book, shelfType) => {
              this.updateBookStatus(book, shelfType)
            }}
            />
          </div>
        )}/>
        <OpenSearch/>
        <Route path='/search' render={() => (
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
              /> : <p>No results found!</p>
              }
          </div>
        )}/>
      </div>
      )
    }
  }

export default BooksApp
