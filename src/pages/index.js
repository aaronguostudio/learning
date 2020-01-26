import React from "react"
import { Link } from "gatsby"
import { Helmet } from 'react-helmet'
import Layout from "../components/layout"
import 'antd/dist/antd.less'
import '../styles/index.less'

const IndexPage = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Aaron Guo Blog</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="msapplication-tap-highlight" content="no" />
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width<% if (htmlWebpackPlugin.options.ctx.mode.cordova || htmlWebpackPlugin.options.ctx.mode.capacitor) { %>, viewport-fit=cover<% } %>"></meta>
    </Helmet>
    <Link to="/blog/my-first-post/">Go to my first Markdown blog post</Link>
  </Layout>
)

export default IndexPage
