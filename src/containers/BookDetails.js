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
      <div className="row">
        <div className="col-md-4">
          <img className="img-fluid mb-2" src={book.cover} alt={book.title} />
        </div>
        <div className="col-md-8">
          <h4 className="card-title">{book.title}</h4>
          <p>by <a href="#">{book.author}</a></p>
          <p>{book.description}</p>
          <a href="#" className="btn btn-primary">
            Add to cart <small>(${book.price})</small>
          </a>
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
