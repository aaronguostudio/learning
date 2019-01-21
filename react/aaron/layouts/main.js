import Meta from '../components/meta'
import Footer from '../components/footer'
import Link from 'next/link'

export default ({ children }) => (
  <div>
    <Meta />
    <div>
      <Link href="/"><a>Hello</a></Link>
      <Link href="/contact"><a>Contact</a></Link>
      <Link href="/about"><a>About</a></Link>
    </div>
    { children }
    <Footer />
  </div>
)