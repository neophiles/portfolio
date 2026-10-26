import type { Contact } from "../../../data/contacts"
import useTheme from "../../../stores/theme"

export default function ContactIcon({
  contact,
}: {
  contact: Contact
}) {
  const { href, icon } = contact

  const { isDark } = useTheme()

  return (
    <a href={href} target="_blank" className="flex-none">
      <img
        src={isDark && icon[1] ? icon[1] : icon[0]}
        draggable = {false}
        className="size-8 select-none"
      />
    </a>
  )
}
