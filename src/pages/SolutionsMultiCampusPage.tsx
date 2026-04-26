import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AbstractDashboard } from "@/components/ui/AbstractDashboard";

export default function SolutionsMultiCampusPage() {
  return (
    <>
      <SEO 
        title="Solutions for Multi-Campus Groups" 
        description="Centralized control, standardized operations, and total visibility across every branch of your educational group."
        canonicalPath="/solutions/multi-campus"
      />
      <PageHeader 
        title="Centralized Command for Multi-Campus Groups" 
        description="Standardize your operations. Gain real-time visibility into every branch from one central headquarters dashboard."
      />
      <SectionContainer>
        <div className="max-w-6xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">One system. Every branch.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't let data silo by location. GuruCool's multi-campus architecture allows leadership to oversee attendance, fees, and academic performance across the entire network in real time.
          </p>
          {/* Abstract UI Representation */}
          <div className="mb-12">
            <AbstractDashboard colorScheme="foreground" title="Multi-Campus Executive View" />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
