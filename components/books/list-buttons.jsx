import React, { PropTypes } from 'react'

const ListButtons = ({ id, onDetailsClick, onFavoriteClick }) => {
  return (
    <div>
      <div className='row'>
        <div className='column column-33'>
          <button className='button button-outline' onClick={() => onDetailsClick(id)}>Details</button>
        </div>
        <div className='column column-50'>
          <button onClick={() => onDetailsClick(id)}>
            <span className='fa fa-star-o' />
            <span> Favorite</span>
          </button>
        </div>
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
