import HeroSection from "./hero/HeroSection";
import FeaturedProjectsSection from "./featured-projects/FeaturedProjectsSection";
import ToolsSection from "./tools/ToolsSection";
import Divider from "../../layout/Divider";

export default function HomePage() {
  return (
    <div className="max-w-5xl flex flex-col gap-8">
      <HeroSection />
      <Divider />
      <ToolsSection />
      <Divider />
      <FeaturedProjectsSection />
    </div>
  )
}
