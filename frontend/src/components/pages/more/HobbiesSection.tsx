import { HOBBIES } from "../../../data/hobbies";
import Text from "../../common/Text";
import HobbyCard from "./HobbyCard";

export default function HobbiesSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Text as="h3" size="lg">
          Hobbies
        </Text>
        <Text size="sm">
          I do these weird things on the side.
        </Text>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-col gap-2">
        {HOBBIES.map((hobby, index) => (
          <HobbyCard key={index} hobby={hobby} />
        ))}
      </div>
    </div>
  )
}
