import React, { Component, PropTypes } from 'react'

class Search extends Component {
  constructor (props) {
    super(props)

    this.state = {
      query: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange (e) {
    this.setState({ query: e.target.value })
  }

  handleClick (e) {
    this.props.search(this.state.query)
  }

  handleKeyPress (e) {
    if (e.key === 'Enter') {
      this.props.search(this.state.query)
    }
  }

  render () {
    return (
      <div>
        <input type='text'
          placeholder='search'
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress} />
        <small style={{ display: this.state.query ? 'block' : 'none' }}>
          press <a href='#' onClick={this.handleClick}>enter</a> or click here
        </small>
      </div>)
  }
}

Search.PropTypes = {
  search: PropTypes.func.isRequired
}

export default Search
