import Text from "../../../common/Text";
import Button from "../../../common/Button";
import { MapPin } from "lucide-react";
import Icon from "../../../common/Icon";
import Tag from "../../../common/Tag";
import Contacts from "./Contacts";
import ProfilePicture from "./ProfilePicture";
import { useNavigate } from "react-router";

export default function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="flex flex-col md:flex-row gap-8 md:gap-12">
      <div className="flex-none flex flex-col items-center gap-4">
        <div className="relative">
          <ProfilePicture />
          <Tag className="absolute top-4 -right-6 bg-secondary">
            <Text size="sm" className="font-medium text-secondary-content">Internships!</Text>
          </Tag>
        </div>
        <div className="flex gap-1 items-center text-base-content-muted">
          <Icon icon={MapPin} className="size-4" />
          <Text size="sm" className="text-center font-medium">Lucena City, Philippines</Text>
        </div>
        <Contacts />
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
            onClick={() => navigate("/projects")}
            className="w-full md:w-auto px-4 py-2 bg-primary rounded-lg"
          >
            <Text size="sm" className="font-medium text-primary-content">View Work</Text>
          </Button>
          <Button
            onClick={() => alert("Coming Soon")}
            className="w-full md:w-auto px-4 py-2 bg-secondary rounded-lg"
          >
            <Text size="sm" className="font-medium text-primary-content">Save Resume</Text>
          </Button>
        </div>
      </div>
      
    </section>
  )
}
