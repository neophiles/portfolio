import linkedinIcon from "../assets/contacts/linkedin-icon.png"
import githubIconDark from "../assets/contacts/github-icon-dark.png"
import githubIconLight from "../assets/contacts/github-icon-light.png"
import GmailIcon from "../assets/contacts/gmail-icon.png"
import facebookIcon from "../assets/contacts/facebook-icon.png"
    
interface Contact {
  name: string;
  alt: string;
  href: string;
  icon: string[];
}

const CONTACTS: Contact[] = [
  {
    name: "LinkedIn",
    alt: "LinkedIn",
    href: "https://www.linkedin.com/in/marcneiltagle/",
    icon: [linkedinIcon]
  },
  {
    name: "GitHub",
    alt: "GitHub",
    href: "https://github.com/neophiles",
    icon: [githubIconDark, githubIconLight]
  },
  {
    name: "Gmail",
    alt: "mnv.tagle@gmail.com",
    href: "mailto:mnv.tagle@gmail.com",
    icon: [GmailIcon]
  },
  {
    name: "Facebook",
    alt: "Facebook",
    href: "https://www.facebook.com/mnv.tagle.06/",
    icon: [facebookIcon]
  },
] as const

export type {
  Contact,
}

export {
  CONTACTS,
}
