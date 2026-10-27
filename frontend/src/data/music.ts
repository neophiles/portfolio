import breakevenAlbum from "../assets/music/illit-breakeven-album.webp"
import andaluciaAlbum from "../assets/music/ivofspades-andalucia-album.webp"
import lastfoolshowAlbum from "../assets/music/blaster-lastfoolshow-album.webp"
import favoriteworsenightmareAlbum from "../assets/music/articmonkeys-favoriteworstnightmare-album.webp"
import fizzlefryAlbum from "../assets/music/primus-frizzlefry-album.webp"
import suresureAlbum from "../assets/music/suresure-suresure-album.png"


type MusicType = "Track" | "Single" | "EP" | "Album"

interface Music {
  name: string;
  artist: string;
  type: MusicType;
  imgSrc: string;
  spotifyLink: string;
  onRepeat: boolean;
}

const MUSIC: Music[] = [
  {
    name: "BREAK EVEN",
    artist: "ILLIT",
    type: "EP",
    imgSrc: breakevenAlbum,
    spotifyLink: "https://open.spotify.com/album/4xYpXVSKqRTsL3ucRd8EMM?si=fd3ajFOOSVmItaW6INIMbQ",
    onRepeat: true,
  },
  {
    name: "Andalucia",
    artist: "IV OF SPADES",
    type: "Album",
    imgSrc: andaluciaAlbum,
    spotifyLink: "https://open.spotify.com/album/3rK5A6he7WDayWPDm3ttSh?si=ee8c9123adbd44dd",
    onRepeat: false,
  },
  {
    name: "Last Fool Show",
    artist: "BLASTER",
    type: "Album",
    imgSrc: lastfoolshowAlbum,
    spotifyLink: "https://open.spotify.com/album/7gF385mKDnOQEXQNrvBgD3?si=3ce7e415607d4588",
    onRepeat: false,
  },
  {
    name: "Favorite Worst Nightmare",
    artist: "Arctic Monkeys",
    type: "Album",
    imgSrc: favoriteworsenightmareAlbum,
    spotifyLink: "https://open.spotify.com/album/1XkGORuUX2QGOEIL4EbJKm?si=1ca21cb9850a4158",
    onRepeat: false,
  },
  {
    name: "Frizzle Fry",
    artist: "Primus",
    type: "Album",
    imgSrc: fizzlefryAlbum,
    spotifyLink: "https://open.spotify.com/album/43LIYiCuYXGUbiqs7LYiTQ?si=Jx8degLcT7mx2sAt9iZXfA",
    onRepeat: false,
  },
  {
    name: "Sure Sure",
    artist: "Sure Sure",
    type: "Album",
    imgSrc: suresureAlbum,
    spotifyLink: "https://open.spotify.com/album/7EfgATnOllXJ96s4sSdzei?si=ecda94f0fc824885",
    onRepeat: false,
  },
] as const

export type {
  MusicType,
  Music,
}

export {
  MUSIC,
}
