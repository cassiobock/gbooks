import React, { PropTypes } from 'react'

const Search = ({ hideTip, handleChange, handleKeyPress, handleClick }) => {
  return (
    <div className='header-search'>
      <input type='text'
        placeholder='search'
        onChange={handleChange}
        onKeyPress={handleKeyPress} />
      <small className={hideTip ? 'hidden' : ''}>
        press enter or <a href='#' onClick={handleClick}>click here</a> to search
      </small>
    </div>
  )
}

Search.propTypes = {
  hideTip: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleKeyPress: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Search
