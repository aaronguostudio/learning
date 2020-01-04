import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <div>
      Test
    </div>
    <Link to="/learning/d3/index.html">Go to my first Markdown blog post</Link>
  </Layout>
)

export default IndexPage
