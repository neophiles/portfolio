import Text from "../../common/Text"
import { CONTACTS } from "../../../data/contacts"
import ContactIcon from "./ContactIcon"

export default function ContactHeader() {
  return (
    <section className="w-full flex flex-col gap-4">
      <Text as="h2" size="xl">
        Let's Connect!
      </Text>
      <div className="flex flex-col gap-2">
        <Text size="sm">
          Open for software developer internship opportunities, development roles, collaborations, and freelance projects.
        </Text>
        <Text size="sm">
          For inquiries or project estimates, reach out directly via email or LinkedIn.
        </Text>
      </div>
      <div className="flex items-center gap-4">
        {CONTACTS
          .filter((contact) => contact.name != "Facebook")
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((contact, index) => (<ContactIcon key={index} contact={contact} />)
        )}
      </div>
    </section>
  )
}
