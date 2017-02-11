import React, { PropTypes } from 'react'

const DetailsButtons = ({ id, onBackClick, onFavoriteClick }) => {
  return (
    <div className='row'>
      <div className='column text-center'>
        <button className='button button-outline btn-space' onClick={onBackClick}>Back</button>
        <button onClick={() => onFavoriteClick(id)}>
          <span className='fa fa-star-o' />
          <span> Favorite</span>
        </button>
      </div>
    </div>
  )
}

DetailsButtons.propTypes = {
  id: PropTypes.string,
  onBackClick: PropTypes.func,
  onFavoriteClick: PropTypes.func
}

export default DetailsButtons
