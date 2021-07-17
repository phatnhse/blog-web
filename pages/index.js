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
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="base-container flex justify-between pt-6 pb-6">
          <div className="flex text-white items-center">
            <div>
              <p className="font-semibold text-5xl tracking-tight text-black dark:text-white mr-12">Too hot to handle</p>
              <p className="mt-2 font-light text-lg tracking-tight text-black dark:text-white mr-12">
                Hi, my name is Phat. I love build things. Checkout my latest production apps here.
              </p>
            </div>
          </div>
          <div className="w-auto">
            <div className="h-72 w-72 relative">
              <Image
                src={src}
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="base-container pt-6 pt-6">

        <h1 className="text-xl"> Recent Posts</h1>
        {posts.map((post) => (
          <Post key={post.link} post={post} />
        ))}
      </div>
    </>
  );
}