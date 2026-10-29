import { MUSIC, type Music } from "../../../data/music";
import Icon from "../../common/Icon";
import Text from "../../common/Text";
import { Repeat } from 'lucide-react'

export default function MusicSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text as="h3" size="lg">
          Favorite Albums
        </Text>
        <Text size="sm">
          Music keeps me grounded. I explore all genres, but Indie is my home.
        </Text>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:flex lg:flex-wrap gap-2">
        {MUSIC.map((music, index) => (
          <MusicSquare key={index} music={music} />
        ))}
      </div>
    </div>
  )
}

export function MusicSquare({
  music,
}: {
  music: Music,
}) {
  const {
    name,
    artist,
    type,
    imgSrc,
    spotifyLink,
    onRepeat
  } = music
  
  return (
    <div className="group relative flex-1 lg:flex-none lg:size-40 flex flex-col items-center gap-2 bg-base-100 shadow overflow-hidden select-none">
      {onRepeat && (
        <Icon icon={Repeat} className="z-10 absolute top-2 right-2 flex items-center gap-1 text-secondary  shadow" />
      )}
      <img
        src={imgSrc}
        alt={name}
        draggable={false}
        className="object-cover aspect-square w-full"
        loading="lazy"
      />
      <a
        href={spotifyLink}
        target="_blank"
        className="absolute -bottom-full group-hover:-translate-y-full group-active:-translate-y-full transition-[translate] ease-in-out duration-200 w-full h-full p-2 flex flex-col justify-end bg-black/50 text-white">
        <Text as="h4" size="sm">
          {name}
        </Text>
        <Text size="sm">
          {artist}
        </Text>
      </a>
    </div>
  )
}

