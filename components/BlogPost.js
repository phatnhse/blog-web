export default function BlogPost({ children, meta }) {
  return (
    <>
      <div className="base-container">
        <article>{children}</article>
      </div>
    </>
  )
}
