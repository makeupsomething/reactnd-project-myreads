import React, { Component } from 'react';
import PropTypes from 'prop-types';

/**
* @description Moves a lost of books to a different shelf
*/
class BulkShelfChanger extends Component {
  static propTypes = {
    bulkUpdateBookStatus: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /**
  * @description Perfoms an action when the user selects a shelf value
  * @param {string} event - The event object
  * @returns {void}
  */
  handleChange(event) {
    this.props.bulkUpdateBookStatus(event.target.value);
  }

  /**
  * @description The render function
  * @returns {object} The UI
  */
  render() {
    return (
      <div className="book-shelf-changer-bulk">
        <form>
          <select value="none" onChange={this.handleChange}>
            <option value="none" disabled>Move to...</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="none">None</option>
          </select>
        </form>
      </div>
    );
  }
}

export default BulkShelfChanger;
