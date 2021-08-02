import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useEffect, useState } from "react";
import { getAllPosts } from "../utils/PostRepo"
import { getAllTils } from "../utils/TilRepo"
import { Post } from '../components/Post';
import Profile from '../components/Profile';
import Tags from '../components/Tags';
import TilOneLine from '../components/TilOneline';
import { getAllTagsFrom } from '../utils/TagRepo';

export default function IndexPage({ posts, tils }) {
  const { theme, setTheme } = useTheme()
  const [src, setSrc] = useState('')

  useEffect(() => {
    if (theme == 'light') {
      setSrc('/light.webp')
    } else {
      setSrc('/dark.webp')
    }
  }, [theme]);

  return (
    <>
      <div>
        <div className="base-container flex justify-between pt-4 pb-6">
          <div className="flex text-white items-center">
            <div>
              <Profile />
            </div>
          </div>

          <div className="w-auto">
            {
              src ? <img
                src={src}
                className="object-contain h-72 w-72 hidden md:block"
              /> : null
            }
          </div>
        </div>
      </div>

      <div className="base-container mt-16 md:grid md:grid-cols-5">
        <div className="col-span-3">
          <div>
            <h1 className="font-medium text-sm text-gray-500">LATEST POST</h1>
            <ul>
              {posts.map((post, index) => (
                <li key={index}>
                  <Post post={post} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-2 md:p-4 mt-2 md:mt-0">
          <h1 className="font-medium text-sm text-gray-500">POPULAR TAGS</h1>
          <div className="md:pt-4 pt-2">
            <Tags tags={getAllTagsFrom(posts.concat(tils))} />
          </div>

          <div>
            <h1 className="font-medium text-sm text-gray-500 pt-8 md:pt-16">TODAY I LEARN</h1>
            <ul>
              {tils.map((til, index) => (
                <li key={index}>
                  <TilOneLine til={til} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const posts = getAllPosts()
  const tils = getAllTils()

  return {
    props: { posts, tils },
  };
};

