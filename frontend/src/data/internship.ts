interface InternshipInfo {
  name: string;
  details: string;
}

const INTERNSHIP_AVAILABILITY: InternshipInfo[] = [
  { name: "Start Date", details: "Around January 2028" },
  { name: "OJT Requirement", details: "600 hours" },
  { name: "Preferred Locations", details: "Lucena City or within NCR" },
  { name: "Work Setup", details: "Onsite or hybrid" },
] as const

export type {
  InternshipInfo,
}

export {
  INTERNSHIP_AVAILABILITY,
}
