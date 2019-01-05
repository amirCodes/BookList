import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class BookDetail extends Component {
  render() {
    const {book} = this.props;

    if (!book) {
      return (
        <div className="alert alert-info" role="alert">
          Select a book to get started.
        </div>
      );
    }

    return (
      <div className="main-container">
        <div className="col-md-4">
          <img className="" src={book.cover} alt={book.title} height="400px" width="300px" />
        </div>
        <div className="col-md-8">
          <h4 className="book-title">{book.title}</h4>
          <p className="book-author">Author: <i>{book.author}</i></p>
          <p>{book.description}</p>
        </div>
      </div>
    );
  }
}

BookDetail.propTypes = {
  book: PropTypes.object
};

function mapStateToProps(state) {
  // Whatever is returned will show up
  // as props inside of BookDetail.
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
