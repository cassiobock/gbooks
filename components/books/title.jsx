import React, { PropTypes } from 'react'

const Title = ({ lastSearch, onClick }) => {
  return (
    <div className='search-display'>
      <div className={`row ${lastSearch ? '' : 'hidden'}`}>
        <div className='column column-80'>
          <h4>Searching for: <strong>{lastSearch}</strong></h4>
        </div>
      </div>
    </div>
  )
}

Title.propTypes = {
  lastSearch: PropTypes.string.isRequired
}

export default Title
