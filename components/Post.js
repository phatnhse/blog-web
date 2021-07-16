import Link from "next/link";
import { HeadPost } from "./HeadPost";

export const Post = ({ post }) => {
  console.log(post)
  const {
    link,
    module: { meta }
  } = post;

  return (
    <>
      <HeadPost meta={meta} />
      <Link href={"/blog" + link}>
        <a>Read more &rarr;</a>
      </Link>
    </>
  );
};
