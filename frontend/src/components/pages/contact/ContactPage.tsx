import Divider from "../../layout/Divider";
import ContactHeader from "./ContactHeader";
import InternshipSection from "./InternshipSection";
import ServicesSection from "./ServicesSection";

export default function ContactPage() {
  return (
    <div className="max-w-5xl flex flex-col gap-8">
      <ContactHeader />
      <Divider />
      <ServicesSection />
      <Divider />
      <InternshipSection />
    </div>
  )
}
