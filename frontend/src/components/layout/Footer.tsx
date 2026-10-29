import Text from "../common/Text";

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full mt-64 mb-16 flex flex-col items-center justify-center gap-2">
      <a
        href="https://github.com/neophiles/portfolio"
        target="_blank"
        className="flex items-center gap-2 underline underline-offset-2"
      >
        <Text size="sm">
          View Source Code
        </Text>
      </a>
      <Text size="sm">
        © {currentYear} Marc Neil Tagle
      </Text>
    </footer>
  )
}
