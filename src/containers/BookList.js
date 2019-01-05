import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import BookListItem from './BookListItem';
import '../styles/main.css'

class BookList extends Component {
  render() {
    return (

      <div  className="">
        <ul className="list-numbered">
          {this.props.books.map(book => <BookListItem key={book.id} book={book} />)}
        </ul>
      </div>
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
