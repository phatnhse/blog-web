import Link from 'next/link'

export default function CustomLink({ as, href, ...otherProps }) {
  return <>
    <Link as={as} href={href} >
      <a className="!no-underline !text-blue-500 hover:text-blue-500" {...otherProps} />
    </Link>
  </>
}