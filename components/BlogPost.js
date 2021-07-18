export default function BlogPost({ children, meta }) {
  return (
    <>
      <div className="base-container prose prose-yellow">
        <article>{children}</article>
      </div>
    </>
  )
}
