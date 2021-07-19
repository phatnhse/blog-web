import React, {useMemo} from 'react'
import {getMDXComponent} from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from "../../utils/PostRepo"

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="base-container prose prose-lg max-w-none">
      <h1>{frontmatter.title}</h1>
      <Component />
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};

export default Post;