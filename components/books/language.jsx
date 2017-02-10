import React, { PropTypes } from 'react'

const format = (language) => language ? language.toUpperCase() : language

const Language = ({ language }) => (
  <div>
    <label>Language: </label>
    <span>{format(language)}</span>
  </div>
)

Language.propTypes = {
  language: PropTypes.string.isRequired
}

export default Language
