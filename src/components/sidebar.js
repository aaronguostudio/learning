import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from '../images/brand/aaronstudio-logo-white.svg'

const Sidebar = ({ siteTitle }) => (
  <div style={{width: '220px', background: '#1d1c20'}}>
    <div className="flex" style={{padding: '20px'}}>
      <img src={logo} />
    </div>
    <div style={{color: 'white'}}>Learning</div>
  </div>
)

Sidebar.propTypes = {
  siteTitle: PropTypes.string,
}

Sidebar.defaultProps = {
  siteTitle: ``,
}

export default Sidebar
