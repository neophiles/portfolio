import type { Hobby } from "../../../data/hobbies"
import Card from "../../common/Card"
import Text from "../../common/Text"

export default function HobbyCard({
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
