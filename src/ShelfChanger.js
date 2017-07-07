import React, { Component } from 'react';
import { Refresh } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: Object,
      value: 'none'
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.setState({ book: this.props.bookName })
 }

 handleChange(event) {
  this.setState({value: event.target.value});
  //event.preventDefault();
  BooksAPI.update(this.state.book, event.target.value)
}


  render() {
    return (
      <div className="book-shelf-changer">
        <form>
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="none" disabled>Move to...</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="none">None</option>
            </select>
        </form>
      </div>
    )
  }
}

export default ShelfChanger
