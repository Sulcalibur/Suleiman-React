import React from 'react'

import PropTypes from 'prop-types'

import './portofolio-card.css'

const PortofolioCard = (props) => {
  return (
    <div className={`portofolio-card-speaker-card ${props.rootClassName} `}>
      <div className="portofolio-card-image-container">
        <img
          alt={props.image_alt}
          src={props.image_src}
          className="portofolio-card-image"
        />
      </div>
    </div>
  )
}

PortofolioCard.defaultProps = {
  rootClassName: '',
  image_alt: 'image',
  image_src: '/playground_assets/img_7906-300w.jpg',
}

PortofolioCard.propTypes = {
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default PortofolioCard
