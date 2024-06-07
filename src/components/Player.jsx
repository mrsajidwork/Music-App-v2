import { useContext } from "react";
import { assets } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong,
    muteVol,
    mute,
    volumeChange,
    volume,
  } = useContext(PlayerContext);

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 15)}</p>
        </div>
      </div>
      <div className="flex flex-col item-center gap-1 m-auto">
        <div className="flex gap-4 justify-center">
          <img
            onClick={previous}
            src={assets.prev_icon}
            className="w-4 cursor-pointer"
            alt=""
            // data-albumid={album ? album : ""}
          />

          {playStatus ? (
            <img
              onClick={pause}
              src={assets.pause_icon}
              className="w-4 cursor-pointer"
              alt=""
            />
          ) : (
            <img
              onClick={play}
              src={assets.play_icon}
              className="w-4 cursor-pointer"
              alt=""
            />
          )}

          <img
            onClick={next}
            src={assets.next_icon}
            className="w-4 cursor-pointer"
            alt=""
            // data-albumid={album ? album : ""}
          />
        </div>
        <div className="flex items-center gap-5">
          <p>
            {time.currentTime.minute}:{time.currentTime.second}
          </p>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer"
          >
            <hr
              ref={seekBar}
              className="h-1 border-none w-0 bg-[#2b55bd] rounded-full"
            />
          </div>
          <p>
            {time.totalTime.minute}:{time.totalTime.second}
          </p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2 opacity-75 cursor-pointer">
        <img
          src={muteVol ? assets.mute_icon : assets.volume_icon}
          className="w-4"
          alt=""
          onClick={mute}
        />
        <input className="h-1 rounded"  type="range" name="" id="" onChange={volumeChange} value={volume} />
      </div>
    </div>
  );
};

export default Player;
