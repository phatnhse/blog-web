import Link from 'next/link'

export default function CustomLink({ as, href, ...otherProps }) {
  return <>
    <Link as={as} href={href} >
      <a className="underline !text-blue-700 hover:text-blue-800" {...otherProps} />
    </Link>
  </>
}