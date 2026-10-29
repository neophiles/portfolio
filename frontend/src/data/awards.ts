import openitbootcamp1 from "../assets/awards/openit-bootcamp-1.jpg"
import pjdsc251 from "../assets/awards/pjdsc25-1.jpg"

interface Award {
  name: string;
  context: string;
  details: string;
  provider: string;
  dateAwarded: string;
  thumbnail: string;
  images: {
    label: string;
    src: string;
  }[];
  links: {
    label: string;
    href: string;
  }[];
}

const AWARDS: Award[] = [
  {
    name: "Top Performer, Best in Capstone Project",
    context: "Open iT Applied Full Stack and Data Science Bootcamp 2026: Full Stack Development Track",
    details: "A 4-week summer training program organized by Open iT Asia, Inc. in partnership with Enverga University.",
    provider: "OpeniT Asia, Inc.",
    dateAwarded: "May 2026",
    thumbnail: openitbootcamp1,
    images: [
      {
        label: "Top Performer Certificate",
        src: "",
      },
      {
        label: "Best in Capstone Project Certificate",
        src: "",
      },
    ],
    links: [
      {
        label: "University Article",
        href: "https://mseuf.edu.ph/ccms/news/open-it-bootcamp",
      }
    ],
  },
  {
    name: "Top 10 Finalist Out of 40 Teams",
    context: "Philippine Junior Data Science Competition 2025",
    details: "A nationwide data science event and exploratory data analysis competition organized by the UP Data Science Society.",
    provider: "UP Data Science Society",
    dateAwarded: "November 2025",
    thumbnail: pjdsc251,
    images: [
      {
        label: "Certificate of Recognition",
        src: "",
      }
    ],
    links: [
      {
        label: "Announcement",
        href: "https://www.facebook.com/share/19nMrJf1xe/"
      },
    ],
  },
] as const

export type {
  Award,
}

export {
  AWARDS
}
