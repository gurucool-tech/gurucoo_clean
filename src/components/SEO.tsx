import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: "website" | "article";
  publishedTime?: string;
  author?: string;
  structuredData?: object;
}

const BASE_URL = "https://edugurucool.in";

export function SEO({
  title,
  description,
  canonical,
  type = "website",
  publishedTime,
  author = "GuruCool",
  structuredData,
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    updateMeta("description", description);
    updateMeta("og:title", title, true);
    updateMeta("og:description", description, true);
    updateMeta("og:type", type, true);
    updateMeta("og:url", canonical ? `${BASE_URL}${canonical}` : BASE_URL, true);
    updateMeta("twitter:title", title);
    updateMeta("twitter:description", description);

    if (type === "article" && publishedTime) {
      updateMeta("article:published_time", publishedTime, true);
      updateMeta("article:author", author, true);
    }

    // Update canonical link
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    link.href = canonical ? `${BASE_URL}${canonical}` : BASE_URL;

    // Add structured data
    if (structuredData) {
      const existingScript = document.querySelector('script[data-seo="structured-data"]');
      if (existingScript) {
        existingScript.remove();
      }
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "structured-data");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup structured data on unmount
      const script = document.querySelector('script[data-seo="structured-data"]');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, canonical, type, publishedTime, author, structuredData]);

  return null;
}

// Pre-built structured data generators
export const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GuruCool",
    url: "https://edugurucool.in",
    logo: "https://edugurucool.in/favicon.png",
    description: "Smart School Management System built for Indian schools",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thane",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-70589-05200",
      contactType: "sales",
      email: "edu.gurucool@gmail.com",
    },
    sameAs: [
      "https://www.linkedin.com/company/gurucool-technologies/",
      "https://www.instagram.com/edugurucool",
    ],
  },

  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "GuruCool",
    url: "https://edugurucool.in",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://edugurucool.in/features?search={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  },

  softwareApplication: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "GuruCool",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    description: "Smart School Management System with QR attendance, WhatsApp communication, and admin dashboards for Indian schools.",
  },

  faqPage: (faqs: { question: string; answer: string }[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }),

  blogPosting: (post: {
    title: string;
    description: string;
    datePublished: string;
    slug: string;
  }) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.datePublished,
    author: {
      "@type": "Organization",
      name: "GuruCool",
    },
    publisher: {
      "@type": "Organization",
      name: "GuruCool",
      logo: {
        "@type": "ImageObject",
        url: "https://edugurucool.in/favicon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://edugurucool.in/blog/${post.slug}`,
    },
  }),
};
