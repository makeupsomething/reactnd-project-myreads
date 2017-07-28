import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BulkShelfChanger extends Component {
  static propTypes = {
    bulkUpdateBookStatus: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.bulkUpdateBookStatus(event.target.value);
  }

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
