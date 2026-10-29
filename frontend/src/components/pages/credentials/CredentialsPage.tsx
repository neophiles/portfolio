import Page from "../../common/Page";
import Text from "../../common/Text";
import AwardsSection from "./AwardsSection";
import CourseCertificatesSection from "./CourseCertificatesSection";

export default function CredentialsPage() {
  return (
    <Page>
      <Text as="h2" size="xl">
        Credentials
      </Text>
      <AwardsSection />
      <CourseCertificatesSection />
    </Page>
  )
}
