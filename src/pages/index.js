import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import '../styles/index.less'

const IndexPage = () => (
  <Layout>
    <p>Welcome to your new Gatsby blog with Markdown pages.</p>
    <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
  </Layout>
)

export default IndexPage
