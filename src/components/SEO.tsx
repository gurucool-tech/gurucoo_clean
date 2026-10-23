import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  canonical?: string;
  type?: "website" | "article" | "profile";
  jsonLd?: Record<string, unknown>;
  image?: string;
  keywords?: string;
  noIndex?: boolean;
}

export function SEO({ 
  title, 
  description, 
  canonicalPath, 
  canonical,
  type = "website", 
  jsonLd,
  image = "/og-image.png",
  keywords,
  noIndex = false,
}: SEOProps) {
  const siteUrl = "https://edugurucool.in";
  const rawCanonical = canonical || canonicalPath || "";
  const canonicalUrl = rawCanonical
    ? (rawCanonical.startsWith("http") ? rawCanonical : `${siteUrl}${rawCanonical.startsWith("/") ? "" : "/"}${rawCanonical}`)
    : siteUrl;
  const fullImageUrl = image.startsWith('http') ? image : `${siteUrl}${image.startsWith('/') ? '' : '/'}${image}`;
  const fullTitle = title.includes("GuruCool") ? title : `${title} | GuruCool`;
  const path = new URL(canonicalUrl, siteUrl).pathname;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "GuruCool",
    "url": siteUrl,
    "logo": `${siteUrl}/favicon-96x96.png`,
    "sameAs": [
      "https://www.linkedin.com/company/gurucool-technologies",
      "https://www.instagram.com/edugurucool"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    }
  };

  const webPageType = path === "/contact" ? "ContactPage" : path === "/about" ? "AboutPage" : "WebPage";
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": webPageType,
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: fullTitle,
    description,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: "GuruCool",
    publisher: { "@id": `${siteUrl}/#organization` },
  };

  const breadcrumbLabels: Record<string, string> = {
    product: "Product",
    features: "Features",
    plans: "Pricing",
    solutions: "Solutions",
    "educational-institutions": "Educational Institutions",
    schools: "Schools",
    colleges: "Colleges",
    "tuition-coaching": "Tuition and Coaching",
    "multi-campus": "Multi-Campus Groups",
    blog: "Blog",
    guides: "Guides",
    faq: "FAQ",
    about: "About",
    "vision-mission": "Vision and Mission",
    team: "Team",
    customers: "Institution Fit",
    careers: "Careers",
    contact: "Contact",
    "book-demo": "Book a Walkthrough",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    "attendance-accuracy-matters": "Why Attendance Accuracy Matters",
    "whatsapp-advantage-parent-apps": "The WhatsApp Advantage",
    "staged-approach-school-digitization": "A Staged Approach to Digitization",
  };
  const segments = path.split("/").filter(Boolean);
  const breadcrumbSchema = segments.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      ...segments.map((segment, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: breadcrumbLabels[segment] || segment.replace(/-/g, " "),
        item: `${siteUrl}/${segments.slice(0, index + 1).join("/")}`,
      })),
    ],
  } : null;

  const schemas = path === "/"
    ? [organization, website, pageSchema]
    : [pageSchema, breadcrumbSchema, ...(jsonLd ? [{ ...jsonLd, mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` } }] : [])];

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={noIndex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="GuruCool" />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="GuruCool connected institutional operating system" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      <script type="application/ld+json">{JSON.stringify(schemas)}</script>
    </Helmet>
  );
}
