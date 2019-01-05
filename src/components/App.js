import React, { Component } from 'react';
import BookList from '../containers/BookList';
import BookDetail from '../containers/BookDetails';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My books list for 2019</h1>
        <hr />
        <div>
          <BookList />
        </div>
        <div>
          <BookDetail />
        </div>
      </div>
    );
  }
}

export default App;
