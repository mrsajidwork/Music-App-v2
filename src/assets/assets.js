import bell_icon from "./bell.png";
import home_icon from "./home.png";
import like_icon from "./like.png";
import loop_icon from "./loop.png";
import mic_icon from "./mic.png";
import next_icon from "./next.png";
import play_icon from "./play.png";
import pause_icon from "./pause.png";
import plays_icon from "./plays.png";
import prev_icon from "./prev.png";
import search_icon from "./search.png";
import shuffle_icon from "./shuffle.png";
import speaker_icon from "./speaker.png";
import stack_icon from "./stack.png";
import zoom_icon from "./zoom.png";
import plus_icon from "./plus.png";
import arrow_icon from "./arrow.png";
import mini_player_icon from "./mini-player.png";
import queue_icon from "./queue.png";
import volume_icon from "./volume.png";
import mute_icon from "./mute.png";
import arrow_right from "./right_arrow.png";
import arrow_left from "./left_arrow.png";
import spotify_logo from "./spotify_logo.png";
import clock_icon from "./clock_icon.png";

// Rockstar Album
import Rockstar from "./rockstar.jpg";
// Rockstar Songs
import aurHoRockstart from "./aur_ho.mp3";
import nadaanParindey from "./nadaan_parindey.mp3";
import sadaaHaq from "./sadaa_haq.mp3";
import phrSeudChala from "./phir_se_ud_chala.mp3";

//Taal Album
import Taal from "./taalAlbum.jpg";
//taal songs
import ishqBina from "./ishq_bina.mp3";
import taalSeTaal from "./taal_se_taal.mp3";


export const assets = {
  bell_icon,
  home_icon,
  like_icon,
  loop_icon,
  mic_icon,
  next_icon,
  play_icon,
  plays_icon,
  prev_icon,
  search_icon,
  shuffle_icon,
  speaker_icon,
  stack_icon,
  zoom_icon,
  plus_icon,
  arrow_icon,
  mini_player_icon,
  volume_icon,
  mute_icon,
  queue_icon,
  pause_icon,
  arrow_left,
  arrow_right,
  spotify_logo,
  clock_icon,
};

export const albumsData = [
  {
    id: "rockstardata",
    name: "Rockstar",
    image: Rockstar,
    desc: "Year: 2011",
    bgColor: "#c13a30",
  },
  {
    id: "taalData",
    name: "Taal",
    image: Taal,
    desc: "Year: 1999",
    bgColor: "#747064",
  },
];


export const songsData = [
  {
        id: 0,
        name: "Aur Ho",
        image: Rockstar,
        file: aurHoRockstart,
        desc: "Album: Rockstar",
        duration: "3:00",
      },
      {
        id: 1,
        name: "Naadan Parindey",
        image: Rockstar,
        file: nadaanParindey,
        desc: "Album: Rockstar",
        duration: "3:00",
      },
      {
        id: 2,
        name: "Ishq Bina",
        image: Taal,
        file: ishqBina,
        desc: "Album: Taal",
        duration: "3:00",
      },
      {
        id: 3,
        name: "Taal Se Taal",
        image: Taal,
        file: taalSeTaal,
        desc: "Album: Taal",
        duration: "3:00",
      }
]


export const albumSongsData = [
  {
    rockstardata: [
      {
        id: 0,
        name: "Aur Ho",
        image: Rockstar,
        file: aurHoRockstart,
        desc: "Album: Rockstar",
        duration: "3:00",
      },
      {
        id: 1,
        name: "Naadan Parindey",
        image: Rockstar,
        file: nadaanParindey,
        desc: "Album: Rockstar",
        duration: "3:00",
      },
      {
        id: 2,
        name: "Sadda Haq",
        image: Rockstar,
        file: sadaaHaq,
        desc: "Album: Rockstar",
        duration: "3:00",
      },
      {
        id: 3,
        name: "Phir Se Ud Chala",
        image: Rockstar,
        file: phrSeudChala,
        desc: "Album: Rockstar",
        duration: "3:00",
      },
    ],

    taalData: [
      {
        id: 0,
        name: "Ishq Bina",
        image: Taal,
        file: ishqBina,
        desc: "Album: Taal",
        duration: "3:00",
      },
      {
        id: 1,
        name: "Taal Se Taal",
        image: Taal,
        file: taalSeTaal,
        desc: "Album: Taal",
        duration: "3:00",
      }
    ],
  },
];
