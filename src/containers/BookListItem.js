import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {truncate} from 'lodash';
import {selectBook} from '../actions/bookActions';
import '../styles/main.css'

class BookListItem extends Component {
  render() {
    const {
      book,
      activeBook,
      selectBook: selectBookProp
    } = this.props;
    const truncatedDescription = truncate(book.description, {length: 45});

    return (

      <ol className="list-numbered book-list">
        <li
          className={`list-group-item media ${activeBook && activeBook.id === book.id ? 'bg-inverse text-white' : ''}`}
          onClick={() => selectBookProp(book)}
          style={{cursor: 'pointer'}}>
          <img className="d-flex mr-3" width="64" src={book.cover} alt={book.title} />

          <div className="media-body" style={{lineHeight: 1.2}}>
            <h6 className="mt-0 mb-1">{book.title}</h6>
            <span className="small" title={book.description}>
            {truncatedDescription}
          </span>
          </div>

        </li>
      </ol>
    );
  }

  componentWillMount() {
    if (this.props.book.id === 1) {
      this.props.selectBook(this.props.book);
    }
  }
}

function mapStateToProps(state) {
  // Whatever is returned will show up
  // as props inside of BookList.
  return {
    activeBook: state.activeBook
  };
}

// Anything returned from this function will end up
// as props on the BookList container.
function mapDispatchToProps(dispath) {
  // Whenever selectBook is called, the result
  // should be passed to all our reducers.
  return bindActionCreators({selectBook}, dispath);
}

BookListItem.propTypes = {
  book: PropTypes.object,
  activeBook: PropTypes.object,
  selectBook: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(BookListItem);
