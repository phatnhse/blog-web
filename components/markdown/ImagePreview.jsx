import React from 'react'
import Zoom from 'react-medium-image-zoom'

export default function ImagePreview({ url, title, href }) {

  return <>
    <div className="mb-16">
      <Zoom>
        <img src={url} className="object-contain h-4/5 w-full ..." />
      </Zoom>

      <div className="flex justify-center">
        <span className="text-sm text-gray-500">
          Source: <a className="a-link" href={href} >{title}</a>
        </span>
      </div>
    </div>
  </>
}