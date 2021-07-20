import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from "../../utils/PostRepo"

const Post = ({ code, frontmatter }) => {
  const tags = frontmatter.tags ? frontmatter.tags.split(',') : []
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="base-container prose prose-lg max-w-none mt-24 mb-0">
      <h1 className="text-center">{frontmatter.title}</h1>
      <div className="flex justify-center font-medium text-sm text-gray-600">
        <p className="">{frontmatter.readTime} . {frontmatter.publishedOn}</p>
      </div>
      <p className="text-center text-gray-500 text-base">{frontmatter.description}</p>
      <div className="flex justify-center">
        {tags.map(tag => {
          return <span key={tag} className="rounded pt-1 pb-1 pl-2 pr-2 text-base bg-gray-200 mr-2 ml-2">{tag}</span>
        })}
      </div>

      <div className="mt-16 mb-16">
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