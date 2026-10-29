import { CERTIFICATES, type Certificate } from "../../../data/certificates";
import Card from "../../common/Card";
import Text from "../../common/Text";

export default function CourseCertificatesSection() {
  return (
    <div className="flex flex-col gap-4">
      <Text as="h3" size="lg">Course Certificates</Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-2 md:gap-3 lg:gap-4">
        {CERTIFICATES.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}

export function CertificateCard({
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
