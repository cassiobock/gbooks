import Book from './book'
import EmptyState from './empty-state'
import React, { PropTypes } from 'react'

const getRows = (columns) => {
  const linesPerPage = 4
  const lines = Math.ceil(columns.length / linesPerPage)
  const rows = []

  for (let i = 0; i < lines; i++) {
    rows.push([])
  }

  columns.forEach(item => {
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].length <= 2) {
        rows[i].push(item)

        return
      }
    }
  })

  return rows
}

const BookList = ({ query, books, onDetailsClick, onFavoriteClick }) => {
  if (!books.length) {
    return <EmptyState />
  }

  const columns = books.map(book => (
    <Book key={book.id}
      query={query}
      id={book.id}
      volumeInfo={book.volumeInfo}
      onDetailsClick={onDetailsClick}
      onFavoriteClick={onFavoriteClick} />
  ))

  const rows = getRows(columns)

  return (
    <div>
      {rows.map((row, index) => (
        <div key={index} className='row book-row'>
          {row}
        </div>
      ))}
    </div>
  )
}

BookList.propTypes = {
  query: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  onDetailsClick: PropTypes.func.isRequired,
  onFavoriteClick: PropTypes.func.isRequired
}

export default BookList
