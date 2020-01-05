import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import * as styles from './styles/Navigation.module.less'

import { utils } from '../utils'

const Navigation = ({ location }) => {
  const [root, path] = utils.parseUrl(location)
  console.log('>path', path)
  return (
    <StaticQuery
      query={graphql`
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  path,
                  category
                  group,
                  title
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { allMarkdownRemark: { edges } } = data
        const groups = {}
        const seletedCategory = path

        edges.forEach(({ node }) => {
          if (node && node.frontmatter && node.frontmatter.category === seletedCategory) {
            if (!node.frontmatter.group)
              return
            if (!groups[node.frontmatter.group])
              groups[node.frontmatter.group] = []
            groups[node.frontmatter.group].push({
              path: node.frontmatter.path,
              title: node.frontmatter.title
            })
          }
        })

        // const [curCat] = groups.filter(cat => cat.name === seletedCategory)
        // console.log('>groups', groups)

        return (
          <div className={styles.nav}>
            {
              Object.keys(groups).map(key => {
                return (
                  <div key={key}>
                    <div>{key}</div>
                    <div style={{paddingLeft: '20px'}}>{
                      groups[key].map(item => (
                        <div>
                          <Link to={item.path} key={item.title}>{item.title}</Link>
                        </div>
                      ))
                    }</div>
                  </div>
                )
              })
            }
          </div>
        )
      }}
    />
  )
}

Navigation.prototype = {
  location: PropTypes.object.isRequired
}

Navigation.defaultProps = {
  location: {}
}

export default Navigation
