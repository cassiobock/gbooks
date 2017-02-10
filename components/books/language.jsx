import React, { PropTypes } from 'react'

const format = (language) => language ? language.toUpperCase() : language

const Language = ({ language }) => (
  <div>
    <span className='book-language display-block'>Language: </span>
    <span className='display-block'>{format(language)}</span>
  </div>
)

Language.propTypes = {
  language: PropTypes.string.isRequired
}

export default Language
