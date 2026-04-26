import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SectionContainer } from "@/components/layout/SectionContainer";
import { AbstractDashboard } from "@/components/ui/AbstractDashboard";

export default function SolutionsSchoolsPage() {
  return (
    <>
      <SEO 
        title="Solutions for Schools" 
        description="Connect your school's attendance, academics, communication, exams, fees, and reporting into one structured operational system."
        canonicalPath="/solutions/schools"
      />
      <PageHeader 
        title="Connected Operations for Modern Schools" 
        description="Move beyond fragmented school management apps. GuruCool provides a unified layer for K-12 operations."
      />
      <SectionContainer>
        <div className="max-w-6xl mx-auto py-12">
          <h2 className="text-3xl font-bold mb-6 text-foreground">Stop managing software. Start managing your school.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Too much admin steals time from teaching. Records get scattered. Parent communication stays reactive. We fix that.
          </p>
          {/* Abstract UI Representation */}
          <div className="mb-12">
            <AbstractDashboard colorScheme="primary" title="School Overview" />
          </div>
        </div>
      </SectionContainer>
    </>
  );
}
