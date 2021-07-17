import { Post } from "../components/Post";
import { posts } from "../getAllPosts";
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";

export default function IndexPage() {
  const { theme, setTheme } = useTheme()
  const [src, setSrc] = useState('/nongquanong-light.png')

  useEffect(() => {
    if (theme === 'light') {
      setSrc('/nongquanong-light.png')
    } else {
      setSrc('/nongquanong-dark.png')
    }
  }, [theme]);

  return (
    <>
      <div className="">
        <div className="base-container flex justify-between pt-6 pb-6">
          <div className="flex text-white items-center">
            <div>
              <p className="font-semibold text-5xl text-yellow-500 mr-12">Too hot to handle</p>
              <div className="pt-6">
                <p className="mt-2 font-light text-lg text-black dark:text-white">
                  Hey, I am a Senior Software Engineer at @Alibaba @Lazada @Inspectorio @SSS
                </p>
                <p className="mt-2 font-light text-lg text-black dark:text-white">
                  I enjoy building things. Checkout some of my production products <a href="#">here </a>
                </p>
                <p className="mt-2 font-light text-lg text-black dark:text-white">
                  This portfolio is built with Next.js and a library called Nextra.
                </p>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="h-72 w-72 relative">
              <Image
                src={src}
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="base-container pt-6 pt-6">

        <h1 className="font-semibold text-2xl text-red-500">Recent Posts</h1>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </>
  );
}