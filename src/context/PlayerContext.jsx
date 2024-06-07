import { createContext, useEffect, useRef, useState } from "react";
import { albumSongsData, songsData } from "../assets/assets";
import { PropTypes } from "prop-types";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const [muteVol, setMuteVol] = useState(false);
  const [volume, setVolume] = useState(100);

  const volumeChange = (e) => {
    setVolume(e.target.value);
    audioRef.current.volume = e.target.value / 100;

    if (e.target.value === "0") {
      setMuteVol(true);
    }else {
      setMuteVol(false);
    }
  }

  //change the
  const mute = () => {
    if (audioRef.current.volume === 0) {
      audioRef.current.volume = volume / 100;
      setMuteVol(false);
    } else {
      audioRef.current.volume = 0;
      setMuteVol(true);
    }
  }

  const play = () => {
    audioRef.current.play();
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playWithId = async (songId, albumId) => {
    if(albumId === 'biggestHits') {
      await setTrack(songsData[songId]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
    else{
      const albumSongsDataExtraction = albumSongsData[0][albumId];
      await setTrack(albumSongsDataExtraction[songId]);
      await audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const previous = async () => {
    console.log(track);
    // if (track.id > 0) {
    //   await setTrack(songsData[track.id - 1]);
    //   await audioRef.current.play();
    //   setPlayStatus(true);
    // }
  };

  const next = async () => {
    // if (track.id < songsData.length - 1) {
    //   await setTrack(songsData[track.id + 1]);
    //   await audioRef.current.play();
    //   setPlayStatus(true);
    // }
  };

  const seekSong = async (e) => {
    const seekWidth = seekBg.current.offsetWidth;
    const seekPosition = e.nativeEvent.offsetX;
    seekBar.current.style.width = `${(seekPosition / seekWidth) * 100}%`;
    audioRef.current.currentTime =
      (seekPosition / seekWidth) * audioRef.current.duration;
  };

  useEffect(() => {
    setTimeout(() => {
      audioRef.current.ontimeupdate = () => {
        seekBar.current.style.width = `${
          (audioRef.current.currentTime / audioRef.current.duration) * 100
        }%`;
        setTime({
          currentTime: {
            second: Math.floor(audioRef.current.currentTime % 60),
            minute: Math.floor(audioRef.current.currentTime / 60),
          },
          totalTime: {
            second: Math.floor(audioRef.current.duration % 60),
            minute: Math.floor(audioRef.current.duration / 60),
          },
        });
      };
    }, 1000);
  }, [audioRef]);

  const contextValue = {
    audioRef,
    seekBar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
    muteVol,
    mute,
    volumeChange,
    volume,
  };

  PlayerContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
