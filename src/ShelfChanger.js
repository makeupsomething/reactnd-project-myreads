import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'none'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this, Object);
  }

  handleChange(event, book) {
    this.setState({value: event.target.value});
    alert('Your favorite flavor is: ' + this.state.value + book.name);
    event.preventDefault();
  }

  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    const { book } = this.props

    return (
      <div className="book-shelf-changer">
        <form onSubmit={this.handleSubmit}>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
        </form>
      </div>
    )
  }
}

export default ShelfChanger
