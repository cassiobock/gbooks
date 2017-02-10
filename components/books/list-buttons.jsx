import React, { PropTypes } from 'react'

const ListButtons = ({ id, onDetailsClick, onFavoriteClick }) => {
  return (
    <div className='row'>
      <div className='column'>
        <button className='button button-outline float-right' onClick={() => onDetailsClick(id)}>Details</button>
      </div>
      <div className='column'>
        <button className='float-left' onClick={() => onDetailsClick(id)}>
          <span className='fa fa-star-o' />
          <span> Favorite</span>
        </button>
      </div>
    </div>
  )
}

ListButtons.propTypes = {
  id: PropTypes.string.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
}

export default ListButtons
