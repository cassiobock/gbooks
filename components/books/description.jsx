import React, { PropTypes } from 'react'

const Description = ({ description }) => {
  const formatedDescription = { __html: description }

  return (
    <div className='row book-details-descriptions'>
      <div className='column'>
        <label>Description: </label>
        <p className='display-block' dangerouslySetInnerHTML={formatedDescription} />
      </div>
    </div>
  )
}

Description.propTypes = {
  description: PropTypes.string
}

export default Description
