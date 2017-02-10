import Authors from './authors'
import Cover from './cover'
import Language from './language'
import React from 'react'

const Details = ({ book, onBackButtonClick, onFavoriteClick }) => {
  const { authors, description, imageLinks, language, pageCount, publishedDate, publisher, title } = book.volumeInfo

  const formatedDescription = { __html: description }

  return (
    <div className='book-details'>
      <div className='row'>
        <div className='column'>
          <div className='row'>
            <Cover images={imageLinks} alt={title} isDetails />
          </div>
          <div className='row'>
            <div className='column'>
              <button className='button button-outline' onClick={onBackButtonClick}>Back</button>
            </div>
            <div className='column'>
              <button onClick={onFavoriteClick}>
                <span className='fa fa-star-o' />
                <span> Favorite</span>
              </button>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='row text-center'>
            <h3>{title}</h3>
          </div>
          <div className='row'>
            <div className='column'>
              <Authors authors={authors} />
            </div>
            <div className='column'>
              <span className='book-title display-block'>Publisher: </span>
              <span className='display-block'>{publisher}</span>
            </div>
            <div className='column'>
              <span className='book-title display-block'>Published date: </span>
              <span className='display-block'>{publishedDate}</span>
            </div>
            <div className='column'>
              <span className='book-title display-block'>Pages: </span>
              <span className='display-block'>{pageCount}</span>
            </div>
            <div className='column'>
              <Language language={language} />
            </div>
          </div>
          <div className='row book-details-descriptions'>
            <div className='column'>
              <span className='book-title display-block'>Description: </span>
              <p className='display-block' dangerouslySetInnerHTML={formatedDescription} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Details
