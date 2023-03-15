import React from 'react'

import PropTypes from 'prop-types'

import styles from './portofolio-card.module.css'

const PortofolioCard = (props) => {
  return (
    <div
      className={` ${styles['speaker-card']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['image-container']}>
        <img
          alt={props.image_alt}
          src={props.image_src}
          className={styles['image']}
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
