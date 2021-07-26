import Image from 'next/image'
import { getAllPosts, getAllPostsWithTag } from "../../utils/PostRepo"
import { getAllTils, getAllTilsWithTag } from "../../utils/TilRepo"
import { Post } from '../../components/Post';
import TilOneLine from '../../components/TilOneline';
import { getAllTagsFrom } from '../../utils/TagRepo';

export default function SearchTag({ posts, tils }) {
  const tilsVisibility = tils && tils.length ? "visible" : "invisible"
  const postsVisibility = posts && posts.length ? "visible" : "invisible"

  return (
    <div className={`base-container mt-16 ${postsVisibility}`}>
      <div>
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
      <div className={`p-4 ${tilsVisibility}`}>
        <div>
          <h1 className="font-medium text-sm text-gray-500">TODAY I LEARN</h1>
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
  );
};

export const getStaticProps = async ({ params }) => {
  const posts = getAllPostsWithTag(params.slug)
  const tils = getAllTilsWithTag(params.slug)

  return {
    props: { posts, tils },
  };
};

export const getStaticPaths = async () => {
  const posts = getAllPosts()
  const tils = getAllTils()
  const dataSource = posts.concat(tils)

  const paths = getAllTagsFrom(dataSource).map(tag => (
    { params: { slug: tag } }

  ));

  return {
    paths,
    fallback: false,
  };
};