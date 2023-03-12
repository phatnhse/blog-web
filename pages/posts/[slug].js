import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllPosts, getSinglePost } from "../../utils/PostRepo"
import InlineCode from '../../components/markdown/InlineCode';
import BlockQuote from '../../components/markdown/BlockQuote';
import PreCode from '../../components/markdown/PreCode';
import CustomLink from '../../components/markdown/CustomLink';

const Post = ({ code, frontmatter }) => {
  const Component = useMemo(() => getMDXComponent(code), [code]);

  return (
    <div className="container-medium max-w-none mt-24 mb-0">
      <p className="text-center text-4xl font-bold">{frontmatter.title}</p>
      <div className="flex justify-center font-medium text-sm text-gray-600 mt-4 mb-4">
        {frontmatter.publishedOn}
      </div>
      <div className="flex justify-center">

      </div>

      <div className="mt-16 mb-16 prose">
        <Component components={
          {
            'code': InlineCode,
            'blockquote': BlockQuote,
            'a': CustomLink,
            'pre': PreCode
          }
        } />
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