import { cn } from "cn";
import { EDUCATION, ACHIEVEMENTS, type Achievement } from "../../../data/education";
import Card from "../../common/Card";
import Text from "../../common/Text";

export default function EducationSection() {
  const {
    university,
    program,
    specialization,
    graduationYear,
  } = EDUCATION;

  return (
    <div className="flex flex-col gap-4">
      <Text as="h3" size="lg">
        Education
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 lg:gap-4">
        <Card className="p-4 md:col-span-2 bg-base-100 rounded-lg shadow overflow-hidden">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 md:gap-3 lg:gap-4">
              <div className="aspect-square size-14 md:size-16 p-1 flex items-center justify-center bg-white border border-base-300 rounded-lg">
                <img
                  src={university.seal}
                  alt={university.name}
                  draggable={false}
                  loading="lazy"
                  className="select-none"
                />
              </div>
              <div className="flex flex-col">
                <Text as="h4" size="md">
                  {university.name}
                </Text>
                <Text size="sm">
                  {university.address}
                </Text>
              </div>
            </div>
            <div className="flex flex-col">
              <Text size="sm" className="font-medium">
                {program}
              </Text>
              <Text size="sm">
                Specialization in {specialization}
              </Text>
              <Text size="sm">
                Graduation: {graduationYear}
              </Text>
            </div>
          </div>
        </Card>
        {ACHIEVEMENTS.map((achievement, index) => (
          <AchievementCard key={index} achievement={achievement} />
        ))}          
      </div>
    </div>
  )
}

export function AchievementCard({
  achievement,
}: {
  achievement: Achievement,
}) {
  const { name, dateAwarded, provider } = achievement
  
  return (
    <Card className="flex bg-base-100 shadow overflow-hidden">
      <div className={cn(
        "aspect-square size-14 md:size-16 lg:size-20 flex items-center justify-center bg-white border border-base-300",
        name !== "DEP x DataCamp Donates Scholar" && "p-1"
      )}>
        <img
          src={provider.logo}
          alt={name}
          draggable={false}
          loading="lazy"
          className="select-none"
        />
      </div>
      <div className="h-full p-2 md:p-3 lg:p-4 flex flex-col justify-center">
        <Text size="sm" className="font-medium">{name}</Text>
        <Text size="sm">{dateAwarded}</Text>
      </div>
    </Card>
  )
}
