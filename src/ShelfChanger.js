import React, { Component } from 'react';

class ShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'none'
    }

    this.handleChange = this.handleChange.bind(this);
  }

 handleChange(event) {
  this.setState({value: event.target.value});
  if (this.props.onUpdateShelf)
      this.props.onUpdateShelf(event.target.value)
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
