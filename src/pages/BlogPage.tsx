import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageCircle, ArrowRight, Calendar, Clock } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { SEO } from "@/components/SEO";

const WHATSAPP_LINK = "https://wa.me/917058905200?text=Hello%20Team%20GuruCool%2C%20I%20would%20like%20to%20learn%20more.";

const blogPosts = [
  {
    id: 1,
    title: "Why Attendance Accuracy Matters More Than You Think",
    excerpt: "Most schools track attendance—but few truly understand its impact on safety, compliance, and parent trust. Here's what accurate attendance really means.",
    category: "Operations",
    date: "January 15, 2025",
    readTime: "5 min read",
    slug: "attendance-accuracy-matters",
  },
  {
    id: 2,
    title: "The WhatsApp Advantage: Why Apps Fail in Indian Schools",
    excerpt: "Parent apps promised better communication, but adoption drops fast. Here's why WhatsApp wins for Indian schools—and how to use it correctly.",
    category: "Communication",
    date: "January 10, 2025",
    readTime: "4 min read",
    slug: "whatsapp-advantage-parent-apps",
  },
  {
    id: 3,
    title: "Starting Simple: The Staged Approach to School Digitization",
    excerpt: "Most implementations fail when schools try to do everything at once. A staged rollout wins because it respects human adoption limits.",
    category: "Implementation",
    date: "January 5, 2025",
    readTime: "6 min read",
    slug: "staged-approach-school-digitization",
  },
];

export default function BlogPage() {
  return (
    <div className="flex-1 flex flex-col bg-background">
      <SEO
        title="Blog | Practical School Management Insights | GuruCool"
        description="Insights on attendance accuracy, WhatsApp communication, and phased digitization for Indian schools."
        canonical="/blog"
      />
      <PageHeader
        title="Blog"
        subtitle="Insights on school management, education technology, and operational efficiency. No fluff, just practical knowledge."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      {/* Blog Posts */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-card rounded-xl border border-border/50 p-8 hover:shadow-premium transition-shadow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="pill pill-primary">{post.category}</span>
                    <div className="flex items-center gap-4 text-caption text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h2 className="text-heading-xl font-bold text-foreground mb-3 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-body-md text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link to={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                    Read More <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-body-md text-muted-foreground mb-4">
                More articles coming soon. Subscribe to get notified.
              </p>
              <Button asChild variant="outline" className="gap-2">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4" />
                  Get Updates on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
