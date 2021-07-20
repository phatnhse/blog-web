import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";
import { getAllPosts } from "../utils/PostRepo"
import { Post } from '../components/Post';
import LittleTokyo from '../data/posts/tokyo/LittleTokyo';

export default function IndexPage({ posts }) {
  const tags = posts.flatMap(post => {
    return post.frontmatter.tags ? post.frontmatter.tags.split(',') : []
  })
    .map(tag => {
      return tag.trim()
    })
  const uniqueTags = [...new Set(tags)]

  const { theme, setTheme } = useTheme()
  const [src, setSrc] = useState('')

  useEffect(() => {
    if (theme == 'light') {
      setSrc('https://nongquanong.sfo3.cdn.digitaloceanspaces.com/nongquanong-light.png')
    } else {
      setSrc('https://nongquanong.sfo3.cdn.digitaloceanspaces.com/nongquanong-dark.png')
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
                <p className="mt-2 font-light text-lg text-black pr-40">
                  Hey, I am a Senior Software Engineer at <strong className="text-blue-600">@Alibaba @Lazada @Inspectorio @SSS</strong>
                </p>
                <p className="mt-2 font-light text-lg text-black pr-40">
                  I enjoy building things.
                </p>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="h-72 w-72 relative">
              {
                src ? <Image
                  src={src}
                  layout="fill"
                  objectFit="contain"
                /> : null
              }
            </div>
          </div>
        </div>
      </div>

      <div className="base-container pt-6 pt-6">

        <h1 className="font-medium text-sm text-gray-500">LATEST POST</h1>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};