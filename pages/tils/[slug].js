import React, { useMemo } from 'react'
import { getMDXComponent } from 'mdx-bundler/client'
import { getAllTils, getSingleTil } from "../../utils/TilRepo"

export default function Til({ code, frontmatter }){
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
  const til = await getSingleTil(params.slug);
  return {
    props: { ...til },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllTils().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};