import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ShelfChanger from './ShelfChanger';

/**
* @description See the books details on a standalone page
*/
class BookDetails extends Component {
  static propTypes = {
    book: PropTypes.object,
    onUpdateShelf: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: 'none',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  /**
  * @description Perfoms an action when the user changes the shelf value
  * @param {string} event - The event object
  * @returns {void}
  */
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });

    if (this.props.onUpdateShelf) {
      this.props.onUpdateShelf(this.props.book, event.target.value);
    }
  }

  /**
  * @description The render function
  * @returns { object } The UI
  */
  render() {
    const { book } = this.props;
    let imageUrl;

    if (book.hasOwnProperty('imageLinks')) {
      imageUrl = book.imageLinks.thumbnail;
    } else {
      imageUrl = './icons/no-cover.png';
    }

    if (book.shelf === null) {
      book.shelf = 'none';
    }

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{ width: 128,
              height: 188,
              backgroundImage: `url(${imageUrl})`,
            }}
          >
          </div>
          <ShelfChanger
            book={book}
            handleChange={this.handleChange}
          />
        </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
          <div className="book-description">{book.description}</div>
      </div>
    );
  }
}

export default BookDetails;
