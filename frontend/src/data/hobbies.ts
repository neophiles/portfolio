import bass1 from "../assets/hobbies/bass-1.jpg"

interface Hobby {
  name: string;
  description: string;
  imgSrc: string;
}

const HOBBIES: Hobby[] = [
  {
    name: "Bassist",
    description: "Playing since 2020. Influenced by Nick O'Malley, Zild, and Les Claypool. Performed in SHS and College battle of the bands. Currently on break due to busy schedule. Dying to play again.",
    imgSrc: bass1,
  }
] as const

export type {
  Hobby,
}

export {
  HOBBIES,
}
