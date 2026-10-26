import HeroSection from "./HeroSection";
import FeaturedProjectsSection from "./featured-projects/FeaturedProjectsSection";
import ToolsSection from "./tools/ToolsSection";

export default function HomePage() {
  return (
    <div className="max-w-5xl flex flex-col gap-8">
      <HeroSection />
      <hr className="border-2 border-base-300" />
      <ToolsSection />
      <hr className="border-2 border-base-300" />
      <FeaturedProjectsSection />
    </div>
  )
}
