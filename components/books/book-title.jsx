import React, { PropTypes } from 'react'

const format = (title) => title && title.length >= 50 ? `${title.substring(0, 50)}...` : title

const BookTitle = ({ query, title }) => {
  return (
    <div className='book-title'>
      <h4>{format(title)}</h4>
    </div>
  )
}

BookTitle.propTypes = {
  query: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default BookTitle
