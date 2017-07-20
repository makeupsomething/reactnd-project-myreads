import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import SearchBooks from './SearchBooks'
import OpenSearch from './OpenSearch'
import ListShelves from './ListShelves'
import ListResults from './ListResults'
import BookDetails from './BookDetails'
import './App.css'
class BooksApp extends React.Component {

  state = {
    books: [],
    foundBooks: [],
    bookUrl: '/null',
    book: ''
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

   setBookUrl(newUrl, book) {
     newUrl = '/' + newUrl
     console.log('setting url to ' + newUrl)
     this.setState({bookUrl: newUrl})
     this.setState({book: book})
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
            setBookUrl={(newUrl, book) => {this.setBookUrl(newUrl, book)
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
        <Route path={this.state.bookUrl} render={() => (
          <BookDetails
          book={this.state.book}/>
        )}/>
      </div>
      )
    }
  }

export default BooksApp
