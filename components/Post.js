import Link from "next/link";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <>
      <Link href={"/blog" + link}>
        <div className="pt-4 pb-4 mt-4 cursor-pointer">
          <h1 className="font-bold text-xl text-black dark:text-white">{meta.title}</h1>
          <div>
            <p className="font-light text-base text-black dark:text-white">{meta.description}</p>
            <span className="font-light text-sm text-black dark:text-white">{meta.date} {meta.readTime + ` min read`}</span>
          </div>
        </div>
      </Link>
    </>
  );
};
