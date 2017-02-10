import React, { PropTypes } from 'react'

const format = (id, authors) => {
  if (!authors) {
    return 'N/A'
  }

  const ammountOfAuthorsToTake = authors.length <= 3 ? authors.length : 3

  return authors
    .slice(0, ammountOfAuthorsToTake)
    .map(author => {
      const sanitizedAuthor = author.length >= 20 ? `${author.substring(0, 17)}...` : author

      return <span key={`${id}-${sanitizedAuthor}`} className='display-block' title={author}>{sanitizedAuthor}</span>
    })
}

const Authors = ({ id, authors }) => (
  <div>
    <label>Authors: </label>
    <div>
      {format(id, authors)}
    </div>
  </div>
)

Authors.propTypes = {
  id: PropTypes.string,
  authors: PropTypes.array
}

export default Authors
