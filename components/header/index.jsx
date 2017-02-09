import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import Search from './search'
import Title from './title'

const Header = ({ handleSearch }) => (
  <header>
    <Title />
    <Search search={handleSearch} />
    <Link to='/favorites'>Favorites</Link>
  </header>
)

Header.PropTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Header
