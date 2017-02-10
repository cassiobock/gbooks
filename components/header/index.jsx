import { Link } from 'react-router'
import React, { PropTypes } from 'react'
import Search from './search'

const Header = ({ hideTip, handleSearchChange, handleSearchKeyPress, handleSearchClick }) => (
  <header className='header'>
    <div className='row center-y-middle'>
      <div className='column column-20 text-center'>
        <Link to='/'>
          <h1>gBooks</h1>
        </Link>
      </div>
      <div className='column'>
        <Search hideTip={hideTip} handleChange={handleSearchChange} handleKeyPress={handleSearchKeyPress} handleClick={handleSearchClick} />
      </div>
      <div className='column column-10 text-center'>
        <Link to='/favorites'>
          <h4>Favorites</h4>
        </Link>
      </div>
    </div>
  </header >
)

Header.propTypes = {
  hideTip: PropTypes.bool.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  handleSearchKeyPress: PropTypes.func.isRequired,
  handleSearchClick: PropTypes.func.isRequired
}

export default Header
