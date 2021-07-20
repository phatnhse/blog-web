import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from "../../utils/PostRepo"

const Post = ({ code, frontmatter }) => {
  const tags = frontmatter.tags ? frontmatter.tags.split(',') : []
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="container-medium max-w-none mt-24 mb-0">
      <p className="text-center text-4xl font-bold">{frontmatter.title}</p>
      <div className="flex justify-center font-medium text-sm text-gray-600 mt-4 mb-4">
        {frontmatter.readTime} . {frontmatter.publishedOn}
      </div>
      <div className="flex justify-center">
        {tags.map(tag => {
          return <span key={tag} className="rounded pt-1 pb-1 pl-2 pr-2 text-base bg-gray-200 mr-2 ml-2">{tag}</span>
        })}
      </div>

      <div className="mt-16 mb-16 prose prose-lg">
        <Component />
      </div>
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