import Link from 'next/link'
import React, { useMemo } from 'react'
import Temparature from './Temparature'

export default function Profile({ profile }) {
  return (
    <div className="text-black">

      <div className="prose prose-lg">
        <h1 className="flex flex-row items-center">Too hot to code <Temparature /> </h1>
      </div>


      <p className="text-base max-w-2xl font-normal text-gray-700 mt-8">
        Hi there! I am Software Engineer at
        <a className="a-link ml-2" href="https://www.alibaba.com/">@Alibaba</a>
        <a className="a-link ml-2" href="https://www.lazada.vn/">@Lazada</a>
        <a className="a-link ml-2" href="https://inspectorio.com/">@Inspectorio</a>
        <a className="a-link ml-2" href="http://siliconstraits.com/">@Silicon Straits</a>


      </p>

      <div className="text-base font-normal text-gray-600 mt-2">
        I enjoy building things, checkout my latest products here:
        <ul className="mt-4">
          <li className="mt-2">👉 <span className="ml-2"><a href="https://chrome.google.com/webstore/detail/fourgifs/aenmpomagafiihpopbgbcgphcbgkmfbl?hl=en" className="a-link">fourgifs</a>, translation application with better context, using gifs!</span></li>
          <li className="mt-2">👉 <span className="ml-2"><a href="https://github.com/phatnhse/android-container" className="a-link">android-container</a>, use docker to isolate and optimize your android testing process.</span></li>
          <li className="mt-2">👉 <span className="ml-2">stk, share your bank card with ease. Stay tune, coming soon!</span></li>
        </ul>
      </div>
    </div>
  );
};