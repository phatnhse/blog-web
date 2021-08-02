import React from 'react'

export default function ImagePreview({ url, title, href }) {

  return <div className="m-8">
    <img src={url} className="object-contain w-full" />

    <div className="flex justify-center">
      <span className="text-sm text-gray-500">
        Source: <a className="" href={href} >{title}</a>
      </span>
    </div>
  </div>
}