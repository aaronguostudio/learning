import { withRouter } from 'next/router'
import Layout from '../components/MyLayout'

const Post = withRouter((props) => (
  <Layout>
    <h1>{props.router.query.title}</h1>
    <div>Blog contents</div>
  </Layout>
))

export default Post