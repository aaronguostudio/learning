import Layout from '../components/MyLayout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Afwef323" />
      <PostLink title="B234 234 123 " />
      <PostLink title="C ewr  wqer3" />
    </ul>
  </Layout>
)
