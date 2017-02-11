import Cover from '../books/cover'
import React, { PropTypes } from 'react'

const Book = ({ id, images, title, onDetailsClick, onRemoveFavoriteClick }) => {
  return (
    <div className='row'>
      <div className='column'>
        <Cover images={images} alt={title} isDetails={false} />
      </div>
      <div className='column'>
        <h4>{title}</h4>
      </div>
      <div className='column'>
        <div className='favorite-buttons'>
          <button className='button button-outline btn-space' onClick={() => onDetailsClick(id)}>Detalhes</button>
          <button onClick={() => onRemoveFavoriteClick(id)}>
            <span className='fa fa-trash' />
            <span> Remove</span>
          </button>
        </div>
      </div>
    </div>
  )
}

Book.propTypes = {
  id: PropTypes.string,
  images: PropTypes.object,
  title: PropTypes.string,
  onDetailsClick: PropTypes.func,
  onRemoveFavoriteClick: PropTypes.func
}

export default Book
