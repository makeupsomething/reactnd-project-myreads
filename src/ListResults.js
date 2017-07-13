import React, { Component } from 'react';
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class ListResults extends Component {

  render() {
    const { searchResults } = this.props
    let thisSelfStatus
    if (searchResults.length > 0) {
      console.log('filter');
      thisSelfStatus = searchResults.filter(function(word){
          console.log(word);
          return word.previewLink.length > 6;
      })
      console.log('update results' + thisSelfStatus.length + "..." + thisSelfStatus)
    }
    else {
      thisSelfStatus = searchResults
    }
    return (
        <div className="list-results">
          console.log("print");
          <h2 className="results-title">Search Results</h2>
          <div className="found-books">
            <ol className='book-list'>
              {thisSelfStatus.map((book) => (
                <li key={book.id} className='book-item'>
                  <Book
                  book={book}
                  />
                </li>
              ))}
            </ol>
        </div>
       </div>
    )
  }
}

export default ListResults
