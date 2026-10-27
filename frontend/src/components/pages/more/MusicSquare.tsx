import Icon from '../../common/Icon'
import type { Music } from '../../../data/music'
import { Repeat } from 'lucide-react'
import Text from '../../common/Text'

export default function MusicSquare({
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
