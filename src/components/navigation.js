import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import * as styles from './styles/Navigation.module.less'

const Navigation = () => {
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
        const seletedCategory = 'node'

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

        console.log('>groups', groups)

        return (
          <div className={styles.nav}>
            <h3>{seletedCategory.toUpperCase()}</h3>
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

export default Navigation
