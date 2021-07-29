import Link from "next/link";

export default function TilOneLine({ til }) {
  return (
    <>
      <Link href={`/tils/${til.slug}`}>
        <div className="pt-4 pb-2 cursor-pointer">
          <h1 className="font-medium text-md max-w-md"><span>∙</span> {til.frontmatter.title}</h1>
        </div>
      </Link>
    </>
  );
};
