import Link from "next/link";

export const Post = ({ post }) => {
  return (
    <>
      <Link href={`posts/${post.slug}`}>
        <div className="pt-4 pb-4 mt-4 cursor-pointer max-w-md">
          <h1 className="font-bold text-xl text-black dark:text-white">{post.frontmatter.title}</h1>
          <div>
            <p className="font-light text-base text-black dark:text-white">{`${post.frontmatter.description.substring(0, 150)} ...`}</p>
            <span className="font-light text-sm text-black dark:text-white">{post.frontmatter.readTime}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
