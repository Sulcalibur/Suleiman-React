import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links.css'

const NavigationLinks = (props) => {
  return (
    <nav className={`navigation-links-nav ${props.rootClassName} `}>
      <a href="#aboutme" className="navigation-links-link Navigation-Link">
        {props.about1}
      </a>
      <a href="#clients" className="navigation-links-link1 Navigation-Link">
        {props.clients}
      </a>
      <a
        href="https://drp.li/JgRWT"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link2 Navigation-Link"
      >
        {props.linkedin}
      </a>
      <a
        href="https://drp.li/d5Ufp"
        target="_blank"
        rel="noreferrer noopener"
        className="navigation-links-link3 Navigation-Link"
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
