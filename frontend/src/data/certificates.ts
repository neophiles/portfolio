import userInterfaceDesign from "../assets/certificates/UserInterfaceDesign-Coursera6VMKKXS5QVIL.jpg"
import softwareEngineeringIntro from "../assets/certificates/SoftwareEngineeringIntro-CouseraO9N2BC63IR2T.jpg"
import applicationDevelopment from "../assets/certificates/ApplicationDevelopment-CourseraJ4Q0WI8XSJ4X.jpg"
import frontendDevelopmentIntro from "../assets/certificates/FrontendDevelopmentIntro-Coursera3DU5G2VTGIZ3.jpg"
import javascriptProgramming from "../assets/certificates/JavaScriptProgramming-Coursera9SVIXOLCM2QX.jpg"

interface Certificate {
  name: string;
  provider: string;
  platform: string;
  dateReceived: string;
  imgSrc: string;
  href: string;
}

const CERTIFICATES: Certificate[] = [
  {
    name: "User Interface Design: Principles, Prototype, Practices",
    provider: "Coursera",
    platform: "Coursera",
    dateReceived: "2026-09-30",
    imgSrc: userInterfaceDesign,
    href: "https://coursera.org/share/b24bbdee99db3369312d7c52dc69c410",
  },
  {
    name: "Introduction to Software Engineering",
    provider: "IBM",
    platform: "Coursera",
    dateReceived: "2026-08-13",
    imgSrc: softwareEngineeringIntro,
    href: "https://coursera.org/share/32dff59108f143878c59fb2eb3a9a0c4",
  },
  {
    name: "Application Development",
    provider: "Amazon",
    platform: "Coursera",
    dateReceived: "2026-03-30",
    imgSrc: applicationDevelopment,
    href: "https://coursera.org/share/1af57e92528f8714442ac7bb7443ec58",
  },
  {
    name: "Introduction to Front-End Development",
    provider: "Meta",
    platform: "Coursera",
    dateReceived: "2025-12-06",
    imgSrc: frontendDevelopmentIntro,
    href: "https://coursera.org/share/5b4b94870173caab8e69f4a8a0f7a81d",
  },
  {
    name: "Programming with JavaScript",
    provider: "Meta",
    platform: "Coursera",
    dateReceived: "2025-12-16",
    imgSrc: javascriptProgramming,
    href: "https://coursera.org/share/db860f0240b84a10b342359acc1b44e4",
  },
] as const

export type {
  Certificate,
}

export {
  CERTIFICATES,
}
