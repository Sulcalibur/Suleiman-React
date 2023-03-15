import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import NavigationLinks from './navigation-links'
import './navigation.css'

const Navigation = (props) => {
  return (
    <header data-role="Header" className="navigation-header">
      <div id="nav" className="navigation-max-width">
        <Link to="/" className="navigation-navlink">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="navigation-image"
          />
        </Link>
        <div className="navigation-nav">
          <NavigationLinks rootClassName="navigation-links-root-class-name17"></NavigationLinks>
          <a
            href="mailto:work@sulei.uk?subject=From the site ~ [insert your profound subject here]"
            className="navigation-register button-secondary button button-md"
          >
            {props.button}
          </a>
        </div>
        <div data-role="BurgerMenu" className="navigation-burger-menu">
          <svg viewBox="0 0 1024 1024" className="navigation-icon">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </div>
        <div data-role="MobileMenu" className="mobile-menu">
          <div className="navigation-nav1">
            <div className="navigation-container">
              <img alt={props.image_alt1} src={props.image_src1} />
              <div
                data-role="CloseMobileMenu"
                className="navigation-close-mobile-menu"
              >
                <svg viewBox="0 0 1024 1024" className="navigation-icon2">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <NavigationLinks rootClassName="navigation-links-root-class-name18"></NavigationLinks>
            <button className="button-secondary button button-md">
              {props.button2}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Navigation.defaultProps = {
  image_src: '/playground_assets/portfolio_title-200h.png',
  button: 'Get in touch',
  image_alt1: 'image',
  image_src1: '/playground_assets/logo1-1500h.png',
  button2: 'Get in touch',
  image_alt: 'logo',
}

Navigation.propTypes = {
  image_src: PropTypes.string,
  button: PropTypes.string,
  image_alt1: PropTypes.string,
  image_src1: PropTypes.string,
  button2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Navigation
