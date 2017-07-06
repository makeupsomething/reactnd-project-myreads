import React from 'react'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'
import OpenSearch from './OpenSearch'
import ListBooks from './ListBooks'
import Shelf from './Shelf'
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
                <Shelf
                shelfName='Reading'
                />
                <Shelf
                shelfName='Want To Read'
                />
                <Shelf
                shelfName='Read'
                />
              </div>
              <OpenSearch/>
              <Route path='/add' render={() => (
                <SearchBooks/>
              )}/>
            </div>
        </div>
      </div>
      )
    }
  }

export default BooksApp
