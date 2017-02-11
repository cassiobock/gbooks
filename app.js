import * as bookService from './src/book-service'
import Favorites from './components/favorites/index'
import * as favoriteService from './src/favorite-service'
import Header from './components/header/index'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Books from './components/books/index'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      query: '',
      lastSearch: '',
      books: [],
      favoriteBooks: [],
      bookDetails: {},
      showBookDetails: false
    }

    this.handleError = this.handleError.bind(this)
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this)
    this.handleSearchClick = this.handleSearchClick.bind(this)
    this.handleDetailsClick = this.handleDetailsClick.bind(this)
    this.handleFavoriteClick = this.handleFavoriteClick.bind(this)
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this)
    this.handleRemoveFavoriteClick = this.handleRemoveFavoriteClick.bind(this)
  }

  componentDidMount () {
    favoriteService.getAll()
      .then(favoriteBooks => this.setState({ favoriteBooks }))
      .catch(this.handleError)
  }

  handleError (err) {
    console.log(err)
  }

  getBook (id) {
    bookService.getBook(id)
      .then(book => this.setState({ bookDetails: book, showBookDetails: true }, () => {
        if (this.props.location.pathname !== '/') {
          hashHistory.push('/')
        }
      }))
      .catch(this.handleError)
  }

  updateBooks () {
    bookService.searchBooks(this.state.query)
      .then(books => this.setState({ lastSearch: this.state.query, books: books.items, showBookDetails: false }, () => {
        if (this.props.location.pathname !== '/') {
          hashHistory.push('/')
        }
      }))
      .catch(this.handleError)
  }

  handleSearchChange (e) {
    this.setState({ query: e.target.value })
  }

  handleSearchKeyPress (e) {
    if (e.key === 'Enter') {
      this.updateBooks()
    }
  }

  handleSearchClick () {
    this.updateBooks()
  }

  handleDetailsClick (id) {
    this.getBook(id)
  }

  handleBackButtonClick () {
    this.setState({ bookDetails: {}, showBookDetails: false })
  }

  handleFavoriteClick (id) {
    bookService.getBook(id)
      .then(book => favoriteService.save(book))
      .then(() => favoriteService.getAll())
      .then(favoriteBooks => this.setState({ favoriteBooks }))
      .catch(this.handleError)
  }

  handleRemoveFavoriteClick (id) {
    favoriteService.remove(id)
      .then(() => favoriteService.getAll())
      .then(favoriteBooks => this.setState({ favoriteBooks }))
      .catch(this.handleError)
  }

  render () {
    const childrenProps = {
      query: this.state.query,
      lastSearch: this.state.lastSearch,
      books: this.state.books,
      favoriteBooks: this.state.favoriteBooks,
      bookDetails: this.state.bookDetails,
      showBookDetails: this.state.showBookDetails,
      onDetailsClick: this.handleDetailsClick,
      onBackButtonClick: this.handleBackButtonClick,
      onFavoriteClick: this.handleFavoriteClick,
      onRemoveFavoriteClick: this.handleRemoveFavoriteClick
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
