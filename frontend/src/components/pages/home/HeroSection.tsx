import Text from "../../common/Text";
import neilPfp from "../../../assets/profile/neil-pfp.jpg"
import Button from "../../common/Button";


import linkedinIcon from "../../../assets/contacts/facebook-icon.png"
import githubIconDark from "../../../assets/contacts/github-icon-dark.png"
import githubIconLight from "../../../assets/contacts/github-icon-light.png"
import GmailIcon from "../../../assets/contacts/gmail-icon.png"
import facebookIcon from "../../../assets/contacts/facebook-icon.png"
import useTheme from "../../../stores/theme";
import { MapPin } from "lucide-react";
import Icon from "../../common/Icon";
import Tag from "../../common/Tag";

export default function HeroSection() {
  const { isDark } = useTheme()
  
  return (
    <section className="flex flex-col md:flex-row gap-12">
      <div className="flex-none flex flex-col items-center gap-4">
        <div className="relative">
          <img
            src={neilPfp}
            draggable={false}
            className="object-cover select-none aspect-square size-40 md:50 lg:size-60 p-1 ring-3 ring-secondary rounded-full"
          />
          <Tag className="absolute top-4 -right-6 bg-secondary">
            <Text size="sm" className="font-medium text-secondary-content">Internships!</Text>
          </Tag>
        </div>
        <div className="flex gap-1 items-center text-base-content-muted">
          <Icon icon={MapPin} className="size-4" />
          <Text size="sm" className="text-center font-medium">Lucena City, Philippines</Text>
        </div>
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
      </div>
      <div className="flex flex-col gap-6 text-center md:text-left">
        <div className="flex flex-col gap-2">
          <Text as="h2" size="2xl">Marc Neil Tagle</Text>
          <Text as="h3" size="lg" className="text-base-content-muted">Full-Stack Web Developer</Text>
        </div>
        <div className="flex flex-col gap-4">
          <Text size="sm">
            I'm a 3rd-year Computer Science student specializing in Data Science. While I'm currently studying machine learning, most of my hands-on building experience is in full-stack web development. I got my start working on hackathon projects, where I realized I enjoy backend engineering and server-side logic the most.
          </Text>
          <Text size="sm">
            Right now, I'm building side projects to bridge web development with machine learning. My goal is to work as a software developer building intelligent, high-impact applications that solve real-world problems.
          </Text>
        </div>
        <div className="flex gap-4">
          <Button
            className="w-full md:w-auto px-4 py-2 bg-primary rounded-lg"
          >
            <Text size="sm" className="font-medium text-primary-content">View Work</Text>
          </Button>
          <Button
            className="w-full md:w-auto px-4 py-2 bg-secondary rounded-lg"
          >
            <Text size="sm" className="font-medium text-primary-content">Save Resume</Text>
          </Button>
        </div>
      </div>
      
    </section>
  )
}
