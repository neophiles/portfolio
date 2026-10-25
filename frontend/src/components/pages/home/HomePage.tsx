import HeroSection from "./HeroSection";

export default function HomePage() {
  return (
    <div className="max-w-5xl flex flex-col gap-8">
      <HeroSection />
      <hr className="border-2 border-base-300" />
    </div>
  )
}
