import HeroSection from "./hero/HeroSection";
import FeaturedProjectsSection from "./featured-projects/FeaturedProjectsSection";
import ToolsSection from "./tools/ToolsSection";
import Divider from "../../layout/Divider";
import Page from "../../common/Page";

export default function HomePage() {
  return (
    <Page>
      <HeroSection />
      <Divider />
      <ToolsSection />
      <Divider />
      <FeaturedProjectsSection />
    </Page>
  )
}
