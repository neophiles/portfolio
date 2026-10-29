import Page from "../../common/Page";
import EducationSection from "./EducationSection";
import HobbiesSection from "./HobbiesSection";
import LeadershipSection from "./LeadershipSection";
import MusicSection from "./MusicSection";

export default function AboutPage() {
  return (
    <Page>
      <EducationSection />
      {/* <LeadershipSection /> */}
      <HobbiesSection />
      <MusicSection />
    </Page>
  )
}
