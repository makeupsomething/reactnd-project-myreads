import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import OpenSearch from './OpenSearch'
import ListBooks from './ListBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
  BooksAPI.getAll().then((books) => {
    this.setState({ books })
  })
}

  render() {
    return (
      <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                    books={this.state.books}
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ListBooks
                    books={this.state.books}
                    />
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                  <ListBooks
                    books={this.state.books}
                    />
                    </div>
                  </div>
                </div>
              </div>
              <OpenSearch/>
              <Route path='/add' render={() => (
                <SearchBooks/>
              )}/>
            </div>
        </div>
      )
    }
  }

export default BooksApp
