import { SEO } from "@/components/SEO";
import { PageHeader } from "@/components/layout/PageHeader";
import { SolutionOperationsStage } from "@/components/solutions/SolutionOperationsStage";

export default function SolutionsCollegesPage() {
  return (
    <>
      <SEO 
        title="Solutions for Colleges" 
        description="Scale your higher education operations with GuruCool's advanced attendance, academic scheduling, and reporting layers."
        canonicalPath="/solutions/colleges"
      />
      <PageHeader 
        variant="dark"
        eyebrow="Solutions: Higher Education"
        title="Operating at Scale for Colleges" 
        description="Handle complex academic structures, massive student records, and intricate exam seating with one unified system."
        alignment="left"
      />
      <SolutionOperationsStage kind="college" reverse eyebrow="Higher education" title="Built for higher education complexity" description="From timetable generation to advanced assessment workflows and invigilator allotment, GuruCool scales with your college." points={["Faculty and timetable coordination", "Assessment workflow visibility", "Connected academic records"]} />
    </>
  );
}
