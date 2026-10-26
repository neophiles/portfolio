import { CONTACTS } from "../../../../data/contacts";
import ContactIcon from "../../contact/ContactIcon";

export default function Contacts() {
  return (
    <div className="flex justify-center gap-3">
      {CONTACTS.map((contact, index) => (
        <ContactIcon key={index} contact={contact} />
      ))}
    </div>
  )
}
