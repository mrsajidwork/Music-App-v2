import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";

export const FeaturedPlaylists = () => {
  return (
    <>
    
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Playlists</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
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
