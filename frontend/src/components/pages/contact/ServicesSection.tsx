import Text from "../../common/Text"
import { SERVICES } from "../../../data/services"
import Card from "../../common/Card"

export default function ServicesSection() {
  return (
    <section className="w-full flex flex-col gap-4">
      <Text as="h2" size="lg">
        My Services
      </Text>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-2">
        {SERVICES.map(({name, description, includes}, index) => (
          <Card key={index} className="w-full p-4 flex flex-col gap-2 bg-secondary/10 border-2 border-secondary shadow">
            <Text as="h3" className="text-secondary">{name}</Text>
            <Text size="sm">{description}</Text>
            <Text size="sm" className="mt-2 font-medium">Includes:</Text>
            <Text size="sm">{includes}</Text>
          </Card>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <Text as="h4" size="sm">
          Price Quotation
        </Text>
        <Text size="sm">
          Pricings are project-based and negotiable depending on scope, feature complexity, and deadline. Feel free to send a message detailing your requirements for a quick quote or estimate.
        </Text>
      </div>
    </section>
  )
}
