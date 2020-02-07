import Link from 'next/link'

export default () => (
  <div className="test">
    <Link href="/"><a className="test">Hello</a></Link>
    <Link href="/contact"><a>Contact</a></Link>
    <Link href="/about"><a>About</a></Link>
  </div>
)