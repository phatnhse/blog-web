import React from 'react'

export default function Credit({ title, titleUrl, author, authorUrl, license, licenseUrl }) {
  const licenseVisibility = license != null ? 'visible' : 'invisible'

  return <div className="m-8">
    <div className="flex justify-center text-sm text-gray-500">
      <a href={titleUrl}>{title}</a>

      <span className="ml-2">
        by <a href={authorUrl}>  {author}</a>
      </span>

      <span className={`ml-2 ${licenseVisibility}`}>
        lisenced under <a href={licenseUrl}>{license}</a>
      </span>
    </div>
  </div>
}