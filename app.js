import Favorites from './components/favorites/index'
import Header from './components/header/index'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { searchBooks, getBook } from './src/book-service'
import Books from './components/books/index'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      query: '',
      lastSearch: '',
      books: [],
      bookDetails: {},
      showBookDetails: false
    }

    this.handleError = this.handleError.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
  }

  handleError(err) {
    console.log(err)
  }

  getBook(id) {
    getBook(id)
      .then(book => this.setState({ bookDetails: book, showBookDetails: true }))
      .catch(this.handleError)
  }

  updateBooks() {
    searchBooks(this.state.query)
      .then(books => (
        this.setState({ lastSearch: this.state.query, books: books.items, showBookDetails: false },
          () => hashHistory.push('/'))
      ))
      .catch(this.handleError)
  }

  handleSearchChange(e) {
    this.setState({ query: e.target.value })
  }

  handleSearchKeyPress(e) {
    if (e.key === 'Enter') {
      this.updateBooks()
    }
  }

  handleSearchClick() {
    this.updateBooks()
  }

  handleDetailsClick(id) {
    this.getBook(id)
  }

  handleFavoriteClick() {

  }

  render() {
    const childrenProps = {
      query: this.state.query,
      lastSearch: this.state.lastSearch,
      books: this.state.books,
      bookDetails: this.state.bookDetails,
      showBookDetails: this.state.showBookDetails,
      onDetailsClick: this.handleDetailsClick,
      onFavoriteClick: this.handleFavoriteClick
    }

    return (
      <div className='container'>
        <Header hideTip={!this.state.query && !this.state.lastSearch}
          handleSearchChange={this.handleSearchChange}
          handleSearchKeyPress={this.handleSearchKeyPress}
          handleSearchClick={this.handleSearchClick} />
        {React.cloneElement(this.props.children, childrenProps)}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Books} />
      <Route path='/favorites' component={Favorites} />
    </Route>
  </Router>),
  document.getElementById('container')
)
