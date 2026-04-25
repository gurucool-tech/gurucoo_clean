import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AbstractDashboard } from "@/components/ui/AbstractDashboard";

export default function SolutionsTuitionPage() {
  return (
    <>
      <SEO 
        title="Solutions for Tuition & Coaching" 
        description="Streamline branch operations, fee tracking, and parent communication for your tuition or coaching institution."
        canonicalPath="/solutions/tuition-coaching"
      />
      <PageHeader 
        eyebrow="Solutions: Coaching Centers"
        title="Growth Infrastructure for Coaching Institutions" 
        description="Keep parents in the loop, track attendance flawlessly, and never miss a fee collection across all your branches."
        alignment="left"
      />
      <SectionContainer>
        <div className="max-w-6xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">The ultimate parent loop</h2>
          <p className="text-lg text-muted-foreground mb-8">
            WhatsApp integration ensures parents receive immediate updates on attendance and performance, building unshakeable trust in your coaching brand.
          </p>
          {/* Abstract UI Representation */}
          <div className="mb-12">
            <AbstractDashboard colorScheme="primary" title="Tuition Branch Dashboard" mode="attendance" />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
