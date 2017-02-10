import Authors from './authors'
import BookTitle from './book-title'
import Cover from './cover'
import Language from './language'
import ListButtons from './list-buttons'
import React, { PropTypes } from 'react'

const Book = ({ query, id, volumeInfo, onDetailsClick, onFavoriteClick }) => {
  const { imageLinks, title, authors, language } = volumeInfo

  return (
    <div className='column'>
      <Cover images={imageLinks} alt={title} isDetails={false} />
      <ListButtons id={id} onDetailsClick={onDetailsClick} onFavoriteClick={onFavoriteClick} />
      <BookTitle query={query} title={title} />
      <div className='book-keys'>
        <Language language={language} />
      </div>
      <Authors authors={authors} />
    </div>
  )
}

Book.propTypes = {
  query: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  volumeInfo: PropTypes.shape({
    imageLinks: PropTypes.object,
    title: PropTypes.string.isRequired,
    authors: PropTypes.array,
    language: PropTypes.string.isRequired
  }).isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
}

export default Book
