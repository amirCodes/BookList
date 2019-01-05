import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BookListItem from './BookListItem';

class BookList extends Component {
  render() {
    return (
      <ul className="list-group">
        {this.props.books.map(book => <BookListItem key={book.id} book={book} />)}
      </ul>
    );
  }
}

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object)
};

function mapStateToProps(state) {
  // Whatever is returned will show up
  // as props inside of BookList.
  return {
    books: state.books
  };
}

// Promote BookList from a component to a container - it needs to know
// about this new dispathc method, selectBook.
// Make it available as a prop.
export default connect(mapStateToProps)(BookList);
