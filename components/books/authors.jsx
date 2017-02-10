import React, { PropTypes } from 'react'

const format = (authors) => {
  if (!authors) {
    return 'N/A'
  }

  const ammountOfAuthorsToTake = authors.length <= 3 ? authors.length : 3

  return authors
    .slice(0, ammountOfAuthorsToTake)
    .map(author => {
      const sanitizedAuthor = author.length >= 20 ? `${author.substring(0, 17)}...` : author

      return <span key={sanitizedAuthor} className='display-block' title={sanitizedAuthor}>{sanitizedAuthor}</span>
    })
}

const Authors = ({ authors }) => (
  <div className='book-authors'>
    <span className='book-authors-title'>Authors: </span>
    <div>
      {format(authors)}
    </div>
  </div>
)

Authors.propTypes = {
  authors: PropTypes.array
}

export default Authors
