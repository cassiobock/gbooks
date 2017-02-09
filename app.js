import Favorites from './components/favorites/index'
import Header from './components/header/index'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { searchBooks } from './src/book-service'
import Search from './components/search/index'

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      books: []
    }

    this.updateBooks = this.updateBooks.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  updateBooks (query) {
    searchBooks(query)
      .then(books => this.setState({ books: books.items }))
      .catch(this.handleError)
  }

  handleError (err) {
    console.log(err)
  }

  render () {
    return (
      <div>
        <Header handleSearch={this.updateBooks} />
        {React.cloneElement(this.props.children, { books: this.state.books })}
      </div>
    )
  }
}

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Search} />
      <Route path='/favorites' component={Favorites} />
    </Route>
  </Router>),
  document.getElementById('container')
)
