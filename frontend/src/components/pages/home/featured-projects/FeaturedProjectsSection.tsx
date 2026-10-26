import Text from "../../../common/Text";
import FeaturedProjectsContainer from "./FeaturedProjectsContainer";

export default function FeaturedProjectsSection() {
  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-12">
      <div className="flex flex-col gap-4">
        <Text as="h2" size="lg">
          Featured Projects
        </Text>
        <FeaturedProjectsContainer />
      </div>
    </section>
  )
}
