import Link from "next/link";

export default function Til({ til }) {
  return (
    <>
      <Link href={`tils/${til.slug}`}>
        <div className="pt-4 pb-2 cursor-pointer">
          <h1 className="font-bold text-xl text-black max-w-md">{til.frontmatter.title}</h1>
          <span className="mt-1 text-sm text-black">{til.frontmatter.readTime} . {til.frontmatter.publishedOn}</span>
        </div>
      </Link>
    </>
  );
};
