import Authors from './authors'
import ListTitle from './list-title'
import Cover from './cover'
import Language from './language'
import ListButtons from './list-buttons'
import React, { PropTypes } from 'react'

const Book = ({ query, id, volumeInfo, onDetailsClick, onFavoriteClick }) => {
  const { imageLinks, title, authors, language } = volumeInfo

  return (
    <div className='column'>
      <div className='row'>
        <div className='column center-y-middle list-book-title'>
          <ListTitle query={query} title={title} />
        </div>
      </div>
      <div className='row'>
        <div className='column'>
          <Cover images={imageLinks} alt={title} isDetails={false} />
        </div>
      </div>
      <ListButtons id={id} onDetailsClick={onDetailsClick} onFavoriteClick={onFavoriteClick} />
      <div className='row'>
        <div className='column'>
          <Authors id={id} authors={authors} />
        </div>
        <div className='column'>
          <Language language={language} />
        </div>
      </div>
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
