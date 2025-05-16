export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "QuantumPulse Digital",
          url: "https://quantumpulsedigital.com",
          logo: "https://quantumpulsedigital.com/logo.png",
          sameAs: [],
          address: {
            "@type": "PostalAddress",
            streetAddress: "Allenby St 94",
            addressLocality: "Tel Aviv-Yafo",
            postalCode: "6581301",
            addressCountry: "IL",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+97253426791",
            contactType: "customer service",
            email: "info@quantumpulsedigital.com",
            availableLanguage: "English",
          },
          description:
            "QuantumPulse Digital is a data-driven marketing agency specializing in performance marketing, conversion optimization, and marketing automation.",
        }),
      }}
    />
  )
}
