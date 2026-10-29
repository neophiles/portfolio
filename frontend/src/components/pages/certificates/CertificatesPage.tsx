import { CERTIFICATES } from "../../../data/certificates";
import Text from "../../common/Text";
import CertificateCard from "./CertificateCard";

export default function CertificatesPage() {
  return (
    <div className="max-w-5xl flex flex-col gap-8">
      <Text as="h2" size="xl">
        Certificates
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-wrap gap-2 md:gap-3 lg:gap-4">
        {CERTIFICATES.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}
