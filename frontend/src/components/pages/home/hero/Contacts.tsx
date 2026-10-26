import useTheme from "../../../../stores/theme";
import linkedinIcon from "../../../../assets/contacts/linkedin-icon.png"
import githubIconDark from "../../../../assets/contacts/github-icon-dark.png"
import githubIconLight from "../../../../assets/contacts/github-icon-light.png"
import GmailIcon from "../../../../assets/contacts/gmail-icon.png"
import facebookIcon from "../../../../assets/contacts/facebook-icon.png"

export default function Contacts() {
  const { isDark } = useTheme()
  
  return (
    <div className="flex justify-center gap-3">
      <a href="https://www.linkedin.com/in/marcneiltagle/" target="_blank">
        <img src={linkedinIcon} draggable={false} className="size-8 select-none" />
      </a>
      <a href="https://github.com/neophiles" target="_blank">
        <img src={isDark ? githubIconLight : githubIconDark} className="size-8 select-none" />
      </a>
      <a href="mailto:mnv.tagle@gmail.com" target="_blank">
        <img src={GmailIcon} draggable={false} className="size-8 select-none" />
      </a>
      <a href="https://www.facebook.com/mnv.tagle.06/" target="_blank">
        <img src={facebookIcon} draggable={false} className="size-8 select-none" />
      </a>
    </div>
  )
}
