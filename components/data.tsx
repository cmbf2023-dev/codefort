// components/StructuredData.js
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Codefort",
    "url": "https://codeforttech.com",
    "logo": "https://codeforttech.com/coded/logo.png",
    "description": "Innovative Software Solutions for Business Growth",
    "sameAs": [
      "https://twitter.com/codefort", // Add your social links
      "https://linkedin.com/company/codefort",
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}