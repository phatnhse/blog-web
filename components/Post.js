import Link from "next/link";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <>
      <h1>{meta.title}</h1>
      <div className='details'>
        <p>{meta.description}</p>
        <span>{meta.date}</span>
        <span role='img' aria-label='one coffee'>
          ☕ {meta.readTime + ' min read'}
        </span>
      </div>

      <Link href={"/blog" + link}>
        <a>Read more &rarr;</a>
      </Link>
    </>
  );
};
