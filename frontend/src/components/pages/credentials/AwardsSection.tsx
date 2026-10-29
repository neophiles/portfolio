import { AWARDS, type Award } from "../../../data/awards";
import Card from "../../common/Card";
import Text from "../../common/Text";

export default function AwardsSection() {
  return (
    <div className="flex flex-col gap-4">
      <Text as="h3" size="lg">Awards</Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-2 md:gap-3 lg:gap-4">
        {AWARDS.map((award, index) => (
          // <Card className="p-4 flex flex-col gap-2 bg-base-100 rounded-lg shadow">
          //   <Text as="h4">{award.name}</Text>
          //   <Text size="sm" className="font-medium">{award.context}</Text>
          //   <Text size="sm">{award.details}</Text>
          //   <Text size="sm">{award.dateAwarded}</Text>
          // </Card>

          <AwardCard key={index} award={award} />
        ))}
      </div>
    </div>
  )
}

export function AwardCard({
  award,
}: {
  award: Award,
}) {
  const {
    name, context, details, thumbnail,
    provider, dateAwarded, images, links,
  } = award 

  return (
    <Card className="group flex-1 lg:flex-none lg:w-80 flex flex-col bg-base-100/50 text-base-content shadow overflow-hidden">
      <div className="relative flex-none aspect-video bg-base-300 overflow-hidden">
        {thumbnail && (
          <img
            src={thumbnail}
            alt={name}
            draggable={false}
            loading="lazy"
            className="object-cover aspect-video select-none group-hover:scale-110 transition-transform duration-200"
          />
        )}
        <Text size="sm" className="absolute top-2 left-2 font-medium text-white">{dateAwarded}</Text>
      </div>
      <div className="h-full p-4 flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Text as="h3">{name}</Text>
            <Text size="sm" className="font-medium">{context}</Text>
            <Text size="sm">{details}</Text>
          </div>
        </div>
        <div className="flex items-center gap-2">
          
          {links.map(({ label, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              className="underline underline-offset-2"
            >
              <Text size="sm">{label}</Text>
            </a>
          ))}
        </div>
      </div>
    </Card>
  )  
}
