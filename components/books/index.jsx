import BookList from './booklist'
import Details from './details'
import React, { PropTypes } from 'react'
import Title from './title'

const Books = ({ lastSearch, books, bookDetails, showBookDetails, onBackButtonClick, onDetailsClick, onFavoriteClick }) => {
  if (showBookDetails) {
    return <Details book={bookDetails} />
  }

  return (
    <div>
      <Title lastSearch={lastSearch} />
      <BookList query={lastSearch}
        books={books}
        onDetailsClick={onDetailsClick}
        onFavoriteClick={onFavoriteClick} />
    </div>
  )
}

Books.propTypes = {
  lastSearch: PropTypes.string,
  books: PropTypes.array,
  bookDetails: PropTypes.object,
  showBookDetails: PropTypes.bool,
  onBackButtonClick: PropTypes.func,
  onDetailsClick: PropTypes.func,
  onFavoriteClick: PropTypes.func
}

export default Books
