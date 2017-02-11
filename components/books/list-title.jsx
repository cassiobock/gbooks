import React, { PropTypes } from 'react'

const format = (title) => title && title.length >= 50 ? `${title.substring(0, 45)}...` : title

const ListTitle = ({ query, title }) => <span title={title}>{format(title)}</span>

ListTitle.propTypes = {
  query: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default ListTitle
