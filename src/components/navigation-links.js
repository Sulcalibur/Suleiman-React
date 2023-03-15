import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './navigation-links.module.css'

const NavigationLinks = (props) => {
  return (
    <nav className={` ${styles['nav']} ${styles[props.rootClassName]} `}>
      <a
        href="#aboutme"
        className={` ${styles['link']} ${projectStyles['navigation-link']} `}
      >
        {props.about1}
      </a>
      <a
        href="#clients"
        className={` ${styles['link1']} ${projectStyles['navigation-link']} `}
      >
        {props.clients}
      </a>
      <a
        href="https://drp.li/JgRWT"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['link2']} ${projectStyles['navigation-link']} `}
      >
        {props.linkedin}
      </a>
      <a
        href="https://drp.li/d5Ufp"
        target="_blank"
        rel="noreferrer noopener"
        className={` ${styles['link3']} ${projectStyles['navigation-link']} `}
      >
        {props.resume}
      </a>
    </nav>
  )
}

NavigationLinks.defaultProps = {
  clients: 'Clients',
  rootClassName: '',
  resume: 'Resume',
  linkedin: 'LinkedIn',
  about1: 'About',
}

NavigationLinks.propTypes = {
  clients: PropTypes.string,
  rootClassName: PropTypes.string,
  resume: PropTypes.string,
  linkedin: PropTypes.string,
  about1: PropTypes.string,
}

export default NavigationLinks
