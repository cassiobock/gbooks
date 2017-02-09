import React, { PropTypes } from 'react'

const Book = ({ id, thumbUrl, title, authors, language }) => (
  <div>
    <img src={thumbUrl} alt={title} />
    <span>Title: {title}</span>
    <span>Authors: {authors}</span>
    <span>Language: {language}</span>
  </div>
)


Book.PropTypes = {
  id: PropTypes.string.isRequired,
  thumbUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authors: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired
}

export default Book
