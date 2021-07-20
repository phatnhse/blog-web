export default function Tils({ tils }) {
  return (
    <>
      <div className="base-container pt-6 pt-6">
        <h1 className="font-medium text-sm text-gray-500 mt-12">LATEST TALKS</h1>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const tils = []

  return {
    props: { tils },
  };
};