import { Post } from '../../components/Post';
import { getAllPosts } from '../../utils/PostRepo';


export default function Posts({ posts }) {
  return (
    <>
      <div className="base-container pt-6 pt-6">
        <h1 className="font-medium text-sm text-gray-500 mt-20">LATEST POST</h1>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <Post post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};