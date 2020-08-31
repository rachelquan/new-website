import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header_logo">
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </div>
    <nav>
      <Link className="header__link" to="/projects">
        Projects
      </Link>
      <Link className="header__link" to="/tidbits">
        Tidbits
      </Link>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
