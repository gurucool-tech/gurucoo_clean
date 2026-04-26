import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, any>;
  image?: string;
  keywords?: string;
}

export function SEO({ 
  title, 
  description, 
  canonicalPath, 
  type = "website", 
  jsonLd,
  image = "/og-image.png",
  keywords
}: SEOProps) {
  const siteUrl = "https://edugurucool.in";
  const canonicalUrl = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "GuruCool",
    "url": siteUrl,
    "logo": `${siteUrl}/assets/logo-new.png`,
    "description": description,
    "sameAs": [
      "https://www.linkedin.com/company/gurucool-technologies",
      "https://www.instagram.com/edugurucool",
      "https://twitter.com/edugurucool"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{`${title} | GuruCool`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | GuruCool`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GuruCool" />
      <meta property="og:image" content={fullImageUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | GuruCool`} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
}
