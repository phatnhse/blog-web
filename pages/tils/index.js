import { getAllTils } from '../../utils/TilRepo';
import Til from '../../components/Til';


export default function Tils({ tils }) {
  return (
    <>
      <div className="base-container pt-6 pt-6">
        <h1 className="font-medium text-sm text-gray-500 mt-20">TODAY I LEARN</h1>
        <ul>
          {tils.map((til, index) => (
            <li key={`tit-${index}`}>
              <Til til={til} />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const tils = getAllTils();
  console.log(tils)

  return {
    props: { tils },
  };
};