import { HOBBIES, type Hobby } from "../../../data/hobbies";
import Text from "../../common/Text";
import Card from "../../common/Card"

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

export function HobbyCard({
  hobby,
}: {
  hobby: Hobby,
}) {
  const {
    name,
    description,
    imgSrc,
  } = hobby
  
  return (
    <Card className="group flex flex-col lg:flex-row bg-base-100 rounded-lg shadow overflow-hidden">
      <div className="aspect-video lg:w-160 flex items-center justify-center bg-base-300 overflow-hidden select-none">
        <img
          src={imgSrc}
          alt={name}
          loading="lazy"
          draggable={false}
          className="object-cover w-full group-hover:scale-110 transition-transform ease-in-out duration-200"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Text as="h4">
          {name}
        </Text>
        <Text size="sm">
          {description}
        </Text>
      </div>
    </Card>
  )
}
