import Link from "next/link";

export const Post = ({ post }) => {
  return (
    <>
      <Link href={`/posts/${post.slug}`}>
        <div className="pt-8 pb-2 cursor-pointer">
          <h1 className="font-bold text-xl text-black max-w-md">{post.frontmatter.title}</h1>
          <div>
            <p className="mt-1 font-light text-base text-black max-w-lg">{`${post.frontmatter.description.substring(0, 150)} ...`}</p>
            <span className="mt-1 text-sm text-black">{post.frontmatter.readTime} . {post.frontmatter.publishedOn}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
