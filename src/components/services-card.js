import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './services-card.module.css'

const ServicesCard = (props) => {
  return (
    <div className={projectStyles['services-card']}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
    </div>
  )
}

ServicesCard.defaultProps = {
  text: 'User Research',
  text1:
    "Conducting research to understand the user's needs, preferences, and behavior is crucial for creating user-centered designs that solve real problems.",
}

ServicesCard.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default ServicesCard
