import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import Player from "./Player";
import { albumsData } from "../assets/assets";
import { useEffect, useRef } from "react";
import { FeaturedPlaylists } from "./FeaturedPlaylists";
import BiggestHits from "./BiggestHits";
import Navbar from "./Navbar";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const isAlbum = location.pathname.includes("album");
  const albumId = isAlbum ? location.pathname.split("/")[2] : null;
  const bgColor = albumsData[Number(albumId)]?.bgColor || "#121212";

  useEffect(() => {
    if (isAlbum) {
      displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
    } else {
      displayRef.current.style.background = "#121212";
    }
  });

  return (
    <div
      ref={displayRef}
      className="w-[100%] m-2 px-6 pt-4 rouded bg-[#121212] text-white overflow-auto lg:w-[100%] lg:ml-0"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
        <Route path="/playlists" element={<FeaturedPlaylists />} />
        <Route path="/music" element={<BiggestHits />} />
        <Route path="/album/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default Display;
