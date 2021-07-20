export default function Tils({ talks }) {
  return (
    <>
      <div className="base-container pt-6 pt-6">
        <h1 className="font-medium text-sm text-gray-500 mt-12">TODAY I LEARN</h1>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const talks = []

  return {
    props: { talks },
  };
};