import Page from "../../common/Page";
import Divider from "../../layout/Divider";
import ContactHeader from "./ContactHeader";
import InternshipSection from "./InternshipSection";
import ServicesSection from "./ServicesSection";

export default function ContactPage() {
  return (
    <Page>
      <ContactHeader />
      <Divider />
      <ServicesSection />
      <Divider />
      <InternshipSection />
    </Page>
  )
}
