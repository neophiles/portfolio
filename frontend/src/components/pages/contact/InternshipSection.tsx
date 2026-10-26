import Text from "../../common/Text"
import { INTERNSHIP_AVAILABILITY } from "../../../data/internship"
import Card from "../../common/Card"

export default function InternshipSection() {
  return (
    <section className="w-full flex flex-col gap-4">
      <Text as="h2" size="lg">
        Internship Availability
      </Text>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="w-full grid grid-cols-2 gap-2 ">
          {INTERNSHIP_AVAILABILITY.map(({ name, details }) => (
            <Card className="w-full p-4 flex flex-col gap-1 bg-base-100 shadow">
              <Text as="h3" size="sm">
                {name}
              </Text>
              <Text size="sm">
                {details}
              </Text>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
