import mseufSeal from "../assets/education/eu.webp"
import mseufSealGold from "../assets/education/eu-gold.png"
import ccmsLogo from "../assets/education/ccms.png"
import dostseiSeal from "../assets/education/dostsei.svg"
import datacampSeal from "../assets/education/datacamp.png"

interface University {
  name: string;
  address: string;
  seal: string;
}

interface AcademicScholarship {
  academicYear: string;
  semester: "1st" | "2nd";
  gwa: number;
  dateAwarded: string;
  isDeansLister: boolean
  deansListRank?: 1 | 2 | 3;
}

interface Achievement {
  name: string;
  dateAwarded: string;
  provider: {
    name: string;
    logo: string;
  };
}

interface Education {
  university: University;
  program: string;
  specialization: string;
  graduationYear: number;
}

const ACADEMIC_SCHOLARSHIPS: AcademicScholarship[] = [
  {
    academicYear: "2024-2025",
    semester: "1st",
    gwa: 1.17,
    dateAwarded: "March 2025",
    isDeansLister: true,
  },
  {
    academicYear: "2024-2025",
    semester: "2nd",
    gwa: 1.10,
    dateAwarded: "March 2025",
    isDeansLister: true,
    deansListRank: 3,
  },
  {
    academicYear: "2025-2026",
    semester: "1st",
    gwa: 1.13,
    dateAwarded: "August 2025",
    isDeansLister: true,
    deansListRank: 1,
  },
  {
    academicYear: "2025-2026",
    semester: "2nd",
    gwa: 1.09,
    dateAwarded: "September 2026",
    isDeansLister: true,
    deansListRank: 1,
  },
] as const

const ACHIEVEMENTS: Achievement[] = [
  {
    name: "Consistent University Scholar",
    dateAwarded: "2024-Present",
    provider: {
      name: "Manuel S. Enverga Univerity Foundation",
      logo: mseufSealGold,
    },
  },
  {
    name: "Consistent Dean's Lister",
    dateAwarded: "2024-Present",
    provider: {
      name: "College of Computing and Multimedia Studies",
      logo: ccmsLogo,
    },
  },
  {
    name: "DOST-SEI Merit Scholar",
    dateAwarded: "Batch 2024",
    provider: {
      name: "Department of Science and Technology - Science Education Institute",
      logo: dostseiSeal,
    },
  },
  {
    name: "DEP x DataCamp Donates Scholar",
    dateAwarded: "August 2026",
    provider: {
      name: "Data Engineering Pilipinas",
      logo: datacampSeal,
    },
  },
]

const EDUCATION: Education = {
  university: {
    name: "Manuel S. Enverga University Foundation",
    address: "Lucena City, Quezon Province",
    seal: mseufSeal,
  },
  program: "Bachelor of Science in Computer Science",
  specialization: "Data Science",
  graduationYear: 2028,
}

export type {
  Education,
  AcademicScholarship,
  Achievement,
}

export {
  EDUCATION,
  ACADEMIC_SCHOLARSHIPS,
  ACHIEVEMENTS,
}
