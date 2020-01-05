/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Location } from "@reach/router"
import Bread from "./breadcrumb"
import Content from "./content"
import Sidebar from "./sidebar"
import Navigation from "./navigation"
import * as styles from './styles/Layout.module.less'


const Layout = ({ children }) => {
  return (
    <Location>
      {({ location }) => {
        return (
          <StaticQuery
            query={graphql`
              query SiteTitleQuery {
                site {
                  siteMetadata {
                    title
                  }
                }
              }
            `}
            render={data => (
              <div className="flex container">
                <Sidebar location={location} />
                <div className={styles.main}>
                  {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
                  <Content>
                    <Bread />
                    <div className="mt-lg">
                      {children}
                    </div>
                  </Content>
                </div>
                <Navigation location={location} />
              </div>
            )}
          />
        )
      }}
    </Location>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
