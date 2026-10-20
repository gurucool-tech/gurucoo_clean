import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolutionOperationsStage } from "@/components/solutions/SolutionOperationsStage";

export default function SolutionsSchoolsPage() {
  return (
    <>
      <SEO 
        title="Solutions for Schools" 
        description="Connect your school's attendance, academics, communication, exams, fees, and reporting into one structured operational system."
        canonicalPath="/solutions/schools"
      />
      <PageHeader 
        variant="editorial"
        eyebrow="Solutions: Schools"
        title="Connected Operations for Modern Schools" 
        description="Move beyond fragmented school management apps. GuruCool provides a unified layer for K-12 operations."
      />
      <SolutionOperationsStage kind="school" eyebrow="School operations" title="Stop managing software. Start managing your school." description="Too much admin steals time from teaching. Records get scattered. Parent communication stays reactive. We fix that." points={["Connected daily attendance", "Clear parent communication", "School-wide operational visibility"]} />
    </>
  );
}
