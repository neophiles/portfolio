import neilPfp from "../../../../assets/profile/neil-pfp.jpg"

export default function ProfilePicture() {
  return (
    <img
      src={neilPfp}
      draggable={false}
      loading="lazy"
      className="object-cover select-none aspect-square size-40 md:50 lg:size-60 p-1 ring-3 ring-secondary rounded-full"
    />
  )
}
