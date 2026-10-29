import type { Certificate } from "../../../data/certificates";
import Card from "../../common/Card";
import Text from "../../common/Text";

export default function CertificateCard({
  certificate
}: {
  certificate: Certificate
}) {
  const {
    name, provider, platform,
    dateReceived, imgSrc, href,
  } = certificate 
  
  return (
    <Card className="group relative flex-1 lg:flex-none lg:w-80 rounded-lg shadow overflow-hidden">
      <img
        src={imgSrc}
        alt={name}
        loading="lazy"
        draggable={false}
        className="select-none"
      />
      <a
        href={href}
        target="_blank"
        className="absolute -bottom-full w-full h-full p-4 flex flex-col gap-1 justify-end bg-black/50 text-white  group-hover:-translate-y-full transition-transform duration-200"
      >
        <Text as="h3">
          {name}
        </Text>
        <Text size="sm">
          {provider} | {platform}
        </Text>
      </a>
    </Card>
  )
}
