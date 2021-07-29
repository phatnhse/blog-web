import Link from "next/link"

export default function Tags({ tags }) {
  const shortTagList = tags.slice(0, 7)
  return (
    <>
      <div className="w-auto flex flex-wrap">
        {shortTagList.map(tag => (
          <Link href={`/tags/${tag}`} key={tag}>
            <a className="m-1 pl-2 pr-2 pt-1 pb-1 text-sm font-medium bg-green-500 rounded-xl text-white">
              {tag}
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}