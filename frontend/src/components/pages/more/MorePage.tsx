import Text from "../../common/Text";
import MusicSection from "./MusicSection";
import HobbiesSection from "./HobbiesSection";
import Divider from "../../layout/Divider";

export default function MorePage() {
  return (
    <div className="max-w-5xl w-full flex flex-col gap-8">
      <Text as="h2" size="xl">
        More About Me
      </Text>
      <HobbiesSection />
      <Divider />
      <MusicSection />
    </div>
  )
}
