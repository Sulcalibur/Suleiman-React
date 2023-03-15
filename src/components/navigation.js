import React from 'react'
import { Link } from 'gatsby'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import projectStyles from '../style.module.css'
import styles from './navigation.module.css'

const Navigation = (props) => {
  return (
    <header data-role="Header" className={styles['header']}>
      <div id="nav" className={styles['max-width']}>
        <Link to="/" className={styles['navlink']}>
          <img
            alt={props.image_alt}
            src={props.image_src}
            className={styles['image']}
          />
        </Link>
        <div className={styles['nav']}>
          <NavigationLinks rootClassName="root-class-name17"></NavigationLinks>
          <a
            href="mailto:work@sulei.uk?subject=From the site ~ [insert your profound subject here]"
            className={` ${styles['register']} ${projectStyles['button-secondary']} ${projectStyles['button']} ${projectStyles['button-md']} `}
          >
            {props.button}
          </a>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  image_src: '/playground_assets/portfolio_title-200h.png',
  button: 'Get in touch',
  image_alt: 'logo',
}

Navigation.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Navigation
