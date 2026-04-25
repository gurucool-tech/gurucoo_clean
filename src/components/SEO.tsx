import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, any>;
}

export function SEO({ title, description, canonicalPath, type = "website", jsonLd }: SEOProps) {
  const siteUrl = "https://gurucool.com"; // Change to actual production URL
  const canonicalUrl = canonicalPath ? `${siteUrl}${canonicalPath}` : siteUrl;

  const defaultJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GuruCool",
    url: siteUrl,
    logo: `${siteUrl}/assets/gurucool-logo.png`,
    sameAs: [
      "https://www.linkedin.com/company/gurucool-technologies",
      "https://www.instagram.com/edugurucool"
    ]
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{`${title} | GuruCool`}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={`${title} | GuruCool`} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GuruCool" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={`${title} | GuruCool`} />
      <meta name="twitter:description" content={description} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
}
