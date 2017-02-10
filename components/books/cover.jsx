import React, { PropTypes } from 'react'

const getBestImage = (sizes, isDetails) => {
  const defaultUrl = 'http://www.faygoluvers.net/v5/wp-content/themes/original/images/no_image_available_s_large.jpg'
  const width = isDetails ? '452' : '121'
  const height = isDetails ? '595' : '181'
  const imageSizes = isDetails
    ? ['large', 'medium', 'small']
    : ['thumbnail', 'smallThumbnail']

  if (!sizes) {
    return { url: defaultUrl, width, height }
  }

  const bestAvailableImageSize = imageSizes.filter(size => sizes[size])

  const url = bestAvailableImageSize.length
    ? sizes[bestAvailableImageSize[0]]
    : defaultUrl

  return { url, width, height }
}

const Cover = ({ images, alt, isDetails }) => {
  const { url, width, height } = getBestImage(images, isDetails)

  return (
    <div className='book-image'>
      <img src={url} alt={alt} title={alt} width={width} height={height} />
    </div>
  )
}

Cover.propTypes = {
  images: PropTypes.object,
  alt: PropTypes.string.isRequired,
  isDetails: PropTypes.bool.isRequired
}

export default Cover
