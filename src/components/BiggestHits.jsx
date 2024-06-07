import { songsData } from "../assets/assets";
import SongItem from "./SongItem";

const BiggestHits = () => {
  return (
    <>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Todays Biggest hits</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              key={index}
              image={item.image}
              name={item.name}
              desc={item.desc}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default BiggestHits;
