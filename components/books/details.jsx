import Authors from './authors'
import Cover from './cover'
import DetailsButtons from './details-buttons'
import Description from './description'
import Language from './language'
import React, { PropTypes } from 'react'

const Details = ({ book, onBackClick, onFavoriteClick }) => {
  const id = book.id
  const { authors, description, imageLinks, language, pageCount, publishedDate, publisher, title } = book.volumeInfo

  return (
    <div className='book-details'>
      <div className='row'>
        <div className='column'>
          <div className='row'>
            <div className='column'>
              <Cover images={imageLinks} alt={title} isDetails />
            </div>
          </div>
          <DetailsButtons id={id} onBackClick={onBackClick} onFavoriteClick={onFavoriteClick} />
        </div>
        <div className='column'>
          <div className='row'>
            <h2 className='details-book-title'>{title}</h2>
          </div>
          <div className='row'>
            <div className='column'>
              <Authors authors={authors} />
            </div>
            <div className='column'>
              <label>Publisher: </label>
              <span>{publisher}</span>
            </div>
            <div className='column'>
              <label>Published date: </label>
              <span>{publishedDate}</span>
            </div>
            <div className='column'>
              <label>Pages: </label>
              <span>{pageCount}</span>
            </div>
            <div className='column'>
              <Language language={language} />
            </div>
          </div>
          <Description description={description} />
        </div>
      </div>
    </div >
  )
}

Details.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    volumeInfo: PropTypes.shape({
      authors: PropTypes.array,
      description: PropTypes.string,
      imageLinks: PropTypes.object,
      language: PropTypes.string,
      pageCount: PropTypes.number,
      publishedDate: PropTypes.string,
      publisher: PropTypes.string,
      title: PropTypes.string
    })
  }).isRequired,
  onBackClick: PropTypes.func,
  onFavoriteClick: PropTypes.func
}

export default Details
