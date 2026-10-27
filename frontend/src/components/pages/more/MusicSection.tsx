import { MUSIC } from "../../../data/music";
import Text from "../../common/Text";
import MusicSquare from "./MusicSquare";

export default function MusicSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text as="h3" size="lg">
          Favorite Albums
        </Text>
        <Text size="sm">
          I explore all genres, but Indie is my home. I love ILLIT so much.
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
